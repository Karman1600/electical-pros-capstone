// Import Mailjet and connect using environment variables
const mailjet = require('node-mailjet').connect(
  process.env.MAILJET_API_KEY, 
  process.env.MAILJET_API_SECRET
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Basic input validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const request = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'navrajmauhar1@gmail.com', // Your Mailjet email address
              Name: 'Navraj Mauhar', // Your name
            },
            To: [
              {
                Email: email, // User's email from the form
                Name: name,   // User's name from the form
              },
            ],
            Subject: `New message from ${name}`,
            TextPart: message,
            HTMLPart: `<h3>New message from ${name}</h3><p>${message}</p><p>Email: ${email}</p>`,
          },
        ],
      });

    try {
      const result = await request; // Await the request to Mailjet
      console.log('Email sent successfully:', result.body);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Mailjet error:', {
        statusCode: error.statusCode,
        message: error.message,
        response: error.response?.body,
      });
      return res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
