import React , {useState , useEffect} from 'react';
import {NativeSelect , FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api';
import './country.css'

const CountryPicker=({handleCountryChange})=> {

    const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

    return (
        <div >
            <FormControl>
                <NativeSelect className="picker" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="none"> Global Cases (Click Country) </option>
                    {countries.map((country,i)=><option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;
