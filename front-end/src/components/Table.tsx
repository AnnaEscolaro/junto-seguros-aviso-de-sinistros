import { useSelector } from 'react-redux';
import { InformationType } from '../types';
// import { useDispatch } from 'react-redux';
// import { deleteFormInformation } from '../redux/actions';

function Table() {
  const historyInformation = useSelector((state) => state);

//   const dispatch = useDispatch();

  const handleClickDelete = () => {
    // dispatch(deleteFormInformation({
    //   date,
    //   type,
    //   location: {
    //     address,
    //     number,
    //     district,
    //     city,
    //     stateLocal: state,
    //     country
    //   }
    // }))
  };
  
  return (
    <table>
      <thead>
        <tr>
          <th>Data do Sinistro</th>
          <th>Tipo</th>
          <th>Local do Sinistro</th>
        </tr>
      </thead>
      <tbody>
        {historyInformation.map((info: InformationType) => (
          <tr key={info.location.address }>
            <td>{ info.date }</td>
            <td>{ info.type }</td>
            <td>{ `${info.location.address}, ${info.location.number}, ${info.location.district}, ${info.location.city}, ${info.location.stateLocal}, ${info.location.country}` }</td>
            <td>
              <button>Editar</button>
              <button onClick={ handleClickDelete }>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default Table;
