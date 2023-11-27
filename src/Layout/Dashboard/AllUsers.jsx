import { Button, Table } from "flowbite-react";
import useLoadAllUsers from "../../Hooks/useLoadAllUsers";
import dummyUser from "../../assets/img/userpic.jpg"
import { RiDeleteBin6Line } from "react-icons/ri";
const AllUsers = () => {
    const [users] = useLoadAllUsers();
    console.log("all users", users);
    return (
        <div>
            <h2 className="text-center font-bold text-3xl underline text-cyan-700">Total User: {users?.length}</h2>
            <div className="overflow-x-auto my-6">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Profile Pic</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Role</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            users.map(user => <Table.Row key={user._id} user={user} className="bg-white font-bold dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <img src={user.pic || dummyUser} alt="" width="30px" />
                                </Table.Cell>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>
                                    <Button gradientMonochrome="success">Make Admin</Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="white" pill>
                                        <RiDeleteBin6Line  className="text-red-600 font-bold text-xl"/>
                                    </Button>
                                </Table.Cell>
                            </Table.Row>)
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default AllUsers;