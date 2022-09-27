import React from "react";
import InputInterface from "./components/InputInterface/InputInterface";
import style from "./index.module.css"


function App() {

  return (
    <div className={style.wrapp}>
      <InputInterface>

        <InputInterface.Input
          label='Your Name'
          id='name-field'
          type="text"
          placeholder='Name'
          iconType='user'
          valid={true}
        />

        <InputInterface.Input
          label='Your Phone'
          id='phone-field'
          type="number"
          placeholder='Phone'
          iconType='phone'
          valid={false}
        />

        <InputInterface.Input
          label='Your Email'
          id='email-field'
          type="text"
          placeholder='Phone'
          iconType='mail'
          valid={true}
        />

        <InputInterface.Select
          id='select'
        />

      </InputInterface>
    </div>
  );
}

export default App;

