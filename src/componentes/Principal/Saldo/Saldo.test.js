import { render, screen } from "@testing-library/react";
import Saldo from ".";

describe('test de <Saldo />', () => {
    test('deve realizar o saldo com o valor monetario', () => {
        render(<Saldo saldo={500}/>)

        const saldo = screen.getByTestId('saldo')
        expect(saldo).toHaveTextContent('R$ 500')
    })
})