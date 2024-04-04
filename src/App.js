// import './App.css';
// import { fetchCountries } from './http/countries';
// import {useState, useEffect} from 'react';
// import CountriesTable from './Components/CountriesTable/CountriesTable';


// function App() {
//   const [countries, setCountries] = useState([]);

//   const getCountries = async () => {
//     const data = await fetchCountries();
//     setCountries(data);
//   }
//   useEffect(( ) =>{
//     getCountries();
//   }, []);
  
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         {countries.length > 0 && 
//         < CountriesTable data={countries}/>
//         }
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
import { fetchCountries } from './http/countries';
import { useState, useEffect } from 'react';
import CountriesTable from './Components/CountriesTable/CountriesTable';
import CountriesFilters from './Components/CountriesFilters/CountriesFilters';
import { filterArrayObject } from './utils/arrays';

function App() {
  const [countries, setCountries] = useState([]);
  const [resetFilters, setResetFilters] = useState(false);

  const getCountries = async () => {
    const data = await fetchCountries();
    setCountries(data);
  }

  const deleteCountry = (id) => {
    filterArrayObject(countries, setCountries, 'id', id);
  }

  useEffect(() => {
    getCountries();
  }, [resetFilters]);

  const actions = {
    deleteCountry: deleteCountry
  }

  return (
    <div className="App">
      <header className="App-header">
        {countries.length > 0 &&
        <div className='container mt-5 pt-5'>
          <CountriesFilters data={countries} setter={setCountries} resetFilters={resetFilters} setResetFilters={setResetFilters} />
          <CountriesTable data={countries} actions={actions} />
        </div>
        }
      </header>
    </div>
  );
}

export default App;