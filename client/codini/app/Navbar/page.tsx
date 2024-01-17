"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {


  const route= useRouter()
  return (
    <div className="Navbar">
       <img className="image15Icon"alt="" src="/image-15@2x.png" />
       <div className="ab">
      <div className="home" onClick={() => route.push("/")}>Home</div>
      <div className="careers"><Link href={"/create"}>Create</Link></div>
      <div className="courses"><Link href={"/courses"}>Courses</Link></div>
      <div className="blog"><Link href={"/aboutUs"} >About Us</Link></div>
      <div className="aboutUs" onClick={() => route.push("/home")}>HomePage</div>
      </div>
      <div className="lina">Louay</div>
     
      <div className="rectangleParent">
        <div className="groupChild" />
        <img className="image12Icon" alt="" src="" />
        
      </div>
     
    </div>
  );
};
export default Navbar;
