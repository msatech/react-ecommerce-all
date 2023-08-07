import React, { useState } from 'react'
import './Address.css'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
const Address = () => {
    const [fullname, setFullname] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [statevalue, setStatevalue] = useState('');
    const [mobile, setMobile] = useState('');
    const [addresses, setAddresses] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();

        setAddresses([...addresses, {
            "fullname": fullname,
            "address1": address1,
            "address2": address2,
            "pincode": pincode,
            "city": city,
            "statevalue": statevalue,
            "mobile": mobile,


        }])

        setFullname("");
        setAddress1("");
        setAddress2("");
        setPincode("");
        setCity("");
        setStatevalue("");
        setMobile("");

        let myOffcanvas = window.bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasBottom'))
        myOffcanvas.hide();

    }

    console.log(addresses)



    return (
        <div className="address">
            <div className="card personalinfo__card__address">
                {
                    addresses.map((address) => (
                        <div className="personalinfo__card__display__address">
                            <p className="display__fullname"> {address.fullname}</p>
                            <span>{address.address1} </span> <br />
                            <span>{address.address2}</span> <br />
                            <span>{address.city}-{address.pincode}</span> <br />
                            <span>{address.statevalue}</span> <br />
                            <span>Mobile: <span>{address.mobile}</span></span> <br />

                            <div className="personalinfo__card__display__address__delete__btn">
                                <HighlightOffOutlinedIcon className="address__delete__btn" />
                            </div>

                        </div>
                    ))
                }


                <div className="personalinfo__card__add__address" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasScrolling">
                    <div className="add__address">
                        <AddCircleOutlineOutlinedIcon className="add__address__icon" />
                        <p>Add New Address</p>
                    </div>


                </div>
            </div>
            <div class="add__address__canvas offcanvas offcanvas-bottom"  tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Add Address</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Full Name</label>
                            <input type="email" value={fullname} onChange={(e) => setFullname(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Address 1</label>
                            <input type="text" value={address1} onChange={(e) => setAddress1(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Address 2</label>
                            <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">pincode</label>
                            <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">City</label>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">State</label>
                            <input type="text" value={statevalue} onChange={(e) => setStatevalue(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Mobile</label>
                            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button class="btn btn-primary" onClick={handleSubmit} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Address
