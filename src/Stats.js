import { useEffect, useState } from "react";
import { GetStats } from "./Services/GetStats";
import { GetDonations } from "./Services/GetDonations";

function Stats() {
    const [statsData, setStatsData] = useState();
    const [donationsData, setDonationsData] = useState([]);
    const [liveChannels, setLiveChannels] = useState([])
    useEffect(function () {
        GetStats().then((data) => 
            {
                setStatsData(data[0])
            }
        );
    }, []);
    
    useEffect(function () {
        GetDonations().then((data) => 
            {
                setDonationsData(data)
            }
        );
    }, []);

    return <>
        {statsData != null && <div className="stats">
            <div className="statBlock">
                <p className="titreStatBlock">Cagnotte globale</p>
                <p className="valueStatBlock">{statsData.total_raised} €</p>
            </div>
            <div className="statBlock">
                <p className="titreStatBlock">Nombre de dons</p>
                <p className="valueStatBlock">{statsData.donation_count}</p>
            </div>
            <div className="statBlock">
                <p className="titreStatBlock">Don moyen</p>
                <p className="valueStatBlock">{statsData.average_donation} €</p>
            </div>
        </div>}
        <div className="lastDonations">
            <p>Les 10 dernières donations</p>
            {donationsData.map(element => {
                return <div className="donation" key={element.id}>
                    <p id="name">{element.donor_name}</p>
                    <p id="message">{element.message}</p>
                    <p id="amount">{element.amount + " " + element.currency}</p>
                </div>
            })}
        </div>
    </>;
}

export default Stats;