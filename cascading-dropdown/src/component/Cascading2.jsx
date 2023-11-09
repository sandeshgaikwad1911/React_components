/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './cascading1.css';

const Cascading2 = () => {

    const allCountries = [
        {
            name: "India", cities: ["Delhi", "Mumbai"]
        },
        {
            name: "Pakistan", cities: ["Lahore", "Karachi"]
        },
        {
            name: "Bangladesh", cities: ["Dhaka", "Chitgaon"]
        },
        {
            name: "Usa", cities: ["NYC", "Washington DC"]
        },
    ]


    // ---------------------------------------------------------------------------------------------------------------

    const [countries, setContries] = useState([]);
    
    useEffect(()=>{
        setContries(allCountries)
    },[]);
    
    const [cities, setCities] = useState([])
    // ---------------------------------------------------------------------------------------------------------------

    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    // console.log('selectedCountry', selectedCountry);
    // console.log('selectedCity', selectedCity)

    // ---------------------------------------------------------------------------------------------------------------

    const handleCountry = (countryName)=>{

        setSelectedCountry(countryName)
        setSelectedCity("")

        const singleDocument = countries.filter((x)=>x.name == countryName);
        console.log('singleDocument', singleDocument)
        setCities(singleDocument)
    }

    // ---------------------------------------------------------------------------------------------------------------

  return (
    <div className="cascading">
        
        <select name="" id="" onChange={(e)=>handleCountry(e.target.value)} value={selectedCountry}>
            <option hidden>Select Country</option>
            {
                countries.map((ctr,i)=>(
                    <option key={i} value={ctr.name}>{ctr.name}</option>
                ))
            }
        </select>

        <select name="" id="" onChange={(e)=>setSelectedCity(e.target.value)} value={selectedCity}>
            <option hidden>Select City</option>
            {
                cities.map((cty, i)=>(
                    cty.cities.map((city, i)=>(
                        <option key={i} value={city}>{city}</option>
                    ))
                ))
            }
        </select>
            
    </div>
  )
}

export default Cascading2