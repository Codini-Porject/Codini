// Navbar.js

"use client";
import Link from "next/link";
import { useIdentity } from "../(auth)/IdentityContext";
import "./navbar.css";


import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
// import { AddNoteIcon } from "../addb/page";



interface user {
  idstudent: number;
  name: String;
  image: string;
  email: String;
  Phrases: String;
  level: number;
  role: string;
}
const Navbar = () => {
  const { user } = useIdentity();
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    <nav className="Navbar">
      <img
        style={{ marginLeft: "3cm" }}
        alt=""
        src="https://cdn.discordapp.com/attachments/1161195165503995984/1198935168589779005/codinilogo5.jpg?ex=65c0b663&is=65ae4163&hm=91bcc05644c8567e3060768dd6114aba830a787cc2ab00d4608b84a6ddd76d25&"
      />
      <div className="ab">
        <Link href="/">
          <button>
            <div className="home">Home</div>
          </button>
        </Link>
        <Link href="/learn">
          <button>
            <div className="careers">Learn</div>
          </button>
        </Link>
        <Link href="/courses">
          <button>
            <div className="courses">Courses</div>
          </button>
        </Link>
        <Link href="/aboutUs">
          <button>
            <div className="aboutUs">About Us</div>
          </button>
        </Link>
        <Link href="/search">
          <button>
            <div className="search">Search</div>
          </button>
        </Link>
      </div>

      {user ? (
        <div className="flex items-center gap-4 left-[100px] top-[100px] bg-red ">
          <Dropdown className="border border p-4 rounded-lg bg-white shadow-md ">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="lina rounded-full w-20 h-20 object-cover"
                src={
                  user?.image ||
                  "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                }
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Profile Actions"
              variant="flat"
              className="py-2"
            >
              <DropdownItem key="profile" className="h-14 gap-1">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user?.email}</p>
              </DropdownItem>
              
                <DropdownItem key="settings" className="dropdown-item h-14 gap-2" shortcut="⌘" startContent={<Avatar showFallback />}>
                <Link href="/userProfile" > My Profile</Link>
                </DropdownItem>
              
              <DropdownItem key="logout" color="danger" className="dropdown-item" shortcut="⌘" startContent="">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      ) : (
        <Link href="/login">
          <button>
            <div className="lina">LogIn</div>
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
