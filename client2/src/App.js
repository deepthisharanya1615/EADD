import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[sname,setName]= useState("");
const[sroll,setRoll]= useState("");
const[sresult,setResult]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:1515/new',
{name:sname,
roll:sroll,
result:sresult}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="text"
name="sname"
onChange={(e)=>{
setSName(e.target.value);
}}
required/>
<label><b>Rollno</b></label>
<input
type="text"
name="sroll"
onChange={(e)=>{
setTechnology(e.target.value);
}}
required/>
<label><b>Result</b></label>
<input
type="text"
name="sresult"
onChange={(e)=>{
setStatus(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;