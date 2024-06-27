import { useState } from "react"
import style from "./main.module.scss"
import Draggable from "react-draggable";

const Main = () => {


  const [visible, setVisible] = useState(false)
  const [displayVisible, setDisplayVisible] = useState(false);
  const [size, setSize] = useState(false)

  const close = () => {
    setVisible(!visible)
    setTimeout(() => {
      setDisplayVisible(!displayVisible)
    }, 150);
  }

  const minimize = () => {
    setSize(!size)
  }


  return (
    <div className={style.display}>

      <Draggable>
        <div className={style.main} style={{ 
          display: displayVisible ? "none": "block", 
          opacity: visible ? "0" : "1",
          height: size ? "35px" : "50vh",
          position: size ? "fixed" : "fixed",
          bottom: size ? "15px" : "30%",
          left: size ? "10px" : "20%",
          transition: visible || displayVisible ? ".2s linear" : ""
          }}
          id="window"
          >
          <div className={style.main_dots}>
            <div style={{backgroundColor: "#ff5c52"}} onClick={close}></div>
            <div style={{backgroundColor: "#fabe2d"}} onClick={minimize}></div>
            <div style={{backgroundColor: "#465c75"}}></div>
          </div>
        </div>
      </Draggable>

    </div>
  )
}

export default Main
