import {useState} from 'react';


export default function ProfileForm(props) {
  const [values, changeState] = useState({
    Description: "", 
    Name: "",
  });

  // console.log(values);

  function onSubmit(event) {
    event.preventDefault();
    console.log(values);
  }

  function nameChanges(event) {
    changeState({...values, Name: event.target.value})
  }

  function descChanges(event) {
    changeState({...values, Description: event.target.value})
  }

  return (
    <form className={props.content} onSubmit={onSubmit}>
      <h3>{props.content}</h3>
      <p>{props.name}</p>
      <textarea type={props.type} name={props.name} value={values.Description} row={4} column={25} onChange={descChanges}/>
      <br />
      <br />
      {props.userName}
      <br />
      <br />
      <input type={props.type} name={props.name} value={values.Name} onChange={nameChanges}/>
      <br />
      <br />
      <br />
      <input type="submit"/>
    </form>
  )
}
