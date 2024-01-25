"use client";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useIdentity } from "../(auth)/IdentityContext";
import { useRouter } from "next/navigation";

interface Course {
  desc: string;
  price: number;
  rate: number;
  image:string
}

interface Video {
  idteachers_idteachers: number;
  Videos: string;
}

const Create: React.FC = () => {
  const route = useRouter();

  const { user } = useIdentity();
  const idTeacher = user?.id;
  console.log(idTeacher);

  const [rate, setRate] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [desc, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [select, setSelect] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const courseResponse = await axios.post(
        "http://localhost:8000/courses/addcourse",
        {
          desc: desc,
          price: price,
          rate: rate,
          image:image,
          teachers_idteachers: idTeacher,
          languages_idlanguages: select,
        }
      );
      console.log(courseResponse);
      route.push(
        `http://localhost:3000/create/${courseResponse.data.idcourse}`
      );

      console.log("Course response:", courseResponse.data);
    } catch (error) {
      console.error("Error creating course or video:", error);
    }
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
  console.log("hhheeee",formData);
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/doytchn8h/image/upload?upload_preset=marketplace&cloud_name=doytchn8h`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
  
        setImage(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        width: "440px",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "55ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Price"
          variant="standard"
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Rate"
          variant="standard"
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
      </Box>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Language
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "Language",
                id: "uncontrolled-native",
              }}
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
            </NativeSelect>
          </FormControl>
        </Box>
        <button type="submit" className="cta" onClick={handleSubmit}>
          <span>Submit</span>
        </button>
      </div>
    </div>
  );
};
export default Create;
