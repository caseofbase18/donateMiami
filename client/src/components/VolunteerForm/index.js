import React, { useState } from 'react';

import Calendar from 'react-calendar';

// function MyApp() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <Calendar
//         onChange={onChange}
//         value={value}
//       />
//     </div>
//   );
// }

const VolunteerForm = () => {

    const [value, onChange] = useState(new Date());

    

    return (

        <div>

            <h1>Volunteer Form</h1>
            <p>Select an organization, how may hours you would like to contribute, and the date of your availability.</p>

            <form>
                           
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputOrganization">Name of Organization</label>
                        <select id="inputOrganization" className="form-control">
                            <option defaultValue>Select organization...</option>
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
                        <label htmlFor="inputHoursAvailable">Amount of Hours Available</label>
                        <input type="text" className="form-control" id="inputHoursAvailable" placeholder="e.g. 3 hours"></input>
                    </div>

                    <div className="form-group">
                        <div className="form-group col-md-6">

                            <br></br>

                            <Calendar
                                onChange={onChange}
                                value={value}
                            />
                        </div>

                    </div>

                </div>

                <button type="submit" className="btn btn-primary shadow">Submit Volunteer Availability!</button>

            </form>
            <br></br>
        </div>
    )
}

export default VolunteerForm;