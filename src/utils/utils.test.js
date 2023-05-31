import { calculaNovoSaldo } from "."

describe('test de transações,', () => {
    
    test('deposito', () => {
        const transacao = {
            transacao : "Depósito",
            valor : 50
        }

        const novoSaldo = calculaNovoSaldo(transacao, 100)
        expect(novoSaldo).toBe(150)
    })
    test('transferência', () => {
        const transacao = {
            transacao : "Transferência",
            valor : 50
        }

        const novoSaldo = calculaNovoSaldo(transacao, 100);
        expect(novoSaldo).toBe(50)
    })
})


test('Deve retornar o valor do saldo utilizado com o rendimento', () => {
    const saldoRendimento = jest.fn(saldo => saldo + saldo*0.005)

    const saldo = 100

    const newSaldo = saldoRendimento(saldo)

    expect(newSaldo).toBe(100.5)
    expect(saldoRendimento).toBeCalled()
    expect(saldoRendimento).toBeCalledWith(saldo)
})