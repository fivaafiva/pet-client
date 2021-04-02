import React from 'react';
import "./Home.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"


function Home() {
    return (
        <div>
            <div className="home">
                <img className="home__image"
                     src="https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:566,width:944/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/r83AJHBxQZ2mPUnh6cbq"
                     alt="amazon-banner"/>
            </div>

            <div className="description">
                <h1>Welcome</h1>
                <p>Dating app for your pets,
                    elite clientelle find a love your loved one</p>
            </div>

            <button type="button" className="btn btn-info btn-lg">Large button</button>

            {/*Footer*/}

            <div className="bottom__container">
                <p className="licence-info">© 2021 petsDate.</p>
            </div>

        </div>


    )
}

export default Home;