import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

 export const AppContext=createContext()

const AppContextPlayer=(props)=>{
    const seekbg=useRef()
    const seeBar=useRef()
    const audioRef=useRef()

    const [track,setTrack]=useState(songsData[0])
    const [playStatus,setPlayStatus] =useState(false)

    const [time,setTime] = useState({
        CurrentTime:{
            second:0,
            minutes:0
        },
        totalTine:{
            second:0,
            minutes:0
        }
    })
    const plays=()=>{
        setPlayStatus(true)
    }
    const pause=()=>{
        audioRef.current.pause()
        setPlayStatus(false)
    }
            const play={
                audioRef,seeBar,seekbg,track,setTrack,playStatus,setPlayStatus,time,setTime,plays,pause
            }
            return(
                <AppContext.Provider value={play}>
                    {props.children}
                </AppContext.Provider>
            )
}
export default AppContextPlayer