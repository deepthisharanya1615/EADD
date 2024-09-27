import React, { useState } from "react";

const App = () => { 
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    const checkStrength = (password) => {
        let str = 0;

        if (/.{8,}/.test(password)) {
            str++;
        }
        if (/[A-Z]/.test(password)){
            str++;
        }
        if (/[a-z]/.test(password)){
            str++;
        }
        if (/[0-9]/.test(password)){
            str++;
        }
        if (/[^a-zA-Z0-9]/.test(password)){
            str++;
        }

        determineStrength(str);
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        checkStrength(newPassword);
    };

    const determineStrength = (str) => {
        if (str <= 2) {
            setStrength("Weak");
        } else if (str === 3) {
            setStrength("Medium");
        } else if (str === 4) {
            setStrength("Strong");
        } else if (str === 5) {
            setStrength("Very Strong");
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Password Strength Checker</h2>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                style={{ padding: '10px', fontSize: '16px', width: '100%' }}
            />
            <div style={{ marginTop: '10px', fontSize: '18px' }}>
                <strong>Password Strength: </strong>{strength}
            </div>
        </div>
    );
};

export default App;
