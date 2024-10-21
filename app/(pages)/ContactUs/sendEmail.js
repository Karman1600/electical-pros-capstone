const mailjet = require('node-mailjet').connect(
  '7f4d8792832c55984379910d38dc42',  
  'bc36e99fdOcba47b60a90f8962b64a07' 
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, message } = req.body;

    // Basic input validation
    if (!fullName || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const request = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'your-email@example.com', // Your Mailjet email address
              Name: 'Your Name', // Your name
            },
            To: [
              {
                Email: email, // User's email from the form
                Name: fullName,   // User's name from the form
              },
            ],
            Subject: `New message from ${fullName}`,
            TextPart: message,
            HTMLPart: `<h3>New message from ${fullName}</h3><p>${message}</p><p>Email: ${email}</p>`,
          },
        ],
      });

    try {
      const result = await request; // Await the request to Mailjet
      console.log('Email sent successfully:', result.body);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Mailjet error:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
