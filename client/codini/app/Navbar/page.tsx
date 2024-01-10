import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link href="/page">
        <a>
          <img className="image15Icon" alt="Codinilogo" src="/Codinilogo.jpg" />
        </a>
      </Link>
      <div className="ab">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/careers">
          <a>Careers</a>
        </Link>
        <Link href="/courses">
          <a>Courses</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </div>
      <div className="lina">LogIn</div>
      <div className="rectangleParent">
        <div className="groupChild" />
        <img className="image12Icon" alt="Placeholder" src="path/to/placeholder.jpg" />
      </div>
    </div>
  );
};

export default Navbar;
