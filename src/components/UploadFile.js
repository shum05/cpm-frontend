import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file");
            return;
        }
        
        const formData = new FormData();
        formData.append("file", file);
        
        try {
            const response = await axios.post("https://cpm-backend-kw0o.onrender.com/upload", formData);
            onUploadSuccess(response.data); // ✅ Ensures data is passed to App.js
        } catch (error) {
            console.error("Error uploading file", error);
            alert("Upload failed. Check backend logs.");
        }
    };
    

    return (
        <div>
            <h2>Upload CSV File</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadFile;
