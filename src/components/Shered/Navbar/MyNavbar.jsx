import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import Logo from "../../../assets/img/logo-removebg-preview.png"
import DummyPic from "../../../assets/img/userpic.jpg"
import useAuth from "../../../Hooks/useAuth";



const MyNavbar = () => {
  const { currentUser, logOut } = useAuth();
  console.log(currentUser);
  // const hangle
  return (
    <Navbar fluid rounded>

      <Navbar.Brand >
        <Link to="/">
          <img src={Logo} className="mr-3 md:w-9/12" alt="Flowbite React Logo" />
        </Link>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={currentUser?.photoURL || DummyPic} rounded />

          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{currentUser?.displayName}</span>
            <span className="block truncate text-sm font-medium">{currentUser?.email}</span>
          </Dropdown.Header>

        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse id="mynav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-articles">Add Articles</NavLink>
        <NavLink to="/all-articles">All Articles</NavLink>
        {/* <NavLink to="/">Subscription</NavLink> */}
        <NavLink to="/dashboard/all-users">Dashboard</NavLink>
        {/* <NavLink to="/">My Articles</NavLink>
        <NavLink to="/">Premium Articles</NavLink> */}
        {currentUser ? <Button color="failure" onClick={logOut}>LoginOut</Button> : <NavLink to="login">Login</NavLink>}
        {/* <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;