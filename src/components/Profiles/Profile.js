import React from 'react';
import "./Profile.css"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom";
import PetsIcon from '@material-ui/icons/Pets';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FavoriteIcon from '@material-ui/icons/Favorite';


function Profile() {
    return (


        <div className="profile">

            <div className='top__info'>
                <div className="profile__image">
                    <img className="circular"
                         src="https://www.petfirst.com/wp-content/uploads/2018/03/Breed-Hero-Australian-Shepherd-1200x1200.jpg"
                         alt=""/>
                </div>


                <div className="profile__description">
                    <h5>Name: Charlie</h5>
                    <h5>Age: 6 month</h5>
                    <h5>Breed: Australian Shepherd</h5>
                    <h5>Match 79%</h5>
                </div>

            </div>


            <div className='profile__body'>
                <div className="profileBody__one">
                    <h5><strong>About me</strong></h5>
                    <p>I am australian shepherd, very playful,
                        Always smile, brave, funny</p>

                    <h5><strong>Hobbies</strong></h5>
                    <p>I am australian shepherd, very playful,
                        Always smile, brave, funny</p>

                    <h5><strong>My owner would describe me as: </strong></h5>
                    <p>Playful, likes to eat, enjoys walking. Likes a lot of attention</p>

                </div>

                <div className="">
                    <p><PetsIcon/> Straight || Dog || Monogamous</p>
                    <p><LocationCityIcon/> New York</p>
                    <p><FavoriteIcon/> Looking for a poodle, chihuahua, siberian husky</p>
                </div>
            </div>


        </div>


    )
}

export default Profile;