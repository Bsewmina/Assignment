
import React, { useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form"; import { useState } from "react";
import { useParams } from "react-router-dom";

function UpdateCustomer () {

    const [Name, setName] = useState('');
    const [DOB, setDOB] = useState('');
    const [Mobile, setMobile] = useState('');
    const [NIC, setNIC] = useState('');
    const [Address, setAddress] = useState('');

    const {id} = useParams();
    
    useEffect(() => {
        getCustomer();
    },[])

    const getCustomer = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/customer/${id}`);
        setName(result.data.name);
        setDOB(result.data.dob);
        setMobile(result.data.mobile);
        setNIC(result.data.nic);
        setAddress(result.data.address);
    }


    const postData = async (e) => {

        e.preventDefault()
        const cusdata = { 
            name: Name,
            dob: DOB,
            nic: NIC,
            mobile: Mobile,
            address: Address
        }
        try {
        
        const res = await axios.put(`http://localhost:8080/api/v1/customer/${id}`, cusdata)
        console.log(res.data)
        alert("Customer Successfully Updated");

        } catch (e) {
        alert(e)
        }
    }

    return(
        <div className="container1">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                    <Form.Group >
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" name="dob" id="inputDOB" placeholder="Date of Birth" value={DOB} onChange={(e) => setDOB(e.target.value)} />
                        </Form.Group>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputNIC">NIC Number</label>
                    <input type="text" className="form-control" id="inputNIC" placeholder="1999242424V" value={NIC} onChange={(e) => setNIC(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="inputMobile">Mobile Number</label>
                    <input type="tel" className="form-control" id="inputMobile" placeholder="7712345678" value={Mobile} onChange={(e) => setMobile(e.target.value)}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="11/A, Jork street, Colombo 05" value={Address} onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <button onClick={postData} type="submit" className="btn btn-primary">Update Customer</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default UpdateCustomer;