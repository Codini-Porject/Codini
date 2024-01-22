"use client"
import axios from "axios";
import React, { useState, ChangeEvent } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';



interface CreateProps {
	searchParams?: {
	  imagestu?: string;
	};
  }

const Create: React.FC<CreateProps> = ({searchParams } 
	
) => {
  const { id } = useParams();
  
  
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string | null>("");
    const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.7:8000/student/upd/1`,
        {
          name: name,
          email: email,
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

<div className="container">
<div className="row gutters">
<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	<div className="card-body">
		<div className="account-settings">
        <div className="user-avatar">
  <img src={image || (searchParams?.imagestu ?? "")} alt="Maxwell Admin" />
  <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
</div>
<input
  className="btn btn-primary mt-3"
  onClick={() => document.getElementById("imageInput")?.click()}
  type="button"
  value="Update Image"
/>
<input
  id="imageInput"
  onChange={handleImageUpload}
  name="image"
  type="file"
  accept="image/*"
  style={{ display: 'none' }}
/>
		
		</div>
	</div>
</div>
</div>
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	<div className="card-body">
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-2 text-primary">Personal Details</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="fullName">Full Name</label>
					<input type="text" className="form-control" id="fullName" placeholder="Enter full name"  onChange={(e) => setName(e.target.value)}/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="eMail">Email</label>
					<input type="email" className="form-control" id="eMail" placeholder="Enter email ID " onChange={(e) => setEmail(e.target.value)}/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="phone">Password</label>
					<input type="text" className="form-control" id="phone" placeholder="Enter your password"  onChange={(e) => setPassword(e.target.value)}/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Website URL</label>
					<input type="url" className="form-control" id="website" placeholder="Website url"/>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mt-3 mb-2 text-primary">Address</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="Street">Street</label>
					<input type="name" className="form-control" id="Street" placeholder="Enter Street"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="ciTy">City</label>
					<input type="name" className="form-control" id="ciTy" placeholder="Enter City"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="sTate">State</label>
					<input type="text" className="form-control" id="sTate" placeholder="Enter State"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="zIp">Zip Code</label>
					<input type="text" className="form-control" id="zIp" placeholder="Zip Code"/>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right">
					<button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
					<Link href="/user"><button type="button" id="submit" name="submit" className="btn btn-primary"onClick={handleSubmit }>Update</button></Link>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>
  );
};
export default Create;

