import {useState} from 'react';


export default function ProfileForm(props) {
  const [proValues, changeState] = useState({
    Description: "", 
    Name: "",
  });

  // console.log(values);

  function onSubmit(event) {
    event.preventDefault();
    // console.log(proValues);
    localStorage.setItem("proValues", JSON.stringify(proValues));

  }

  function nameChanges(event) {
    changeState({...proValues, Name: event.target.value})
  }

  function descChanges(event) {
    changeState({...proValues, Description: event.target.value})
  }

  return (
    <form className={props.content} onSubmit={onSubmit}>
      <h3>{props.content}</h3>
      <p>{props.name}</p>
      <textarea type={props.type} name={props.name} value={proValues.Description} row={4} column={25} onChange={descChanges}/>
      <br />
      <br />
      {props.userName}
      <br />
      <br />
      <input type={props.type} name={props.name} value={proValues.Name} onChange={nameChanges}/>
      <br />
      <br />
      <br />
      <input type="submit" value="Add/Edit"/>
    </form>
  )
}
