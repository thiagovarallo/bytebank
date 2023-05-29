import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "./index"
import { type } from "@testing-library/user-event/dist/type";

test('Renderizar um campo do input', () => {
    render(<Formulario />);
    const campoText = screen.getByPlaceholderText('Digite um valor');
    expect(campoText).toBeInTheDocument();
})

test('Renderizar um campo do tipo number', () => {
    render(<Formulario />)
    const campotype = screen.getByPlaceholderText('Digite um valor');
    expect(campotype).toHaveAttribute('type', 'number')
})

test('Preencher um campo de input', () => {
    render(<Formulario />)
    const campotypeNumber = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campotypeNumber, '50');
    expect(campotypeNumber).toHaveValue(50)
})