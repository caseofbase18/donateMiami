import React, { useState } from 'react';
import API from "../../utils/API";

const DonateForm = () => {

    const [organization, setOrganization] = useState("");
    const [amount, setAmount] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(organization, amount);
        if (!organization) {
            alert("Please select an organization")
        } else if (!amount) {
            alert("Please enter a dollar amount")
        } else {
            API.saveTransaction({
                name: organization,
                value: amount
            })
                .then(res => console.log(res.data))
                .catch(err => console.log(err));

            alert("Thank you for your donation of $" + amount + " to " + organization + "!")
        }
    };

    return (

        <div>

            <h2 id="donatetitle">Donate Form</h2>

            <p id="selectdonate">Select an organization and fill in the amount of your financial contribution.</p>

            <form>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputOrganization">Organization</label>
                        <select id="inputOrganization" name="organization" className="form-control"
                            onChange={(event) => setOrganization(event.target.value)}>
                            <option defaultValue>Select organization...</option>
                            <option value="Women of Tomorrow">Women of Tomorrow</option>
                            <option value="Cat Network Inc">Cat Network, Inc.</option>
                            <option value="Pelican Harbor Seabird Station Inc">Pelican Harbor Seabird Station, Inc.</option>
                            <option value="Joshuas Heart Foundation Inc">Joshuas Heart Foundation Inc</option>
                            <option value="Cuatrogatos Foundation Inc">Cuatrogatos Foundation Inc</option>
                            <option value="Whispering Manes Therapeutic Riding Center">Whispering Manes Therapeutic Riding Center</option>
                            <option value="Take Stock in Children">Take Stock in Children</option>
                            <option value="American Childrens Orchestras for Peace">American Childrens Orchestras for Peace</option>
                            <option value="National Voices for Equality Education and Enlightenment">National Voices for Equality Education and Enlightenment</option>
                            <option value="Veterans Ocean Adventures Inc">Veterans Ocean Adventures, Inc</option>
                            <option value="Sandals Foundation Inc">Sandals Foundation Inc</option>
                            <option value="Art Studio Inc">Art Studio Inc</option>
                            <option value="Bridge to Hope">Bridge to Hope</option>
                            <option value="Project Medishare for Haiti Inc">Project Medishare for Haiti Inc</option>
                            <option value="Universal Aid for Children Inc">Universal Aid for Children, Inc.</option>
                            <option value="Biscayne Bay Foundation">Biscayne Bay Foundation</option>
                            <option value="Amigos Near Foundation">Amigos Near Foundation</option>
                            <option value="Mystic Force Foundation">Mystic Force Foundation</option>
                            <option value="Sundari Foundation Inc">Sundari Foundation, Inc.</option>
                            <option value="Artefactus Cultural Project">Artefactus Cultural Project</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAmountDollars">Amount</label>
                        <input type="text" name="amount" className="form-control" id="inputAmountDollars" placeholder="$0.00"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}></input>
                    </div>
                </div>

                <button onClick={handleSubmit} className="btn btn-success shadow" id="donbutton">Submit Donation!</button>

            </form>

            <br></br>
        </div>
    )
}

export default DonateForm;