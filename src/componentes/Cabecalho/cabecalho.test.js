import {render, screen} from "@testing-library/react";
import Cabecalho from "./index";

test("Deve ser renderizado o nome do usuário logado", () => {
    render(<Cabecalho />)
    const nomeUser = screen.getByText('Joana Fonseca Gomes')
    expect(nomeUser).toBeInTheDocument()
})