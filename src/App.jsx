import { Outlet } from "react-router-dom";
import MyNavbar from "./components/Shered/Navbar/MyNavbar";
import MyFooter from "./components/Shered/Footer/MyFooter";

const App = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Outlet></Outlet>
            <MyFooter></MyFooter>
        </div>
    );
};

export default App;