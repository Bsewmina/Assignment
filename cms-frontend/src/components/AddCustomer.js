import axios from "axios";
import Form from "react-bootstrap/Form"; import { useState } from "react";

function AddCustomer() {

    //const [date, setDate] = useState(new Date());


    const [Name, setName] = useState('');
    const [DOB, setDOB] = useState('');
    const [Mobile, setMobile] = useState('');
    const [NIC, setNIC] = useState('');
    const [Address, setAddress] = useState('');
    
    const postData = async (e) => {

        e.preventDefault()
        const cusomer = { 
            name: Name,
            dob: DOB,
            nic: NIC,
            mobile: Mobile,
            address: Address
        }
        try {

        const res = await axios.post('http://localhost:8080/api/v1/customer', cusomer)
        console.log(res.data)

        alert('Customer Successfully Added')

        } catch (e) {
        alert(e)
        }
    }


    return (
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                    <Form.Group >
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" name="dob" id="inputDOB" placeholder="Date of Birth" onChange={(e) => setDOB(e.target.value)} />
                        </Form.Group>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputNIC">NIC Number</label>
                    <input type="text" className="form-control" id="inputNIC" placeholder="1999242424V" onChange={(e) => setNIC(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="inputMobile">Mobile Number</label>
                    <input type="tel" className="form-control" id="inputMobile" placeholder="7712345678" onChange={(e) => setMobile(e.target.value)}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="11/A, Jork street, Colombo 05" onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <button onClick={postData} type="submit" className="btn btn-primary">Create Customer</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default AddCustomer;