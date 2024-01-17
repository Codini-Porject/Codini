"use client"
import axios from "axios";
import React, { useState, ChangeEvent } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import style from "./index.module.css"



const Create: React.FC = () => {
  const { id } = useParams();
const route = useRouter()
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string | null>("");
    const [desc, setDescription] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8000/teacher/upd/${id}`,
        {
          name: name,
          desc: desc,
          image: image,
          password: password,
        }    
      );

      ;
      
      // Handle the response as needed
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
<div className="container-xl px-4 mt-4">
  <hr className="mt-0 mb-4" />
  <div className="row">
    <div className="col-xl-4">
      <div className="card mb-4 mb-xl-0">
        <div className="card-header">Profile Picture</div>
        <div className="card-body text-center">
          <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
          <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
          <label className="file-input-label">
            <input
              onChange={handleImageUpload}
              name="image"
              type="file"
              accept="image/*"
              style={{ display: 'none' }} // Hide the input element
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              className="icon"
            >
              <polyline points="16 16 12 12 8 16"></polyline>
              <line y2="21" x2="12" y1="12" x1="12"></line>
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
              <polyline points="16 16 12 12 8 16"></polyline>
            </svg>
          </label>
        </div>
      </div>
    </div>
    <div className="col-xl-8">
      <div className="card mb-4">
        <div className="card-header">Account Details</div>
        <div className="card-body">
          <form onChange={handleSubmit}>
            <div className="mb-3">
              <label className="small mb-1" htmlFor="inputUsername">Name</label>
              <input className="form-control" id="inputUsername" type="text" placeholder="Enter your name" name="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="row gx-3 mb-3">
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputEmailAddress">Description</label>
                <input className="form-control" id="inputEmailAddress" placeholder="Enter your description" name="desc" onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputLastName">Password</label>
                <input className="form-control" id="inputLastName" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <Link href={`/teacher/${id}`}>
  <button className="btn btn-primary" type="submit">Save changes</button>
</Link>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Create;




{/* <div className="custom-form-container"> */}
{/* <form onSubmit={handleSubmit} className="custom-form">
  <div className="form-group">
    <label className="form-label">Name:</label>
    <input
      name="name"
      type="text"
      className="form-input"
     
      required
    />
  </div>
  <div className="form-group">
    <label className="form-label">Description:</label>
    <input
      name="description"
      type="text"
      className="form-input"
   
      required
    />
  </div>
  <div className="form-group">
    <label className="form-label">Password:</label>
    <input
      name="password"
      type="password"
      className="form-input"
      
      required
    />
  </div>
  <div className="form-group">
    <label className="form-label">Image:</label>
<div className={style.inputdiv}>
<input onChange={handleImageUpload} name="image" type="file" accept="image/*"/>

</div>

  </div>
  <button type="submit" className="submit-button" onClick={()=>route.push(`/teacher/${id}`)}>
     Done
  </button>
</form> */}
    {/* </div> */}