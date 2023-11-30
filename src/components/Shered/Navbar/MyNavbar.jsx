import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import Logo from "../../../assets/img/logo-removebg-preview.png"
import useAuth from "../../../Hooks/useAuth";



const MyNavbar = () => {
  const { currentUser, logOut } = useAuth();
  // const hangle
  return (
    <Navbar fluid rounded>

      <Navbar.Brand >
        <Link to="/">
          <img  src={Logo} className="mr-3 md:w-9/12" alt="Flowbite React Logo" />
        </Link>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse id="mynav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-articles">Add Articles</NavLink>
        <NavLink to="/all-articles">All Articles</NavLink>
        <NavLink to="/">Subscription</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/">My Articles</NavLink>
        <NavLink to="/">Premium Articles</NavLink>
        <NavLink to="login">Login</NavLink>
        {currentUser && <Button color="failure" onClick={logOut}>LoginOut</Button>}
        {/* <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;