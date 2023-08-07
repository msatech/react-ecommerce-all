import React from 'react'
import './PersonalInfo.css'

const PersonalInfo = () => {
    return (
        <div className="personalinfo">
            <div className="card personalinfo__card">
                <p>Name: <span className="personalinfo__data">Manpreet Singh</span> </p>
                <p>Email ID: <span className="personalinfo__data">manpreetsingh@gmail.com</span> </p>
                <p>Mobile Number: <span className="personalinfo__data">7898788978</span> </p>
                <p>Date of Birth: <span className="personalinfo__data">01/01/2000</span> </p>
                <p>Gender: <span className="personalinfo__data">Male</span> </p>
                                
            </div>
        </div>
    )
}

export default PersonalInfo
