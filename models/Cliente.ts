import { Pessoa } from "./Pessoa";
import { Endereco } from "./Endereco";
import { Conta } from "./Conta";
import { ContaCorrente } from "./ContaCorrente";

export class Cliente extends Pessoa {
  private enderecos: Endereco[] = [];
  constructor(cpf: string,nome: string,telefone: string,public vip: boolean, private contas: Conta[]) {
    super(cpf, nome, telefone);
  }

  adicionarEndereco(endereco: Endereco): void {
    this.enderecos.push(endereco);
  }

  listarEnderecos(): void {
    console.log("Endereços do cliente: ");
    this.enderecos.forEach((endereco, index) => {
      console.log(`${index + 1}: ${endereco}`);
    });
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }
  listarContas(): Conta[] {
    return this.contas;
  }
}
