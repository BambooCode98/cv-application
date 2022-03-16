import {useState} from 'react';


export default function EduForm(props) {
  const [eduValues, changeState] = useState({
    University: "", 
    Degree: "", 
    dateBegin: "",
    dateEnd: "",
  });


  function onSubmit(event) {
    event.preventDefault();
    // console.log(eduValues);
    localStorage.setItem("eduValues", JSON.stringify(eduValues));
  }

  function uniChanges(event) {
    changeState({...eduValues, University: event.target.value})
  }

  function degreeChanges(event) {
    changeState({...eduValues, Degree: event.target.value})
  }

  function dbChanges(event) {
    changeState({...eduValues, dateBegin: event.target.value})
  }

  function deChanges(event) {
    changeState({...eduValues, dateEnd: event.target.value})
  }

  function dateOnForm() {
    if(props.beginDate === "beginDate" && props.endDate === "endDate") {
      return(
        <div>
          <p>Date</p>
          <input 
          type="text" 
          name="dateBegin" 
          placeholder='Beginning Date' 
          value={eduValues.dateBegin}
          onChange={dbChanges}
          />--
          <input 
          type="text" 
          name="dateEnd" 
          placeholder='End Date'
          value={eduValues.dateEnd} 
          onChange={deChanges}
          />
        </div>
      )
    }
  }

  return (
    <form className={props.content} onSubmit={onSubmit}>
      <h3>{props.content}</h3>
      <p>{props.name}</p>
      <input type={props.type} name={props.name} value={eduValues.University} onChange={uniChanges}/>
      <br />
      <br />
      {props.place}
      <br />
      <br />
      <input type={props.type} name={props.name} value={eduValues.Degree} onChange={degreeChanges}/>
      <br />
      {dateOnForm()}
      <br />
      <br />
      <input type="submit" value="Add/Edit"/>
    </form>
  )
}
