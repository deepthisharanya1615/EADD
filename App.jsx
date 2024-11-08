import { useState } from "react";
function App(){
    const[str,setStrength]=useState("");
    const[pwd,setPwd]=useState("");

    const checkStrength=(pwd)=>{
        let score=0;
        const exp = [
          { regex: /\d{8,}/ },       // At least 8 digits
          { regex: /[A-Z]/ },        // At least one uppercase letter
          { regex: /[a-z]/ },        // At least one lowercase letter
          { regex: /[0-9]/ },        // At least one numeric digit
          { regex: /[^A-Za-z0-9]/ }
        ];
        exp.map((e)=>{
            if(e.regex.test(pwd)){
                score++;}});
        const values=["very weak","weak","medium","strong","very strong"];
        setStrength(values[score-1]);     
    };
    const updatePassword=(e)=>{
        const newpwd=e.target.value;
        setPwd(newpwd);
        checkStrength(newpwd);
    };
    return (
        <>
            <h1>Password Strength</h1>
            <div>
                <input type="password" id="password" name="password" value={pwd} onChange={updatePassword}/>
            </div>
            <div>
              <button type="Submit" name="submit" onClick={() => checkStrength(pwd)}>submit</button>
            </div>
            <p id="result">Strength:<strong>{str}</strong></p>
        </>
    );
}
export default App;