const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;
  
    const formData = new FormData();
    formData.append('image', file);
  
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setMessage(data.message);
      // Pass the uploaded image to the parent component
      onImageUpload(URL.createObjectURL(file)); // This will provide the image URL to the parent
    } catch (error) {
      setMessage('Error uploading image');
    }
  };
  