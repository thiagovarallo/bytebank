import { render, screen } from "@testing-library/react";
import estilos from "../Extrato.module.css"
import Transacoes from ".";

test("Renderizar o mesmo componente com props atualizadas", () => {

    const transacao = {
        transacao : "Depósito",
        valor : 178
    };

    const {rerender} = render(<Transacoes transacao={transacao} estilos={estilos} />);
    const tipoTransacao = screen.getByTestId('tipoTransacao');
    const valorTransacao = screen.getByTestId('valorTransacao');
    expect(tipoTransacao).toHaveTextContent("Depósito");
    expect(valorTransacao).toHaveTextContent('178');

    const newTransacao = {
        transacao : "Transferência",
        valor : -765
    };

    rerender(<Transacoes transacao={newTransacao} estilos={estilos} />)
    const newTipoTransacao = screen.getByTestId('tipoTransacao');
    const newValorTransacao = screen.getByTestId('valorTransacao');
    expect(newTipoTransacao).toHaveTextContent("Transferência");
    expect(newValorTransacao).toHaveTextContent('-765');
})