import { render, screen } from "@testing-library/react";
import Menu from ".";

test('Renderizar um link da página inicial', () => {
    render(<Menu />)
    const linkPagInicial = screen.getByText('Inicial')
    expect(linkPagInicial).toBeInTheDocument();
});

test('renderizar uma lista de link', () => {
    render(<Menu />)
    const listLinkMenu = screen.getAllByRole('link');
    expect(listLinkMenu).toHaveLength(4)
})

test('não deve ter no link estrato', () => {
    render(<Menu />)
    const linkEstrato = screen.queryByText('Estrato');
    expect(linkEstrato).not.toBeInTheDocument();
})