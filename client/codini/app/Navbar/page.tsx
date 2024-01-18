
"use client"
import  Link  from 'next/link';
import "./navbar.css"


import { useRouter } from "next/navigation";

const Navbar=()=>{
    return (
      <div className="Navbar">
       <img className="image15Icon"alt="" src="/Codinilogo.jpg" />
       <div className="ab">
      <div className="home"><Link href={"/"}>Home</Link></div>
      <div className="careers">Careers</div>
      <div className="courses"><Link href={"/courses"}>Courses</Link></div>
      <div className="blog"><Link href={"/aboutUs"} >About Us</Link></div>
      {/* <div className="aboutUs">About Us</div> */}
      </div>
      <div className="lina">Louay</div>
     
      <div className="rectangleParent">
    
      </div>
    </div>
  );
  };
export default Navbar;
