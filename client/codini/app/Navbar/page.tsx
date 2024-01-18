import  Link  from 'next/link';
import "./navbar.css"

const Navbar=()=>{
    return (
      <div className="Navbar">
       <img className="image15Icon"alt="" src="/Codinilogo.jpg" />
       <div className="ab">
       <Link href="/home"><button><div className="home">Home</div></button></Link>
       <Link href="/"><button><div className="careers">Careers</div></button></Link>
       <Link href="/"><button><div className="courses">Courses</div></button></Link>
       <Link href="/aboutUs"><button><div className="aboutUs">About Us</div></button></Link>
        </div>
     <Link href="/login"><button><div className="lina">LogIn</div></button></Link>
      <div className="rectangleParent">
    
      </div>
    </div>
  );
  };
export default Navbar;
