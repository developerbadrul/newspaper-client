import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo-removebg-preview.png"

const MyFooter = () => {
    return (
      <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2023} />
      </div>
    </Footer>
    );
};

export default MyFooter;