import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  constructor(numero: string, private limite: number) {
    super(numero);
  }

  transferir(contaDestino: Conta, valor: number): void {
    if (this.calcularSaldo() >= valor) {
      this.sacar(valor);
      contaDestino.depositar(valor);
    } else {
      console.log("Saldo insuficiente para transferir.");
    }
  }

  calcularSaldo(): number {
    const totalCreditos = this.creditos.reduce((sum, credito) => sum + credito.getValor(), 0);
    const totalDebitos = this.debitos.reduce((sum, debito) => sum + debito.getValor(), 0);
    return (totalCreditos - totalDebitos) + this.limite;
  }
}
