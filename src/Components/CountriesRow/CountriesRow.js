import './CountriesRow.css';

function CountriesRow({row, actions}) {
  return (
    <tr>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.region}</td>
        <td>{row.population}</td>
        <td><button onClick={() => actions.deleteCountry(row.id)} className='btn btn-danger'>Sterge</button></td>
    </tr>
  );
}

export default CountriesRow;
