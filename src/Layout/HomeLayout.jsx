import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const HomeLayout = () => {
    return (
        <div className="container max-w-6xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;