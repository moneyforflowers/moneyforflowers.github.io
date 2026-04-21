import { useEffect, useState } from "react";
import { GetStreamers } from "./Services/GetStreamers";
import { GetLiveChannels } from "./Services/GetLiveChannels";

function Streamers() {

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
    
    return <>
        {
            streamersData.map((streamer) => {
                return <div key={streamer.id}>{streamer.display_name}</div>
            })
        }
        <p>Live Channels</p>
        {
            liveChannels.map((streamerLive) => {
                return <div key={streamerLive.user_name}>{streamerLive.user_name} est en live !</div>
            })
        }
    </>;

}

export default Streamers;