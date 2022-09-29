import React from "react";
import style from "./Icon.module.css"

interface IconProps {
  iconSvg: string
}

const Icon = ({ iconSvg }: IconProps ) => {

  return (
    <img className={style.icon} src={iconSvg}>
    </img>
  )
}

export default Icon