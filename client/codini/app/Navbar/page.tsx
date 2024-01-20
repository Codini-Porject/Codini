
"use client"
import  Link  from 'next/link';
import "./navbar.css"


import { useRouter } from "next/navigation";

const Navbar=()=>{
    return (
      <div className="Navbar">
       <img className="image15Icon"alt="" src="/Codinilogo.jpg" />
       <div className="ab">


       <Link href="/home"><button><div className="home">Home</div></button></Link>
6
       <Link href="/"><button><div className="careers">Careers</div></button></Link>
       <Link href="/"><button><div className="courses">Courses</div></button></Link>
       <Link href="/aboutUs"><button><div className="aboutUs">About Us</div></button></Link>
        </div>
     <Link href="/login"><button><div className="lina">LogIn</div></button></Link>


      <div className="home"><Link href={"/"}>Home</Link></div>
      <div className="careers"><Link href={"/create"}>create</Link></div>
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
