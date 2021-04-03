import React from 'react';
import "./Profile.css"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom";


function Profile() {
    return (


        <div className="profile">
            <div className="container">
                <div className="row">
                    <div className="col-sm">

                        <img className="circular"
                             src="https://www.petfirst.com/wp-content/uploads/2018/03/Breed-Hero-Australian-Shepherd-1200x1200.jpg" alt=""/>

                        <p>Name: Charlie</p>
                        <p>Age: 6 month</p>
                        <p>Breed: Australian Shepherd</p>
                        <p>Match 79%</p>
                    </div>
                    <div className="col-sm">
                        <p>Straight || Dog || Monogamous</p>
                        <h6>My self summary:</h6>
                        <p>I am australian shepherd, very playful,
                            Always smile, brave, funny</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile;