"use client";
import React, { ChangeEvent, useState, useEffect } from 'react';
import axios from 'axios';
import { useIdentity } from "../../(auth)/IdentityContext";
import { useRouter } from 'next/navigation';

function Page() {
  const route = useRouter();
  const [vid, setVideo] = useState<string>("");
  const [courseId, setCoureseId] = useState<string>("");
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const { user } = useIdentity();
  const idTeacher = user?.id;

  useEffect(() => {
    const arr = window.location.href.split('/');
    setCoureseId(arr[arr.length - 1]);
  }, []);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (e.target.files) {
      try {
        for (let i = 0; i < e.target?.files?.length; i++) {
          const formData = new FormData();
          formData.append("file", file[i]);
          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/doytchn8h/video/upload?upload_preset=marketplace&cloud_name=doytchn8h`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          setVideo(response.data.secure_url);
          const videoResponse = await axios.post(
            `http://localhost:8000/videos/courses/${courseId}`,
            {
              videos: response.data.secure_url,
              teachers_idteachers: idTeacher,
            }
          );
        }
        setUploadSuccess(true);
      } catch (error) {
        console.error("Error uploading video:", error);
      }
    }
  };

  useEffect(() => {
    if (uploadSuccess) {
      alert("Video uploaded successfully!");
    }
  }, [uploadSuccess]);

  return (
    <div className="h-screen font-sans text-gray-900 bg-gray-300 border-box">
      <div className="flex justify-center w-full mx-auto sm:max-w-lg">
        <div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
          <div className="mt-10 mb-10 text-center">
            <h2 className="text-2xl font-semibold mb-2">Upload your files</h2>
            <p className="text-xs text-gray-500">File should be of format .mp4, .avi, .mov or .mkv</p>
          </div>
          <form action="#" className="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner">
            <input type="file" id="file-upload" className="hidden" onChange={(e) => handleImageUpload(e)} multiple />
            <label htmlFor="file-upload" className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
              <p className="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your files here</p>
              <svg className="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
              </svg>
            </label>
          </form>
          <button
            onClick={() => route.push(`/teacher/${idTeacher}`)}
            className="checkbox-button"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
