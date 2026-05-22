import { useEffect, useState } from "react";
import { GetStreamers } from "./Services/GetStreamers";
import { GetLiveChannels } from "./Services/GetLiveChannels";

function Direct() {

    const [liveChannels, setLiveChannels] = useState([])
    useEffect(function () {
        GetStreamers().then((data) => 
            {
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
    
    let viewer_count = 0;
    liveChannels.forEach(element => {
        viewer_count += element.viewer_count;
    });

    return <div className="direct">
        {viewer_count > 0 && <>
                <p className="directHeader">Ces chaines sont en live !</p>
                <div className="chainesLive">
                {
                    liveChannels.map((streamerLive) => {

                        var url = streamerLive.thumbnail_url.replace('{width}', '300');
                        url = url.replace('{height}', '198');

                        return <div className="result">
                            <div key={streamerLive.user_name} class='cell cellStream'>
                                <span class='viewerCount'>
                                    <img src='twitchWhite.png' alt="icon"/>
                                    <span>{streamerLive.viewer_count}</span>
                                </span>
                                <img src='red-circle-blink.gif' class='reddot' alt="reddot"/>
                                <a target='_blank' href={"https://twitch.tv/" + streamerLive.user_name} class='img__wrap' rel="noreferrer">
                                    <p class='img__description'>{streamerLive.title}</p>
                                    <img class='thumbnail img__img' src={url} alt="thumbnail"/>
                                </a>
                            </div>
                            <h5><a href={"https://twitch.tv/" + streamerLive.user_name} class='text-center colorWhite'>{streamerLive.user_name}</a></h5>
                        </div>
                    })
                }
                </div>
                <p>Nombre de viewers sur les lives Money for Flowers : {viewer_count}</p>
            </>
        }
        {viewer_count === 0 && <>
            <p className="directHeader">Aucune chaine du MFF en direct pour le moment :(</p>
        </>}
    </div>;

}

export default Direct;