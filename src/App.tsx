import React from "react";
import InputInterface from "./components/InputInterface/InputInterface";
import style from "./index.module.css"
import Icon from "./components/Icon/Icon";

import phoneIcon from "./assets/svg/phone.svg"
import mailIcon from "./assets/svg/mail.svg"
import userIcon from "./assets/svg/user.svg"

function App() {

  return (
    <div className={style.wrapp}>
      <InputInterface>

        <InputInterface.Input
          label='Your Name'
          id='name-field'
          type="text"
          placeholder='Name'
          icon={<Icon iconSvg={userIcon}/>}
          valid={true}
        />

        <InputInterface.Input
          label='Your Phone'
          id='phone-field'
          type="number"
          placeholder='Phone'
          icon={<Icon iconSvg={phoneIcon}/>}
          valid={false}
        />

        <InputInterface.Input
          label='Your Email'
          id='email-field'
          type="text"
          placeholder='Phone'
          icon={<Icon iconSvg={mailIcon}/>}
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

