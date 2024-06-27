import style from './App.module.scss'
import Main from './components/Main/Main'
import {backgrounds} from './DB/photos'
import { useEffect,useState } from 'react'



function App() {

  interface iBG {
    id: number;
  }
  const [bgid,setBgid] = useState<iBG>({id: 0})
  const [bgimg, setBgimg] = useState(backgrounds[0].imgUrl)


  useEffect(()=> {
    return ()=> {
      setInterval(() => {
        if (bgid.id<backgrounds.length-1) {
          const d = { id: bgid.id++}
          setBgid(d)
          setBgimg(backgrounds[bgid.id].imgUrl)

          console.log(backgrounds[bgid.id].imgUrl)
        }
        else {
          const reset = { id: 0}
          setBgid(reset)
          setBgimg(backgrounds[bgid.id].imgUrl)

          console.log(backgrounds[bgid.id].imgUrl)
        }
      },8000)
    }
  },[])


  const bg = {
    backgroundImage: `url(${bgimg})`,
  }

  return (
    <div className={style.app} style={bg}>
        <Main/>
    </div>
  )
}

export default App
