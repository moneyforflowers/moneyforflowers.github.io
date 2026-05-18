import { useEffect, useState } from "react";
import { GetStreamers } from "./Services/GetStreamers";
import { GetLiveChannels } from "./Services/GetLiveChannels";


function Streamers() {

    const [currentStreamer, setCurrentStreamer] = useState(null);
    const [popupClassName, setPopupClassName] = useState("overlayPopupStreamer overlayPopupStreamer--invisible");
    const [streamersData, setStreamersData] = useState([]);
    const [liveChannels, setLiveChannels] = useState([])
    useEffect(function () {
        GetStreamers().then((data) => 
            {
                setStreamersData(data)
                var value = "";
                data.forEach((streamer) => {
                    value += 'user_login='+streamer.twitch_name+'&'
                })
                GetLiveChannels(value).then((dataTwitch) => {
                    setLiveChannels(dataTwitch.data.data)
                });
            }
        );
    }, []);

    

    const openPopup = (value) => {
        setPopupClassName("overlayPopupStreamer overlayPopupStreamer--visible")
        setCurrentStreamer(value)
    }
    
    const closePopup = () => {
        setPopupClassName("overlayPopupStreamer overlayPopupStreamer--invisible")
    }
    
    return <>
        <div className="streamersList">
            {
                streamersData.map((streamer) => {
                    return <div key={streamer.id} className="streamer" onClick={() => openPopup(streamer)}>
                        <img src={streamer.avatar_url} alt={streamer.display_name}></img>
                        <p>{streamer.display_name}</p>
                    </div>
                })
            }
        </div>
        {
            <div className={popupClassName} onClick={() => closePopup()}>
                {currentStreamer != null ?
                    <div className="popupStreamer" onClick={(event)=>{event.stopPropagation();}}>
                        <div className="popupClose" onClick={() => closePopup()}>X</div>
                        <img src={currentStreamer.avatar_url} alt={currentStreamer.display_name} className="popupAvatar"></img>
                        <h2>{currentStreamer.display_name}</h2>
                        <p>{currentStreamer.pronoms ? "(" + currentStreamer.pronoms + ")" : "(pronoms non indiqués)"}</p>
                        
                        <h3>Ses réseaux :</h3>
                        <div className="popupStreamerReseaux">
                            {currentStreamer.bluesky != null ? <a className="streamerLink bluesky" href={"https://bsky.app/profile/" + currentStreamer.bluesky} target="_blank" rel="noreferrer"><img src="Bluesky_Logo.png" alt="logoBluesky" className="logoRS"></img></a> : <></>}
                            {currentStreamer.twitch_name != null ? <a className="streamerLink twitch" href={"https://twitch.tv/" + currentStreamer.twitch_name} target="_blank" rel="noreferrer"><img src="twitch.png" alt="logoTwitch" className="logoRS"></img></a> : <></>}
                            {currentStreamer.instagram != null ? <a className="streamerLink instagram" href={"https://instagram.com/" + currentStreamer.instagram} target="_blank" rel="noreferrer"><img src="Instagram_icon.png" alt="logoInsta" className="logoRS"></img></a> : <></>}
                        </div>
                    </div>
                : <></>}
            </div>
        }
    </>;

}

export default Streamers;