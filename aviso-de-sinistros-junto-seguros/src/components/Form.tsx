function Form() {
  return (
    <>
      <h2>Preencha as informações abaixo</h2>
      <form id="form-sinistros">
        <label>
          Data do Sinistro
          <input type="date" id="date-form" />
        </label>
        <label>
          Tipo
          <select id="select-form">
            <option value="roubo-ou-furto">Roubo ou Furto</option>
            <option value="colisao">Colisão</option>
            <option value="causas-naturais">Causas Naturais</option>
          </select>
        </label>
        <label id="form-location">
          Local do Sinistro
          <input type="text" placeholder="Rua" class="input-location" />
          <input type="number" placeholder="Número" class="input-location" />
          <input type="text" placeholder="Bairro" class="input-location" />
          <input type="text" placeholder="Cidade" class="input-location" />
          <input type="text" placeholder="Estado" class="input-location" />
          <input type="text" placeholder="País" class="input-location" />
        </label>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default Form;