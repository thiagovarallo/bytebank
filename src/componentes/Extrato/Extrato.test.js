import { render, screen } from "@testing-library/react";
import Extrato from ".";

test('Renderizar uma lista de elemento', () => {
    const trancacao = [
        {
            trancacao  : "Depósito",
            valor  : 150
        },
    ]

    render(<Extrato transacoes={trancacao}/>);
    const listExtrato = screen.getByRole('listitem');
    expect(listExtrato).toBeInTheDocument;
})