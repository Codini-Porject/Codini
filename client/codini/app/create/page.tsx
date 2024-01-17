"use client";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useIdentity } from "../(auth)/IdentityContext";


interface Course {
  desc: string;
  price: number;
  rate: number;
}

interface Video {
  Videos: string;
}

const Create: React.FC = () => {
  const { user } = useIdentity();
  console.log(user);

  const [rate, setRate] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [desc, setDescription] = useState<string>("");
  const [select, setSelect] = useState<number>(0);
  const [vid, setVideo] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/courses/addcourse",
        {
          desc: desc,
          price: price,
          rate: rate,
          teachers_idteachers: 1,
          languages_idlanguages: select, // no need to parse it again
          videos: vid,
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/doytchn8h/video/upload?upload_preset=marketplace&cloud_name=doytchn8h`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        setVideo(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading video:", error);
      }
    }
  };
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '440px', margin: 'auto', marginTop: '20px' }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '55ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Description" variant="standard" onChange={(e) => setDescription(e.target.value)} />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '55ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Price" variant="standard" onChange={(e) => setPrice(parseFloat(e.target.value))} />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '55ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Rate" variant="standard" onChange={(e) => setRate(parseFloat(e.target.value))} />
      </Box>
  
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label>Language:</label>
          <select
            name="selectedLanguage"
            style={{ color: "black" }}
            value={select}
            onChange={(e) => setSelect(parseInt(e.target.value))}
            required
          >
            <option value={0}>Select a language</option>
            <option value={1}>JavaScript</option>
            <option value={2}>PHP</option>
            <option value={6}>Next.js</option>
            <option value={7}>Node</option>
            <option value={3}>CSS</option>
            <option value={4}>HTML</option>
            <option value={5}>jQuery</option>
            <option value={8}>TypeScript</option>
          </select>
        </div>
        <button type="submit" className="cta" onClick={handleSubmit}>
          <span>Submit</span>
        </button>
      </div>
    </div>
  );
      }
      export default Create;
  




  