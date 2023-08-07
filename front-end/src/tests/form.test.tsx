import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import store from '../redux';
import Form from '../pages/Form';

describe('Teste do formulário', () => {
  test('O título é renderizado', () => {
    render(
      <Provider store={ store } >  
        <Form />
      </Provider>
    );
    const title = screen.getByText('Preencha as informações abaixo');
    expect(title).toBeInTheDocument();
  });

  test('O botão ENVIAR é renderizado desativado', () => {
    render(
      <Provider store={ store } >  
        <Form />
      </Provider>
    );
    const button = screen.getByRole('button', { name: 'Enviar' });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('O botão ENVIAR é ativado quando os inputs são preenchidos', async () => {
    render(
      <Provider store={ store } >  
        <Form />
      </Provider>
    );
    await userEvent.type(screen.getByLabelText('Data do Sinistro'), '2023-01-02');
    await userEvent.selectOptions(screen.getByLabelText('Tipo'), 'Causas Naturais')
    await userEvent.type(screen.getByPlaceholderText('Rua'), 'Rua Comendador Ar/aújo');
    await userEvent.type(screen.getByPlaceholderText('Número'), '5053');
    await userEvent.type(screen.getByPlaceholderText('Bairro'), 'Centro');
    await userEvent.type(screen.getByPlaceholderText('Cidade'), 'Curitiba');
    await userEvent.type(screen.getByPlaceholderText('Estado'), 'Paraná');
    await userEvent.type(screen.getByPlaceholderText('País'), 'Brasil');
    const button = screen.getByRole('button', { name: 'Enviar' });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });
});
