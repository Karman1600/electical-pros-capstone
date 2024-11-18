// Handles the submission of the file upload form
const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior (page reload)
    
    if (!file) return; // If no file is selected, exit early

    // Create a FormData object to send the file as part of a POST request
    const formData = new FormData();
    formData.append('image', file); // Attach the selected file to the 'image' field

    try {
        // Make a POST request to the '/api/upload' endpoint to upload the file
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData, // Include the file data in the request body
        });

        // Parse the JSON response from the server
        const data = await response.json();

        // Update the state variable `message` with the server's response message
        setMessage(data.message);

        // Pass the uploaded image's local URL to the parent component via callback
        onImageUpload(URL.createObjectURL(file)); 
        // Generates a temporary URL for the uploaded file and sends it to the parent
    } catch (error) {
        // If there's an error during upload, update the message state to show an error
        setMessage('Error uploading image');
    }
};
