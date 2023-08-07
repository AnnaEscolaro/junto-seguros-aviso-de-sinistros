import { useSelector, useDispatch } from 'react-redux';
import { InformationType } from '../types';
import { DispatchType } from '../types';
import { getClaims } from '../redux/actions/list-claims';
import { useEffect } from 'react';
import { getClaimToDelete } from '../redux/actions/delete-claim';
import { claimToEdit } from '../redux/actions/edit-claim';

function Table() {
  const historyInformation = useSelector((state) => state);

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(getClaims());
  }, []);

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
          <tr key={info.id }>
            <td>
              <input
                type="date"
                value={ info.date }
                placeholder='Digite a data'
              />
            </td>
            <td>
              <input
                type="text"
                value={ info.type }
                placeholder='Digite o tipo'
              />
            </td>
            <td>
              <input
                type="text"
                value={ `${info.location.address}, ${info.location.number}, ${info.location.district}, ${info.location.city}, ${info.location.stateLocal}, ${info.location.country}` }
                placeholder='Digite o endereço'
              />            
            </td>
            <td>
              <button onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                dispatch(claimToEdit(info.id))
                window.location.reload()
                }}
              >
                Salvar edição
              </button>
              <button onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                dispatch(getClaimToDelete(info.id))
                window.location.reload();
                }}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default Table;
