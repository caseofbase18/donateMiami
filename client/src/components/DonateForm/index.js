import React from 'react';


const DonateForm = () => {
    return (

        <div>

            <h1>Donate Form</h1>
            <p>Select an organization and fill in the amount of your financial contribution.</p>
            
            <form>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputOrganization">Name of Organization</label>
                        <select id="inputOrganization" className="form-control">
                            <option selected>Select organization...</option>
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
                        <label htmlFor="inputAmountDollars">Amount</label>
                        <input type="text" className="form-control" id="inputAmountDollars" placeholder="$0.00"></input>
                    </div>
                </div>

                <button type="submit" className="btn btn-success shadow">Submit Donation!</button>

            </form>

            <br></br>
        </div>
    )
}

export default DonateForm;