import { useEffect } from "react";

const Spinner = () => {
    useEffect(() => {
        spinnerbg.classList.replace('bg-opacity-0','bg-opacity-75')
    })
    return ( 
    <div id="spinnerbg" className="w-screen h-screen bg-black bg-opacity-0 fixed top-0 left-0 flex justify-center z-20 transition-all duration-200"><img src='https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif' alt="loading" className=" w-24 h-24 relative m-auto" /></div>)
}

export default Spinner;