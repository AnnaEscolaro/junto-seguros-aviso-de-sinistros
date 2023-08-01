import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFormInformation } from '../redux/actions';
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

  const dispatch = useDispatch();

  const activateButton = () => {
    return (
      date.length < 1
      || address.length < 1
      || number.length < 1
      || district.length < 1
      || city.length < 1
      || state.length < 1
      || country.length < 1
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addFormInformation({
      date,
      type,
      location: {
        address,
        number,
        district,
        city,
        stateLocal: state,
        country
      }
    }));
  };

  return (
    <>
      <h2>Preencha as informações abaixo</h2>
      <form id="form-sinistros" onSubmit={ handleSubmit }>
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
          <input type="text" placeholder="Rua" className="input-location" onChange={ e => setAddress(e.target.value) } />
          <input type="number" placeholder="Número" className="input-location" onChange={ e => setNumber(e.target.value) } />
          <input type="text" placeholder="Bairro" className="input-location" onChange={ e => setDistrict(e.target.value) }/>
          <input type="text" placeholder="Cidade" className="input-location" onChange={ e => setCity(e.target.value) } />
          <input type="text" placeholder="Estado" className="input-location" onChange={ e => setState(e.target.value) } />
          <input type="text" placeholder="País" className="input-location" onChange={ e => setCountry(e.target.value) } />
        </label>
        <button disabled={ activateButton() } type="submit">Enviar</button>
      </form>
      <Table />
    </>
  )
}

export default Form;