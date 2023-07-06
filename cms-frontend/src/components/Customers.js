import React, { useState , useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Customers (){

    const [cusomers, setCustomers] = useState([]);


    useEffect(() => {
        getAllCustomers();
    }, []);

    const getAllCustomers = async () => {

        const result = await axios.get("http://localhost:8080/api/v1/customer");
        console.log(result.data);
        setCustomers(result.data);

    };

    return (
        // <><div>
        //     <nav className="navbar navbar-light bg-light">
        //         <form className="form-inline">
        //             <input className="form-control mr-sm-2" type="search" placeholder="Search by NIC" aria-label="Search"/>
        //             <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onChange={(e) => setNic(e.target.value)} onClick={searchCustomer}>Search</button>
        //         </form>
        //         </nav>
        // </div>
        <div className="container">
                <h3 className="p-3 text-center">List of Customers</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>NIC</th>
                            <th>DOB</th>
                            <th>Mobile</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cusomers && cusomers.map(cusomer => <tr key={cusomer.id}>
                            <td>{cusomer.name}</td>
                            <td>{cusomer.nic}</td>
                            <td>{cusomer.dob}</td>
                            <td>{cusomer.mobile}</td>
                            <td>{cusomer.address}</td>
                            <td><Link className='btn btn-outline-primary mx-2' to={`/edit/${cusomer.id}`}>Edit</Link>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
    )
    
}

export default Customers;
