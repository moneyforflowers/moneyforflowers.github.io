import { LineChart } from '@mui/x-charts/LineChart';

function AddInterval(date, interval)
{
    if (interval === "0") // Day
    {
        return new Date(date.getTime() + 60*24*60000);
    }
    else if (interval === "1") // 30mins
    {
        return new Date(date.getTime() + 30*60000);
    }
    else if (interval === "2") // 60mins
    {
        return new Date(date.getTime() + 60*60000);
    }
    else if (interval === "3") // 120mins
    {
        return new Date(date.getTime() + 120*60000);
    }
    else if (interval === "4") // 300mins
    {
        return new Date(date.getTime() + 300*60000);
    }
    else {
        return new Date(date.getTime() + 30*60000);
    }
}


function GraphDons(props) {
    var data = props.data;
    var interval = props.interval;

    var datesArray = [];
    var donsArray = [];
    var donationIndex = 0;

    if (data.length > 0 && interval > 0)
    {
        donationIndex = 0;
        var stratingHour = new Date("2025-07-24T14:30:01+00:00");
        var endingHour = new Date(data[data.length - 1].donated_at);
        
        var currentHour = AddInterval(stratingHour, interval);
        var valueDons = 0;
        while (currentHour < endingHour)
        {
            datesArray.push(currentHour);
            var nextHour = AddInterval(currentHour, interval);
            while (donationIndex < data.length && Date.parse(data[donationIndex].donated_at) <= nextHour)
            {
                if (data[donationIndex].currency === "EUR")
                {
                    valueDons += data[donationIndex].amount;
                }
                donationIndex++;
            }
            donsArray.push(Math.round(valueDons * 100) / 100);
            currentHour = nextHour;
        }
    }
    else if (data.length > 0)
    {
        donationIndex = 0;
        var thursdayHour = new Date("2025-07-31T00:00:01+02:00");
        var fridayHour = new Date("2025-08-01T00:00:01+02:00");
        var saturdayHour = new Date("2025-08-02T00:00:01+02:00");
        var sundayHour = new Date("2025-08-03T10:00:01+02:00");

        var valueThursday = 0;
        var valueFriday = 0;
        var valueSaturday = 0;
        var valueSunday = 0;
        

        while (donationIndex < data.length)
        {
            if (data[donationIndex].currency === "EUR")
            {
                var date = Date.parse(data[donationIndex].donated_at)
                if (date < thursdayHour)
                {
                    valueThursday += data[donationIndex].amount;
                }
                if (date >= thursdayHour && date < fridayHour)
                {
                    valueFriday += data[donationIndex].amount;
                }
                if (date >= fridayHour && date < saturdayHour)
                {
                    valueSaturday += data[donationIndex].amount;
                }
                if (date >= saturdayHour && date < sundayHour)
                {
                    valueSunday += data[donationIndex].amount;
                }
            }
            donationIndex++;
        }
        donsArray.push(Math.round(valueThursday * 100) / 100);
        donsArray.push(Math.round((valueThursday + valueFriday) * 100) / 100);
        donsArray.push(Math.round((valueThursday + valueFriday + valueSaturday) * 100) / 100);
        donsArray.push(Math.round((valueThursday + valueFriday + valueSaturday + valueSunday) * 100) / 100);
        datesArray.push("Jeudi");
        datesArray.push("Vendredi");
        datesArray.push("Samedi");
        datesArray.push("Dimanche");
    }
    return (
        <>{data.length > 0 && <LineChart
            series={[
                { data: donsArray, label: 'Dons (€)', color: "#008000" },
            ]}
            xAxis={[{ scaleType: 'point', data: datesArray, height: 28, tickLabelStyle: {display: interval === "0" ? "block" : "none"} }]}
            yAxis={[{ width: 50 }]}
            className='chartLine'
        />}</>
    )
}

export default GraphDons;