import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  constructor(numero: string) {
    super(numero);
  }

  calcularSaldo(): number {
    const totalCreditos = this.creditos.reduce((sum, credito) => sum + credito.getValor(), 0);
    const totalDebitos = this.debitos.reduce((sum, debito) => sum + debito.getValor(), 0);
    return totalCreditos - totalDebitos;
  }
}
