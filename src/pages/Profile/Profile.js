import React from 'react'
import Address from '../../components/ProfileComponents/Addresses/Address'
import ChangePassword from '../../components/ProfileComponents/ChangePassword/ChangePassword'
import PersonalInfo from '../../components/ProfileComponents/PersonalInfo/PersonalInfo'
import './Profile.css'
const Profile = () => {
    return (
        <div className="profile">
            <h4>Profile</h4>
            <div className="profile__page">
               <div className="card profile__card">
                   <div className="profile__sections">
                        <ul class="nav nav-pills" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-personalinfo-tab" data-bs-toggle="pill" data-bs-target="#pills-personalinfo"  role="tab"  aria-controls="pills-personalinfo" aria-selected="true">Personal Info </button>
                            </li>
                            

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-address-tab" data-bs-toggle="pill" data-bs-target="#pills-address"  role="tab" aria-controls="pills-address" aria-selected="false">Address</button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-changepassword-tab" data-bs-toggle="pill" data-bs-target="#pills-changepassword"  role="tab" aria-controls="pills-changepassword" aria-selected="false">Change Password</button>
                            </li>
                            
                        </ul>
                   </div>

                   
                    
               </div>
               <div className="profile__section__content">
                    <div class="tab-content" id="pills-tabContent">

                        <div class="tab-pane fade show active" id="pills-personalinfo" role="tabpanel" aria-labelledby="pills-personalinfo-tab">
                            <PersonalInfo />
                        </div>

                        <div class="tab-pane fade" id="pills-changepassword" role="tabpanel" aria-labelledby="pills-changepassword-tab">
                            <ChangePassword />
                        </div>

                        <div class="tab-pane fade" id="pills-address" role="tabpanel" aria-labelledby="pills-address-tab"> 
                            <Address />
                        </div>
                        
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Profile
