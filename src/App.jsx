import { Outlet } from "react-router-dom";
import MyNavbar from "./components/Shered/Navbar/MyNavbar";

const App = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default App;