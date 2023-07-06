import axios from "axios";
import { read, utils,} from 'xlsx';
import Form from "react-bootstrap/Form"; import { useState } from "react";

function AddCustomer() {

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

    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = async (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    console.log(rows);
                    rows.forEach(bulkData);
                }
            }
            reader.readAsArrayBuffer(file);
        }          
    }

    async function bulkData(data) {
        const res = await axios.post('http://localhost:8080/api/v1/customer', data)
                    console.log(res.data)
    }

    return (
        <div >
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
            <div>
            <div className="container row mb-5 mt-5">
                <div className="col-sm-6 offset-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AddCustomer;