import React from 'react';
// import {useState} from 'react';
import './cvContent.css';
import ProfileForm from './profile';
import JobForm from './jobs';
import EduForm from './education';


// function Forms(props) {
//   const [values, changeState] = useState({
//     Description: "", 
//     Name: "",
//     Position: "", 
//     Company: "",
//     University: "", 
//     Degree: "", 
//     dateBegin: null,
//     dateEnd: null,
//   });

//   console.log(values);

//   function onSubmit(event) {
//     event.preventDefault();
//     console.log(event.values);
//   }

//   function handleChanges(event) {
//     // let name = event.target.name;
//     changeState({...values, Name: event.target.value})
//   }

//   function dateOnForm() {
//     if(props.beginDate === "beginDate" && props.endDate === "endDate") {
//       return(
//         <div>
//           <p>Date</p>
//           <input 
//           type="text" 
//           name="dateBegin" 
//           placeholder='Beginning Date' 
//           value={values.dateBegin}
//           onChange={handleChanges}
//           />--
//           <input 
//           type="text" 
//           name="dateEnd" 
//           placeholder='End Date'
//           value={values.dateEnd} 
//           onChange={handleChanges}
//           />
//         </div>
//       )
//     }
//   }

//   return (
//     <form className={props.content} onSubmit={onSubmit}>
//       <h3>{props.content}</h3>
//       <p>{props.name}</p>
//       <input type={props.type} name={props.name} value={values.props.name} onChange={handleChanges}/>
//       <br />
//       <br />
//       {props.place || props.userName}
//       <br />
//       <br />
//       <input type={props.type} name={props.name} value={values.name} onChange={handleChanges}/>
//       <br />
//       {dateOnForm()}
//       <br />
//       <br />
//       <input type="submit"/>
//     </form>
//   )
// }


// function FinalCv(props) {
//   console.log(props);
//   return(
//   <div className="full-cv">
//     <h1>CV</h1>
//     <h2>Profile</h2>
//     <div>
//       <p>Overview:</p>
//     </div>
//     <h2>Work Experiences</h2>
//     <p>

//     </p>
//     <h2>Education</h2>
//     <p>

//     </p>
//   </div>
//   );
// }


function CvContent() {



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
    </div>
  );
}




export default CvContent;


