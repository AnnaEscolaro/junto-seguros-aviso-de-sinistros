function Table() {

  return (
    <table>
      <thead>
        <tr>
          <th>Data do Sinistro</th>
          <th>Tipo</th>
          <th>Local do Sinistro</th>
        </tr>
      </thead>
      {/* <tbody>
        {XPTO.map((expense: any) => (
          <tr key={XPTO.id }>
            <td>{ XPTO.date }</td>
            <td>{ XPTO.type }</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody> */}
    </table>

  );
}

export default Table;
