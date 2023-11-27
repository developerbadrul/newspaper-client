import useLoadAllUsers from "../../Hooks/useLoadAllUsers";

const AllUsers = () => {
    const [users] = useLoadAllUsers();
    console.log("all users", users);
    return (
        <div>
            <h2 className="text-center font-bold text-3xl underline text-cyan-700">Total User: {users?.length}</h2>
        </div>
    );
};

export default AllUsers;