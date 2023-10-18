import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Teste a Aplicação', () => {
  it('Verifica se o texto "Lista de Notícias" está na tela', () => { // change 'test' to 'it'
    render(<App />);
    const linkElement = screen.getByText(/Lista de Notícias/i);
    expect(linkElement).toBeInTheDocument();
  });
});
