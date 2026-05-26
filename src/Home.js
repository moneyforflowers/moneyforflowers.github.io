import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { GetStats } from "./Services/GetStats";

function Home() {
    
    
    const [statsData, setStatsData] = useState();

    
    useEffect(function () {
        GetStats().then((data) => 
            {
                setStatsData(data[0])
            }
        );
    }, []);
    // useEffect(function () {
    //         GetGoals().then((data) => 
    //             {
    //                 console.log(data)
    //             }
    //         );
    //     }, []);
    // useEffect(() => {
    //     var result = axios.post('https://id.twitch.tv/oauth2/token?client_id=magcfm9155x67mc5tcfud1larpcmnd&client_secret=8v5mxvrvryg16ac6b109nzrx7zv7dt&grant_type=client_credentials')
    //     .then(response => console.log(response.data))
    // }, [])
    return <div className="homeContent">
        <div className="header">
            <img src="logoMFF_2026_full.svg" alt="logoMFF" height={200} width={300}/>
            <p>Money for Flowers, marathon caritatif du 30 Juillet au 2 Août 2026, au profit d'Utopia 56.</p>
        </div>
        <div className="mff">
            <p className="presensation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem eget ante tincidunt tincidunt in vel eros. Aenean porta venenatis tellus in dictum. Maecenas volutpat laoreet tellus nec tempus. Praesent malesuada maximus dolor ut bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <div className="links">
                <NavLink to="/direct" className="twitch">Les directs &gt;</NavLink>
                <NavLink to="/streamers">Les streamer.euses du MFF &gt;</NavLink>
            </div>
        </div>
        <div className="asso">
            <p className="presensation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem eget ante tincidunt tincidunt in vel eros. Aenean porta venenatis tellus in dictum. Maecenas volutpat laoreet tellus nec tempus. Praesent malesuada maximus dolor ut bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <div className="links">
                <a href="https://utopia56.org/" target="_blank" rel="noreferrer">L'association &gt;</a>
            </div>
        </div>
        {statsData != null &&  <div className="dons">
            <p className="ctaDons">Vous souhaitez donner à Utopia 56 via le Money for Flowers ?</p>
            <div className="cagnotteDiv">
                <p className="cagnotte">Montant récolté</p>
                <p className="montant">{statsData.total_raised} €</p>
            </div>
            <div className="lienDons">
                <a href="https://streamlabscharity.com/teams/@money-for-flowers-2026/money-for-flowers-2026?l=fr-FR" target="_blank" rel="noreferrer">Faire un don &gt;</a>
            </div>
                    </div>}
        <div className="precedentesEditions">
            <p className="precedentesEditionsText">Les précédentes éditions du Money for Flowers</p>
            <div className="precedentesEditionsAnnees">
                <div className="anneePrecente">
                    <p className="montant">15418 €</p>
                    <p>Au profit de <a href="https://www.nightline.fr/" target="_blank" rel="noreferrer">Nightline</a></p>
                </div>
            </div>
        </div>
    </div>;
}

export default Home;