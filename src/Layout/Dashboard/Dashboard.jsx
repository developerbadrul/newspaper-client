
import { Sidebar } from "keep-react";
import { Article, ChartBar,  LockKey,  Signpost, SquaresFour, TreeStructure, User } from "phosphor-react";
import { NavLink, Outlet } from "react-router-dom";
import useLoadAdmin from "../../Hooks/useLoadAdmin";

const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useLoadAdmin();
    console.log("isAdmin", isAdmin, "isAdminLoading", isAdminLoading);

    return (
        <div className="flex w-11/12 mx-auto">
            <div className="bg-green-400">
                <Sidebar aria-label="Sidebar with multi-level dropdown example" >
                    <Sidebar.ItemGroup>
                        <Sidebar.Item icon={<SquaresFour size={24} />}>
                            Dashboard
                        </Sidebar.Item>
                        <NavLink to="/dashboard/all-users">
                            <Sidebar.Item icon={<User size={24} />}>
                                All Users
                            </Sidebar.Item>
                        </NavLink>
                        <NavLink to="/dashboard/all-articles">
                            <Sidebar.Item icon={<Article size={24} />}>
                                All Articles
                            </Sidebar.Item>
                        </NavLink>
                        <NavLink to="/dashboard/add-publisher">
                            <Sidebar.Item icon={<Signpost size={24} />}>
                                Add Publisher
                            </Sidebar.Item>
                        </NavLink>

                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={<TreeStructure size={24} />}>
                            Project Plan
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={<ChartBar size={24} />}>
                            Our Progress
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={<LockKey size={24} />}>
                            Security
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar>
            </div>
            <div className="flex-1 my-6"><Outlet></Outlet></div>
        </div>
    );
};

export default Dashboard;
