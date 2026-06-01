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
            <img src="logoMFF_2026_full.svg" alt="logoMFF" height={250}/>
            <p>Money for Flowers, marathon caritatif du 30 Juillet au 2 Août 2026, au profit d'Utopia 56.</p>
        </div>
        <div className="mff">
            <p className="presensation">Le Money for Flowers (ou MFF) est un événement caritatif en ligne sur Twitch ayant lieu du 30 juillet au 02 août 2026 qui récolte des fonds pour l’association Utopia 56.<br/>Lors d’un marathon de streaming qui s’étend du jeudi 30 juillet à 18h au dimanche 02 août à 23h59, ce sont plus de 70 streameurs·euses qui mobilisent leurs communautés pour récolter des dons au profit d’Utopia 56.</p>
            <div className="links">
                <NavLink to="/direct" className="twitch">Les directs &gt;</NavLink>
                <NavLink to="/streamers">Les streamer.euses du MFF &gt;</NavLink>
            </div>
        </div>
        <div className="asso">
            <a href="https://utopia56.org/" target="_blank" rel="noreferrer">
                <img src="utopia.svg" height={103} width={543} alt="utopia"/>
            </a>
            <p className="presensation">Utopia 56 est une association engagée depuis 10 ans à travers 7 antennes en France, pour l’accueil, les droits et à dignité des personnes exilées et des personnes à la rue, à travers des actions de maraudes, d’hébergements solidaires, d’orientation, de suivis et de plaidoyers.</p>
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
                <div className="anneeDiv">
                    
                <div className="anneePrecente">
                    <p className="annee">2025</p>
                    <p className="montant">15418 €</p>
                </div>
                <p>Au profit de</p>
                <a href="https://www.nightline.fr/" target="_blank" rel="noreferrer"><img src="nightline.svg" height={50} alt="nightline"/></a>

                </div>
            </div>
        </div>
    </div>;
}

export default Home;