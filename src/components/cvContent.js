import React from 'react';
import {useState} from 'react';
import './cvContent.css';
import ProfileForm from './profile';
import JobForm from './jobs';
import EduForm from './education';



const profileData = JSON.parse(localStorage.getItem("proValues"));
console.log(profileData);

const jobData = JSON.parse(localStorage.getItem("values"));
console.log(jobData);

const eduData = JSON.parse(localStorage.getItem("eduValues"));
console.log(eduData);

function CvContent() {
  const [dataObjects, changeTheStates] = useState([
    profileData, 
    jobData, 
    eduData,
  ]);




  function updateClick() {
    console.log(dataObjects);
    return(
    <div className="full-cv">
      <h1>CV</h1>
      <h2>Profile</h2>
      <div>
        <p>Overview: {dataObjects[0].Description}</p>
        <p>Name: {dataObjects[0].Name}</p>
      </div>
      <h2>Work Experiences</h2>
      <p>Position: {dataObjects[1].Position}</p>
      <p>Company: {dataObjects[1].Company}</p>
      <p>{dataObjects[1].dateBegin} through {dataObjects[1].dateEnd}</p>
      {/* <button>+Add Job</button> */}
      <h2>Education</h2>
      <p>University: {dataObjects[2].University}</p>
      <p>Degree: {dataObjects[2].Degree}</p>
      <p>{dataObjects[2].dateBegin} through {dataObjects[2].dateEnd}</p>
    </div>
    )
  }

  return (
    <div className="content">
      <div className="profile">
        <ProfileForm content="Profile" name="Description" type="textarea" userName="Name" key1="Names"/>
      </div>
      <br/>
      <div className="work">
        <JobForm content="Work" type="text" name="Position" place="Company" beginDate="beginDate" endDate="endDate" key1="Companies"/>
      </div>
      <br/>
      <div className="education">
        <EduForm content="Education" type="text" name="University" place="Degree" beginDate="beginDate" endDate="endDate" key1="Degrees"/>
      </div>
      <br />
      <form>
        <button type="submit" onClick={updateClick}>Update CV</button>
      </form>
      <div>
        <div className="full-cv">
          {/* <h1>CV</h1> */}
          {/* {update} */}
          {updateClick()}
        </div>
      </div>
    </div>
  );
}




export default CvContent;


