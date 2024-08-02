'use client'
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [prediction, setPrediction] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        handleFile(file);
      }
    },
  });

  async function handleFile(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  }

  return (
    <main className="p-4">
      <div {...getRootProps()} className="border-dashed border-2 border-gray-400 p-4 rounded">
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select one</p>
      </div>
      {prediction && <p>Prediction: {prediction}</p>}
    </main>
  );
}
