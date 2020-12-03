import React from 'react';

// bootstrap
function Donate() {
    return (
        //logo
        <body>
            <form>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputFirstName">First Name</label>
                        <input type="text" className="form-control" placeholder="First Name"></input>
                    </div>

                    <div className="form-group col-md-6">
                        <label for="inputLastName">Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name"></input>
                    </div>
                </div>

                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St Apt. B"></input>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="City"></input>
                    </div>

                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
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
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" placeholder="12345"></input>
                    </div>

                    <div className="form-group">
                        <label for="inputPhoneNumber">Phone Number</label>
                        <input type="text" className="form-control" id="inputPhoneNumber" placeholder="123-456-7890"></input>
                    </div>

                    {/* <div className="form-group">
                        <label for="inputOrganization">Name of Organization</label>
                        <input type="text" className="form-control" id="inputOrganization" placeholder="e.g. United Way"></input>
                    </div> */}

                    <div className="form-group col-md-4">
                        <label for="inputOrganization">Name of Organization</label>
                        <select id="inputOrganization" className="form-control">
                            <option selected>Select organization...</option>
                            {/* <option value="" selected="selected">Select a State</option> */}
                            <option value="Women">Women of Tomorrow</option>
                            <option value="Cat">Cat Network, Inc.</option>
                            <option value="Pelican">Pelican Harbor Seabird Station, Inc.</option>
                            <option value="Joshuas">Joshuas Heart Foundation Inc</option>
                            <option value="Cuatrogatos">Cuatrogatos Foundation Inc</option>
                            <option value="Whispering">Whispering Manes Therapeutic Riding Center</option>
                            <option value="Take">Take Stock in Children</option>
                            <option value="American">American Childrens Orchestras for Peace</option>
                            <option value="National">National Voices for Equality Education and Enlightenment</option>
                            <option value="Veterans">Veterans Ocean Adventures, Inc</option>
                            <option value="Sandals">Sandals Foundation Inc</option>
                            <option value="Art">Art Studio Inc</option>
                            <option value="Bridge">Bridge to Hope</option>
                            <option value="Project">Project Medishare for Haiti Inc</option>
                            <option value="Universal">Universal Aid for Children, Inc.</option>
                            <option value="Biscayne">Biscayne Bay Foundation</option>
                            <option value="Amigos">Amigos Near Foundation</option>
                            <option value="Mystic">Mystic Force Foundation</option>
                            <option value="Sundari">Sundari Foundation, Inc.</option>
                            <option value="Artefactus">Artefactus Cultural Project</option>
                            
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="inputAmountDollars">Amount</label>
                        <input type="text" className="form-control" id="inputAmountDollars" placeholder="$0.00"></input>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit Donation!</button>

            </form>
        </body>
    )
}

export default Donate;