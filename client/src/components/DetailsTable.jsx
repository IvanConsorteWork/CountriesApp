import './DetailsTable.css'
import { useSelector } from 'react-redux';

export default function DetailsTable() {
  const myCountry = useSelector((state) => state.countryDetail);
  return (
    <div id='details-table'>
      <table border='3'>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{myCountry.capital}</td>
          </tr>
          <tr>
            <td>Subregion</td>
            <td>{myCountry.subregion}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{myCountry.area}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{myCountry.population}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}