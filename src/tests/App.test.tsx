import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import mock from './mocks/mockApi';
import { renderWithRouter } from '../services/renderWithRouter';
import ContextProvider from '../context/providex';

afterEach(() => {
  localStorage.clear();
});

beforeEach(() => {
  vi.spyOn(global, 'fetch').mockResolvedValue({
    status: 200,
    json: async () => mock,
  } as Response);
  localStorage.clear();
});

describe('Teste a Aplicação', () => {
  it('Verifica a página home tem os requisitos necessarios', async () => {
    const { user } = renderWithRouter(<ContextProvider><App /></ContextProvider>);
    expect(screen.getByRole('heading', { name: /logo notícias notáveis/i })).toBeInTheDocument();
    await waitFor(() => screen.getByRole('heading', { name: /Primeira noticia do Brasil!/i }));
    await waitFor(() => expect(screen.getAllByRole('img', {
      name: /icone de favorito/i,
    })).toHaveLength(10));
    await user.click(screen.getAllByRole('img', {
      name: /icone de favorito/i,
    })[0]);
    await user.click(screen.getByText('Favoritas'));
    expect(screen.getAllByRole('img', {
      name: /icone de favorito/i,
    })).toHaveLength(2);
    await user.click(screen.getAllByRole('img', {
      name: /icone de favorito/i,
    })[1]);
    await user.click(screen.getByRole('img', { name: /icon theme/i }));
    expect(screen.getAllByRole('img', {
      name: /icone de favorito/i,
    })).toHaveLength(2);
    await user.click(screen.getByRole('img', {
      name: /icon toggle/i,
    }));
    await user.click(screen.getByText('Mais Recentes'));
    await user.click(screen.getByText('Release'));
    await user.click(screen.getByText('Notícia'));
    await user.click(screen.getByRole('button', {
      name: /mais noticias\.\.\./i,
    }));
    await user.type(screen.getByRole('textbox'), 'ibge');
    await user.click(screen.getByRole('button', {
      name: /buscar/i,
    }));
    await user.type(screen.getByRole('textbox'), 'aqui não vai ter noticia nenhuma');
    await user.click(screen.getByRole('button', {
      name: /buscar/i,
    }));
    expect(screen.getByRole('heading', {
      name: /não encontrado nenhuma noticia/i,
    })).toBeInTheDocument();
  });

  it('Verifica a página NOTFOUND', async () => {
    const { user } = renderWithRouter(<ContextProvider><App /></ContextProvider>, { route: '/notfound' });
    expect(screen.getByRole('heading', {
      name: /página não encontrada/i,
    })).toBeInTheDocument();
    await user.click(screen.getByRole('link', { name: /voltar/i }));
    expect(screen.getByRole('heading', { name: /logo notícias notáveis/i })).toBeInTheDocument();
  });
});
