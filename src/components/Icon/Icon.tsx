import React from "react";
import style from "./Icon.module.css"

const Icon = ({ iconSvg }: any) => {

  return (
    <img className={style.icon} src={iconSvg}>
    </img>
  )
}

export default Icon