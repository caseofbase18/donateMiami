import React, { useState, useEffect } from 'react';
import API from "../../utils/API";

import Calendar from 'react-calendar';
import moment from "moment";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VolunteerForm = () => {

    // Setting our component's initial state
    const [nonProfits, setNonProfits] = useState([]);
    const [organizationId, setOrganizationId] = useState("");
    const [amount, setAmount] = useState("");
    const [selectedOrganization, setSelectedOrganization] = useState("");
    const [date, onChange] = useState(new Date());

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
        // console.log(organization, amount, date);
        if (!organizationId || organizationId == "Select organization...") {
            toast("Please select an organization")
        } else if (!amount) {
            toast("Please enter the number of hours")
            // } else if (!date) {
            //     toast("Please select a date in the future")
            // 
        } else {

            const finalOrganization = nonProfits.filter((nonProfit) => {
                return organizationId === nonProfit._id;
            });

            API.saveTime({
                name: finalOrganization[0].name,
                value: amount,
                date: date
            })
                .then(res => console.log(res.data))
                .catch(err => console.log(err));

            toast("Thank you for your interest in " + finalOrganization[0].name + "! We will be in touch soon to coordinate the details of your volunteer service.");
        }
    };

    return (

        <div>

            <h2 id="volform">Volunteer Form</h2>
            <p id="volparagraph">Select an organization, how many hours you would like to contribute, and the date of your availability.</p>

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
                        <label htmlFor="inputHoursAvailable">Amount of Hours Available</label>
                        <input type="text" className="form-control" id="inputHoursAvailable" placeholder="e.g. 3 hours"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}></input>
                    </div>

                    <div className="form-group">
                        <div className="form-group col-md-6" id="calendar">

                            <br></br>

                            <Calendar
                                onChange={onChange}
                                value={date}
                                minDate={moment().toDate()}
                                calendarType={"US"}
                            />
                        </div>

                    </div>

                </div>

                <button onClick={handleSubmit} className="btn btn-primary shadow" id="volbutton">Submit Volunteer Availability!</button>

            </form>
            <br></br>

            <ToastContainer />
        </div>
    )
}

export default VolunteerForm;