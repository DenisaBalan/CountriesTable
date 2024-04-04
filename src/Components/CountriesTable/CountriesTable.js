import CountriesRow from '../CountriesRow/CountriesRow';
import './CountriesTable.css';

function CountriesTable({data, actions}) {

  return (
    <table className='table table-dark table-striped table-responsive'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Tara</th>
                <th>Regiune</th>
                <th>Populatie</th>
                <th>Actiuni</th>
            </tr>
        </thead>
        <tbody>
            {data.map((country) => (
                <CountriesRow key={country.id} row={country} actions={actions} />
            ))}
        </tbody>
    </table>
  );
}

export default CountriesTable;
