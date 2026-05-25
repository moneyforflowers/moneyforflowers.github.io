import { useEffect, useState } from "react";
import { GetStats } from "./Services/GetStats";
import { GetLastDonations } from "./Services/GetLastDonations";
import { GetDonations } from "./Services/GetDonations";
import GraphDons from "./GraphDons";

function Stats() {
    const [statsData, setStatsData] = useState();
    const [donationsData, setDonationsData] = useState([]);
    const [donationsAllData, setDonationsAllData] = useState([])
    const [interval, setInterval] = useState("1")

    useEffect(function () {
        GetStats().then((data) => 
            {
                setStatsData(data[0])
            }
        );
    }, []);
    
    useEffect(function () {
        GetLastDonations().then((data) => 
            {
                setDonationsData(data)
            }
        );
        GetDonations().then((data) => {
            setDonationsAllData(data)
        });
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
        <GraphDons interval={interval} data={donationsAllData} />
        <select id="interval" onChange={e => setInterval(e.target.value)} value={interval} className="selectInterval">
            <option value={"0"}>Jour</option>
            <option value={"1"}>30min</option>
            <option value={"2"}>60min</option>
            <option value={"3"}>2h</option>
            <option value={"4"}>6h</option>
        </select>
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