import { Pessoa } from "./Pessoa";
import { IUsuario } from "./IUsuario";
import { Cargo } from "./Cargo";

export class Funcionario extends Pessoa implements IUsuario {
  constructor(
    cpf: string,
    nome: string,
    telefone: string,
    public salario: number,
    public cargo: Cargo
  ) {
    super(cpf, nome, telefone);
  }

  autenticar(): boolean {
    return true;
  }
}
