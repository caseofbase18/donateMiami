import React, { useState, useEffect } from 'react';
import API from "../../utils/API";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonateForm = () => {

    // Setting our component's initial state
    const [nonProfits, setNonProfits] = useState([]);
    const [organizationId, setOrganizationId] = useState("");
    const [amount, setAmount] = useState("");
    const [selectedOrganization, setSelectedOrganization] = useState("");

    // When component mounts, load non Profits from db
    useEffect(() => {
        loadNonProfits();
        // checkOrganization();
    }, []);

    // Loads all nonProfits and sets them to nonProfits
    function loadNonProfits() {
        console.log("Loading Nonprofits...");
        API.getNonProfits()
            .then(res => {
                setNonProfits(res.data)
                checkOrganization(res.data)
                // setOriginalNonProfits(res.data)
                // console.log(props.selectedCategory, res.data)
            })
            .catch(err => console.log(err));
    };

    function checkOrganization(organizations) {

        // console.log(window.location.href);
        console.log("Checking Organization with... " + organizations.length + " # of organizations");

        let url = window.location.href;

        if (url.includes("?npid=")) {
            const selectedOrganizationID = url.slice(url.indexOf("?npid=") + "?npid=".length);
            const selectedOrganizationData = organizations.filter((nonProfit) => {
                return selectedOrganizationID === nonProfit._id;
            });

            setOrganizationId(selectedOrganizationData[0]._id);
            setSelectedOrganization(selectedOrganizationData[0]);
            console.log(selectedOrganizationData);
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        if (!organizationId || organizationId == "Select organization...") {
            toast("Please select an organization")
        } else if (!amount) {
            toast("Please enter a dollar amount")
        } else {

            const finalOrganization = nonProfits.filter((nonProfit) => {
                return organizationId === nonProfit._id;
            });

            API.saveTransaction({
                name: finalOrganization[0].name,
                value: amount
            })
                .then(res => console.log(res.data))
                .catch(err => console.log(err));

            console.log(finalOrganization);
            toast("Thank you for your donation of $" + amount + " to " + finalOrganization[0].name + "!")
            
        }
    };

    return (

        <div>

            <h2 id="donatetitle">Donation Form</h2>

            <p id="selectdonate">Select an organization and fill in the amount of your financial contribution.</p>

            <form>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputOrganization">Organization</label>
                        <select id="inputOrganization" name="organization" className="form-control"
                            onChange={(event) => setOrganizationId(event.target.value)}>
                            <option>Select organization...</option>

                            {nonProfits.map((nonProfit) => {
                                return (

                                    <option selected={selectedOrganization.name == nonProfit.name ? 'selected' : null}
                                        key={nonProfit._id} value={nonProfit._id}>{nonProfit.name}</option>

                                )
                            })})

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

            <ToastContainer />
        </div>
    )
}

export default DonateForm;