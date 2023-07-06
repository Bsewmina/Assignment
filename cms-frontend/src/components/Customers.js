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


    const deleteCustomer  = {

    }

    return (
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
                    {cusomers && cusomers.map(cusomer =>
                        <tr key={cusomer.id}>
                            <td>{cusomer.name}</td>
                            <td>{cusomer.nic}</td>
                            <td>{cusomer.dob}</td>
                            <td>{cusomer.mobile}</td>
                            <td>{cusomer.address}</td>
                            <td><Link className='btn btn-outline-primary mx-2' to={`/edit/${cusomer.id}`}>Edit</Link>
                                <button className='btn btn-danger mx-2' onClick={() => deleteCustomer(cusomer.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
    
}

export default Customers;
