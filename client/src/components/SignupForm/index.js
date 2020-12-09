import React, {useState} from 'react';
import axios from "axios";
import API from '../../utils/API';


function Signup() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ first, setFirst] = useState("");
    const [ last, setLast ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ stateInitials, setStateInitials ] = useState("");
    const [ zip, setZip] = useState("");
    const [ phone, setPhone ] = useState("");
    


    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     console.log(name, value);
    // };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email, password, first, last, address, city, stateInitials, zip, phone);
        API.signUp({   
            email: email,
            password: password,
            firstName: first,
            lastName:last,
            address:address,
            city:city,
            state:stateInitials,
            zip: zip,
            phone: phone
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        alert(first + " " + last + " account created successfully!")
    };


    return (

        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" name="email" className="form-control" id="inputEmail4" placeholder="email@address.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}></input>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" name="password" className="form-control" id="inputPassword4" placeholder="New password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}></input>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input type="text" name="first" className="form-control" placeholder="First Name"
                            value={first}
                            onChange={(event) => setFirst(event.target.value)}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Last Name</label>
                        <input type="text" name="last" className="form-control" placeholder="Last Name"
                            value={last}
                            onChange={(event) => setLast(event.target.value)}></input>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" name="address" className="form-control" id="inputAddress" placeholder="1234 Main St Apt. B"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}></input>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" name="city" className="form-control" id="inputCity" placeholder="City"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}></input>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" name="stateInitials" className="form-control"

                            
                            onChange={(event) => setStateInitials(event.target.value)}>
                            <option defaultValue>Choose...</option>
                            {/* <option value="" selected="selected">Select a State</option> */}
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" name="zip" className="form-control" id="inputZip" placeholder="12345"
                            value={zip}
                            onChange={(event) => setZip(event.target.value)}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                        <input type="text" name="phone" className="form-control" id="inputPhoneNumber" placeholder="123-456-7890"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}></input>
                    </div>
                </div>

                <button onClick={handleSubmit} className="btn btn-primary shadow">Submit!</button>

            </form>
        </div>
    )
}

export default Signup;