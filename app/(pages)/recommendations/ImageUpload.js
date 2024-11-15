// import { useState } from 'react';

// const ImageUpload = () => {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('image', file);

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       setMessage('Error uploading image');
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Image</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ImageUpload;
