
"use client"
import  Link  from 'next/link';
import "./navbar.css"



const Navbar=()=>{
    return (
      <nav className="Navbar">
       <img style={{marginLeft:"3cm"}} alt="" src="https://cdn.discordapp.com/attachments/1161195165503995984/1198935168589779005/codinilogo5.jpg?ex=65c0b663&is=65ae4163&hm=91bcc05644c8567e3060768dd6114aba830a787cc2ab00d4608b84a6ddd76d25&" />
       <div className="ab">

       <Link href="/"><button><div className="home">Home</div></button></Link>
       <Link href="/"><button><div className="careers">Careers</div></button></Link>
       <Link href="/courses"><button><div className="courses">Courses</div></button></Link>
       <Link href="/aboutUs"><button><div className="aboutUs">About Us</div></button></Link>
       <Link href="/search"><button><div className="search">Search</div></button></Link>

        </div>
     <Link href="/login"><button><div className="lina">LogIn</div></button></Link>

      {/* <div className="rectangleParent">

      </div> */}
    </nav>

  );
  };
export default Navbar;
