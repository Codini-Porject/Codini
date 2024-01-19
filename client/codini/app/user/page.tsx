"use client"
import React,{useState,useEffect} from "react";
import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Link from "next/link";
interface Student{
  idstudent: number;
  name: String;
  image: string;
  email: String;
  Phrases: String;
  level:number;

}

const UserProfile = () => {
  
  const [student, setStudent] = useState<Student | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);


  useEffect(() => {
    axios
      .get<Student>("http://127.0.0.7:8000/student/getone/1")
      .then((response:any) => {
        setStudent(response.data);
        
      })
      .catch((error:any) => {
        console.log("Error fetching course data:", error);
      });
      
    },[])
    const handleFollow = () => {
      // Add logic to handle follow action, e.g., make an API request to update the follow status
  
      // For demonstration purposes, toggling the follow state here
      setIsFollowing((prev) => !prev);
    };
  return (
    <div className="container">
    <div className="main-body">
    
          
          <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="">User</a></li>
              <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
          
    
          <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={student?.image} alt="Admin" className="rounded-circle profile-image" width="150" />
                  <div className="mt-3">
                    <h4 className="profile-name">{student?.name}</h4>
                    <p className="text-secondary profile-phrase">{student?.Phrases}</p>
                    <p className="text-muted font-size-sm profile-location">Bay Area, San Francisco, CA</p>
                    <button className={`btn ${isFollowing ? "btn-secondary" : "btn-primary"} btn-follow`} onClick={handleFollow}>
                      {isFollowing ? "Unfollow" : "Follow"}
                    </button>
                    <Link href="/chatsPage">
                      <button className="btn btn-outline-info btn-message">Message</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span className="text-secondary">https://bootdey.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span className="text-secondary">@bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {student?.name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {student?.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                     <Link href="/updateuser"> <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{ height: "5px"}}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                      
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{width: "89%"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%"}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{width: "89%"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "89%"}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{width: "89%"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "55%"}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{width: "89%"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "66%"}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Course Progress</h6>
          
                      <small>Backend API</small>
                      <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow={student?.level} aria-valuemin={0} aria-valuemax={100}>{student?.level}%</div>
</div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>
    
    

     )

}
export default UserProfile;