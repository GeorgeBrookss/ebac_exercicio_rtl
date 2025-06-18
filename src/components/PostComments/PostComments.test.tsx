import {  render, screen, within } from '@testing-library/react';
import Post from '../PostComments/index';
import userEvent from '@testing-library/user-event';

describe('Teste para verificação de renderização de dois comentários', () => {
    test('Deve renderizar dois comentários', async () => {

        render(<Post />)

        const textarea = screen.getByRole('textbox')
        const button = screen.getByRole('button', {name: /comentar/i})
        
        await userEvent.type(textarea, 'primeiro coment')
        await userEvent.click(button)

        await userEvent.type(textarea, 'segundo coment')
        await userEvent.click(button)


        const lista = screen.getByTestId('comentario')
        const itens = within(lista).getAllByRole('listitem')
        expect(itens).toHaveLength(2);
    });
});