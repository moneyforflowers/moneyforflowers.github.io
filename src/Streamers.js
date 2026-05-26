import { useEffect, useState } from "react";
import { GetStreamers } from "./Services/GetStreamers";
import { GetLiveChannels } from "./Services/GetLiveChannels";
import { GetGoalsStreamer } from "./Services/GetGoalsStreamer";
import DonationsGoals from './DonationsGoals';


function Streamers() {

    const [currentStreamer, setCurrentStreamer] = useState(null);
    const [popupClassName, setPopupClassName] = useState("overlayPopupStreamer overlayPopupStreamer--invisible");
    const [streamersData, setStreamersData] = useState([]);
    const [liveChannels, setLiveChannels] = useState([]);
    const [currentStreamerGoals, setCurrentStreamerGoals] = useState([]);
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

    useEffect(function() {
        if (currentStreamer !== null)
        {
            GetGoalsStreamer(currentStreamer.twitch_name).then((data) => {
                setCurrentStreamerGoals(data);
            });
        }
    }, [currentStreamer])

    

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
                        {liveChannels.findIndex(element => element.user_login === streamer.twitch_name) > -1 ? <img src="red-circle-blink.gif" alt="En live" className="pageStreamersLive" /> : <></>}
                        <img src={streamer.avatar_url} alt={streamer.display_name} className="avatar"></img>
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
                        {liveChannels.findIndex(element => element.user_login === currentStreamer.twitch_name) > -1 ? <a href={"https://twitch.tv/" + currentStreamer.twitch_name} target="_blank" rel="noreferrer" id="enLive">{currentStreamer.display_name} est actuellement en live !</a> : <></>}
                        <DonationsGoals data={currentStreamerGoals} name={currentStreamer.display_name}/>
                        <h3>Ses réseaux</h3>
                        <div className="popupStreamerReseaux">
                            {currentStreamer.bluesky != null ? <a className="streamerLink bluesky" href={"https://bsky.app/profile/" + currentStreamer.bluesky} target="_blank" rel="noreferrer"><img src="blueskyBlack.png" alt="logoBluesky" className="logoRS"></img></a> : <></>}
                            {currentStreamer.twitch_name != null ? <a className="streamerLink twitch" href={"https://twitch.tv/" + currentStreamer.twitch_name} target="_blank" rel="noreferrer"><img src="twitchBlack.png" alt="logoTwitch" className="logoRS"></img></a> : <></>}
                            {currentStreamer.instagram != null ? <a className="streamerLink instagram" href={"https://instagram.com/" + currentStreamer.instagram} target="_blank" rel="noreferrer"><img src="instaBlack.png" alt="logoInsta" className="logoRS"></img></a> : <></>}
                        </div>
                    </div>
                : <></>}
            </div>
        }
    </>;

}

export default Streamers;