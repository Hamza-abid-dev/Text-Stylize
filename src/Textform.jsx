import React, { useState } from 'react'

const Textform = (props) => {
const [a, setA] = useState('')
const onChange=(event)=>{
console.log("one change")
setA(event.target.value);
}
const onClick = ()=>{
  console.log("UpperCase" + a);
  document.getElementById("exampleFormControlTextarea1").style.color = "black";
  let newlist = a.toUpperCase();
  setA(newlist)
  props.showAlert('Converted to UpperCase!', 'success')
}
const copytext = ()=>{
console.log("i am copy");
let text = document.getElementById("exampleFormControlTextarea1");
text.select();
navigator.clipboard.writeText(text.value)
props.showAlert('Your Text Is Copied', 'success')
}
const handleExtraSpaces = ()=>{
  let newText = a.split(/[ ]+/);
  setA(newText.join(" "))
  props.showAlert('Your Text Is Arranged', 'success')
}
const onnClick = ()=>{
  console.log("LowerCase" + a);
  document.getElementById("exampleFormControlTextarea1").style.color = "black";
  let newlist = a.toLowerCase();
  setA(newlist)
  props.showAlert('Converted to LowerCase!', 'success')

}
const Changecolor = ()=>{
  document.getElementById("exampleFormControlTextarea1").style.color = "red";
      props.showAlert('Text Color Is Changed', 'success')
}
const Changecolorblue = ()=>{
  document.getElementById("exampleFormControlTextarea1").style.color = "blue";
  props.showAlert('Text Color Is Changed', 'success')
}
const Changecolorgreen = ()=>{
  document.getElementById("exampleFormControlTextarea1").style.color = "green";
  props.showAlert('Text Color Is Changed', 'success')
}
const textdel = ()=>{
setA("")
props.showAlert('Your Text Is Deleted', 'success')
}
return (
  <div style={{color: props.mode==='dark'?'white':'#00122f'}}>
  <div class="mb-3 container">
  <h1>{props.heading}</h1>
<textarea className="form-control" value={a} onChange={onChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
<button className="btn btn-primary btn-sm my-2 border-3 rounded-3 border-dark" onClick={onClick} >Click to Uppercase</button>
<button className="btn btn-primary btn-sm my-2 mx-5 border-3 rounded-3 border-dark " onClick={onnClick} >Click to Lowercase</button>
<button className="btn btn-danger btn-sm my-2 border-3 rounded-3 border-dark " onClick={textdel} >Click to Delete Text</button>
<button className="btn btn-success btn-sm my-2 border-3 rounded-3 border-dark mx-5" onClick={copytext} >Click to Copy Text</button>
<button className="btn btn-success btn-sm my-2 border-3 rounded-3 border-dark" onClick={handleExtraSpaces} >Click to Arrange Text</button>
<button class=" d-inline-block bg-secondary btn-group-sm  rounded-3 dropdown mx-5 ">
  <button class="btn btn-secondary mx-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Color
  </button>
  <ul class="dropdown-menu">
    <button className="btn-lg btn btn-danger w-100" onClick={Changecolor}>RED</button><br />
    <button className="btn-lg btn btn-primary w-100" onClick={Changecolorblue}>BLUE</button><br />
    <button className="btn-lg btn btn-success w-100" onClick={Changecolorgreen}>Green</button><br />
  </ul>
</button>
</div>
<div className="container my-3">
  <h1>Your Text Summary</h1>
  <p>{a.split(" ").length} Words and {a.length} Characters</p>
  <p>{0.008 * a.split(" ").length} Minutes Read</p>
  <h2>Preview</h2>
  <p className="border d-inline-block">{a.length>0?a:"Enter Something to preview it here"}</p>
</div>
</div>
  )
}

export default Textform
 