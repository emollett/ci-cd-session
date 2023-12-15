import './App.css';

import React, { useState } from 'react';

function App() {
    const [newName, setNewName] = useState({
        fName: ''
    });
    const [fullName, setFullName] = useState(newName);

    function handleOnSubmit(event) {
        setFullName(newName);
        event.preventDefault();
    }

    function handleOnChange(event) {
        let { value } = event.target;
        setNewName((prevValue) => {
            return {
                fName: value,
            };
        });
    }

    return (
        <div className='App'>
            <h1 className="App-header">
                Hello {fullName.fName}
            </h1>
            <form onSubmit={handleOnSubmit}>
                Say hello to:
                <input
                    name="fName"
                    placeholder="First Name"
                    onChange={handleOnChange}
                    value={newName.fName}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
