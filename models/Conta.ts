import { Debito } from "./Debito";
import { Credito } from "./Credito";

export abstract class Conta {
  protected debitos: Debito[] = [];
  protected creditos: Credito[] = [];

  constructor(public numero: string) {}

  depositar(valor: number): void {
    const credito = new Credito(valor, new Date());
    this.creditos.push(credito);
  }

  sacar(valor: number): void {
    const debito = new Debito(valor, new Date());
    this.debitos.push(debito);
  }

  abstract calcularSaldo(): number;
}
