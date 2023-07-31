import { useState } from 'react';
import Table from "../components/Table";

function Form() {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

//   console.log(date);
//   console.log(type);
//   console.log(address);
//   console.log(number);
//   console.log(district);
//   console.log(city);
//   console.log(state);
//   console.log(country);

  const activateButton = () => {
    return (
      date.length < 1
      || type.length < 1
      || address.length < 1
      || number.length < 1
      || district.length < 1
      || city.length < 1
      || state.length < 1
      || country.length < 1
    );
  };

  return (
    <>
      <h2>Preencha as informações abaixo</h2>
      <form id="form-sinistros">
        <label>
          Data do Sinistro
          <input type="date" id="date-form" onChange={ e => setDate(e.target.value) } />
        </label>
        <label>
          Tipo
          <select id="select-form" onChange={ e => setType(e.target.value) }>
            <option value="roubo-ou-furto">Roubo ou Furto</option>
            <option value="colisao">Colisão</option>
            <option value="causas-naturais">Causas Naturais</option>
          </select>
        </label>
        <label id="form-location">
          Local do Sinistro
          <input type="text" placeholder="Rua" class="input-location" onChange={ e => setAddress(e.target.value) } />
          <input type="number" placeholder="Número" class="input-location" onChange={ e => setNumber(e.target.value) } />
          <input type="text" placeholder="Bairro" class="input-location" onChange={ e => setDistrict(e.target.value) }/>
          <input type="text" placeholder="Cidade" class="input-location" onChange={ e => setCity(e.target.value) } />
          <input type="text" placeholder="Estado" class="input-location" onChange={ e => setState(e.target.value) } />
          <input type="text" placeholder="País" class="input-location" onChange={ e => setCountry(e.target.value) } />
        </label>
        <button disabled={ activateButton() } type="submit">Enviar</button>
      </form>
      <Table />
    </>
  )
}

export default Form;