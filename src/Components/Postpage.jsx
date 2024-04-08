import React from "react";
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from "axios";
const InputContext = createContext('');


const Postpage = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [initialValue, setInitialValue] = useState('');


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    e.preventDefault()
  };

  const inputChangeHandler = (e) => {
    setInitialValue(e.target.value);
    e.preventDefault()
  };
  const handleSubmit =() => {
    alert('Are you sure you want to submit?')
  }

    return(
      <InputContext.Provider value={inputValue}>
        <form onSubmit={handleSubmit}>
      <label>Title:
        <input type="text"  value={inputValue} onChange={handleInputChange}/>
      </label>
      <label>Content:
        <input type="text"  value={initialValue} onChange={inputChangeHandler}/>
      </label>
      
      <button type="submit " > Post  </button>
    </form>
    <p>Tittle: {inputValue}</p>
    <p>What do you want to tell us: {initialValue}</p>
    </InputContext.Provider>

    )
    
};
export default Postpage;