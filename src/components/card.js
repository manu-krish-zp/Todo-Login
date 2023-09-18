
const Card = (props) => {

  const handleClick= ()=>{
    props.handleComplete(props.id)
    console.log("Completed task : ",props.text)
  }

  
  return (
    <div className="card">
      <p>{props.text}</p>
      <button onClick={handleClick}>Complete</button>
    </div>
  )
}

export default Card;
