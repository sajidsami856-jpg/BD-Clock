import { useEffect, useState } from "react";

const CurrentTime=()=>{
    const [time,setTime] =useState(new Date());
    useEffect(()=>{
        const intervalInfo=setInterval(()=>{
            setTime(new Date());
        },1000)
        return ()=>{
            clearInterval(intervalInfo);
        }
    },[])
    return <p className="currTime">This is the current time : {time.toLocaleDateString()}  -  {time.toLocaleTimeString()}</p>
}
export default CurrentTime;