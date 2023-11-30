import { Card } from "flowbite-react";
import { useEffect } from "react";
import useAxiousPublic from "../../Hooks/useAxiousPublic";
import { useState } from "react";
import CountUp from 'react-countup';
import freeIcon from "../../assets/img/free.png";
import premium from "../../assets/img/premium.png";

const CountUsers = () => {

    const axiousPublic = useAxiousPublic();
    const [totalUser, setTotalUser] = useState();
    const [generalUser, setGeneralUser] = useState([]);
    const [premiumUser, setPremiumUser] = useState([]);
    useEffect(() => {
        axiousPublic.get("/general/user")
            .then(res => setGeneralUser(res.data))
    }, [axiousPublic])

    useEffect(() => {
        axiousPublic.get("/users/count")
            .then(res => setTotalUser(res.data.userCount))
    }, [axiousPublic])

    useEffect(() => {
        axiousPublic.get("/users/premium")
            .then(res => setPremiumUser(res.data.userCount))
    }, [axiousPublic])


    return (
        <div className="my-5">
            <Card className="max-w-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Total User Count</h5>
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        <CountUp end={totalUser}/>
                    </h5>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img className="w-7" src={freeIcon} alt="" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">General User</p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <CountUp end={generalUser.length}  duration={5}/>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                <img className="w-7" src={premium} alt="" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Premium User</p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <CountUp end={premiumUser}  duration={5}/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Card>
        </div>
    );
};

export default CountUsers;