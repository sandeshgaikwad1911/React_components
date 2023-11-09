/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './cascading1.css'

const Cascading1 = () => {

  const allCountries = [
    { id: 1, name: "India" },
    { id: 2, name: "Usa" },
  ];

  const allStates = [
    { id: 1, countryName: "India", name: "Maharashtra" },
    { id: 2, countryName: "India", name: "UP" },
    { id: 3, countryName: "Usa", name: "California" },
    { id: 4, countryName: "Usa", name: "San Fransico" },
  ];

  const allCities = [
    { id: 1, stateName: "Maharashtra", name: "Mumbai" },
    { id: 2, stateName: "Maharashtra", name: "Pune" },
    { id: 3, stateName: "UP", name: "Varanasi" },
    { id: 4, stateName: "UP", name: "Gorakhpur" },
    { id: 5, stateName: "California", name: "Cali1" },
    { id: 6, stateName: "California", name: "Cali2" },
    { id: 7, stateName: "San Fransico", name: "SF1" },
    { id: 8, stateName: "San Fransico", name: "SF2" },
  ];

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // --------------------------------------------------------------------------------------------------------------

  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  // console.log('country', country)
  // console.log('state', state)
  // console.log('city', city)


// --------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    setCountries(allCountries);
  }, []);


// --------------------------------------------------------------------------------------------------------------

  const handleCountry = (name) => {
    // console.log("countryName", name);
    setCountry(name);
    setState("")
    setCity("")

    const filteredStates = allStates.filter((x) => x.countryName == name);
    // console.log("filteredStates", filteredStates);
    setStates(filteredStates);

    setCities([]);

  };

// --------------------------------------------------------------------------------------------------------------

  const handleState = (name) => {
    // console.log('state',name)
    setState(name)
    setCity("")
    const filteredCities = allCities.filter((c) => c.stateName == name);
    setCities(filteredCities);
  };

  // --------------------------------------------------------------------------------------------------------------

  return (
      <div className="cascading">

        {countries && (
          <select onChange={(e) => handleCountry(e.target.value)} value={country}>
            <option hidden>Select country</option>
            {countries.map((ctr) => (
              <option key={ctr.id} value={ctr.name}>
                {ctr.name}
              </option>
            ))}
          </select>
        )}

        {states && (
          <select onChange={(e) => handleState(e.target.value)} value={state}>
            <option hidden>Select state</option>
            {states.map((st) => (
              <option key={st.id} value={st.name}>
                {st.name}
              </option>
            ))}
          </select>
        )}

        {cities && (
          <select onChange={(e)=>setCity(e.target.value)} value={city}>
            <option hidden>Select city</option>
            {cities.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        )}
      </div>
  );
};

export default Cascading1;
