import { Outlet } from "react-router-dom";
import MyNavbar from "./components/Shered/Navbar/MyNavbar";
import MyFooter from "./components/Shered/Footer/MyFooter";

const App = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <div className="h-screen"><Outlet></Outlet></div>
            <MyFooter></MyFooter>
        </div>
    );
};

export default App;