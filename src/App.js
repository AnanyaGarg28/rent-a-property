//  import react hooks to handle state, events and side-effects
import { useCallback, useState, useEffect } from 'react';

//  import components
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Filters from './components/Filters';
import PropertyInfo from './components/PropertyInfo';

//  main component
function App() {

  //  state variables
  const [propertiesList, setPropertiesList] = useState([]);
  const [filteredPropertiesList, setfilteredPropertiesList] = useState([]);
  const [location, setLocation] = useState('');
  const [availableFrom, setAvailableFrom] = useState('2022-08-01');
  const [rent, setRent] = useState([0,Infinity]);  
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

  //  fetch property data from external file using useCallback
  const fetchProperties = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setPropertiesList(data);
      setfilteredPropertiesList(data);
    })
  }, []);

  //  handling callback function whenever its value changes
  useEffect(() => {
    fetchProperties()
  }, [fetchProperties]);

  const onFilter = ()=>{
    setfilteredPropertiesList(propertiesList.filter((property) => {
      return (
        property.location.toLowerCase().includes(location.toLowerCase()) &&
        property.availableFrom >= availableFrom && 
        property.rent <= rent[1] && property.rent >=rent[0] && 
        property.type.toLowerCase().includes(type.toLowerCase()) 
      );
    }).filter(property=>{
      return (
        property.location.toLowerCase().includes(query.toLowerCase()) ||
        property.address.toLowerCase().includes(query.toLowerCase()) ||
        property.type.toLowerCase().includes(query.toLowerCase()) ||
        property.name.toLowerCase().includes(query.toLowerCase())
      );
    }));
  }

  //  actual components being rendered to DOM
  return (
    <div className="App bg-violet-50 bg-opacity-70">
      <Header />
      <Search query={query} setQuery={setQuery} />
      <Filters onFilter={onFilter} location={location} availableFrom={availableFrom} rent={rent} type={type} 
        setLocation={setLocation} setRent={setRent} setAvailableFrom={setAvailableFrom} setType={setType}/>
      <div className='grid grid-cols-3 gap-6 mx-36 pt-10'>
        {filteredPropertiesList.map((property) => (
          <PropertyInfo key={property.id} property={property}/>
        ))}
      </div>
      <div className='pb-96'></div>
    </div>
  );
}

export default App;
