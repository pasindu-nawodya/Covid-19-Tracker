import Axios from "axios"

const url = "https://covid19.mathdro.id/api";

export const fetchData = async()=>{
    try {
        const {data : {confirmed , recovered , deaths , lastUpdate}} = await Axios.get(url);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
      const { data } = await Axios.get(`${url}/daily`);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };