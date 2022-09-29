import React from "react";
import InputInterface from "./components/InputInterface/InputInterface";
import style from "./index.module.css"
import Icon from "./components/Icon/Icon";
import Text from "./components/Text/Text";
import Label from "./components/Label/Label";
import Select from "./components/Select/Select";
import Number from "./components/Number/Number";

import phoneIcon from "./assets/svg/phone.svg"
import mailIcon from "./assets/svg/mail.svg"
import userIcon from "./assets/svg/user.svg"


function App() {

  const options = ['one', 'two', 'three']

  return (
    <div className={style.wrapp}>

      <InputInterface valid={true} id='My-Text_Field'> {/*  If you do not specify an id, it will be generated */}
        <InputInterface.InputComponent
          icon={<Icon iconSvg={userIcon} />}
          label={<Label
            text='Your Name'
          />}
          input={<Text
            placeholder='Name'
          />}
        />
      </InputInterface>

      <InputInterface valid={false}>
        <InputInterface.InputComponent
          icon={<Icon iconSvg={phoneIcon} />}
          label={<Label
            text='Your Phone'
          />}
          input={<Number
            placeholder='Phone'
            prefix='+38'
          />}
        />
      </InputInterface>

      <InputInterface valid={true}>
        <InputInterface.InputComponent
          icon={<Icon iconSvg={mailIcon} />}
          label={<Label
            text='Your Mail'
          />}
          input={<Text
            placeholder='Mail'
          />}
        />
      </InputInterface>

      <InputInterface>
        <InputInterface.InputComponent
          label={<Label
            text='Options'
          />}
          input={<Select
            options={options}
          />}
        />
      </InputInterface>
    </div>
  );
}

export default App;

