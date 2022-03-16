import {useState} from 'react';


export default function EduForm(props) {
  const [values, changeState] = useState({
    University: "", 
    Degree: "", 
    dateBegin: "",
    dateEnd: "",
  });


  function onSubmit(event) {
    event.preventDefault();
    console.log(values);
  }

  function uniChanges(event) {
    changeState({...values, University: event.target.value})
  }

  function degreeChanges(event) {
    changeState({...values, Degree: event.target.value})
  }

  function dbChanges(event) {
    changeState({...values, dateBegin: event.target.value})
  }

  function deChanges(event) {
    changeState({...values, dateEnd: event.target.value})
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
          value={values.dateBegin}
          onChange={dbChanges}
          />--
          <input 
          type="text" 
          name="dateEnd" 
          placeholder='End Date'
          value={values.dateEnd} 
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
      <input type={props.type} name={props.name} value={values.University} onChange={uniChanges}/>
      <br />
      <br />
      {props.place}
      <br />
      <br />
      <input type={props.type} name={props.name} value={values.Degree} onChange={degreeChanges}/>
      <br />
      {dateOnForm()}
      <br />
      <br />
      <input type="submit"/>
    </form>
  )
}
