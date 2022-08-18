import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Main = () => {
    return (
        <div className="main">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Main;