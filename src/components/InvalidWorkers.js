import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import UserCard from "./InvalidClient";
import InvalidWorkerCard from "./InvalidWorkerCard";
import "./InvalidClients.css";

function InvalidWorkers() {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [users, setUsers] = useState([]);

    //   const theState = useSelector((state) => state);

    //   const invalidUsers = useSelector((state) => state);
    //   console.log("These are the invalid users:", invalidUsers);

    useEffect(() => {
        if (!localStorage.getItem("admin")) {
            navigate("/");
        } else {
            axios
                .get("http://localhost:5000/api/worker/invalidworkers")
                .then((response) => {
                    console.log(response.data);
                    setUsers(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    // dispatch(setInvalidUsers(users));
    console.log(users)

    // dispatch(setUser(result.newUser))

    return (

        <div >
            <h1>Validate Workers</h1>
            <div className="main">
                <div className="leftPanel"></div>
                <div className="rightPanel">
                    {
                        users.length > 0 ? users.map((item, index) =>
                            <InvalidWorkerCard
                              workerId={item._id}
                              firstname={item.firstname}
                              lastname={item.lastname}
                              phone={item.phone}
                              email={item.email}
                              idimage={item.IDcard}
                              expertise={item.expertise}
                            />
                        ) : <h1>No users found</h1>
                    }


                    {/* // <UserCard
                    //     pid="211024"
                    //     firstname="Chris"
                    //     lastname="Dias"
                    //     phone="9637261594"
                    //     email="chrisdias2311@student.sfit.ac.in"
                    //     year="SE"
                    //     dept="INFT"
                    //     div="A"
                    // />
                    // <UserCard /> */}
                </div>
            </div>
        </div>
    );



    // return (

    //     <div>
    //         <h1>Validate Users</h1>
    //         <div className="main">
    //             <div className="leftPanel"></div>
    //             <div className="rightPanel">
    //                 <UserCard
    //                     pid="211024"
    //                     firstname="Chris"
    //                     lastname="Dias"
    //                     phone="9637261594"
    //                     email="chrisdias2311@student.sfit.ac.in"
    //                     year="SE"
    //                     dept="INFT"
    //                     div="A"
    //                 />
    //                 <UserCard />
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default InvalidWorkers;
