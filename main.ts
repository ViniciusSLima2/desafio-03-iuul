import { Cliente } from "./models/Cliente";
import { Endereco } from "./models/Endereco";
import { Funcionario } from "./models/Funcionario";
import { ContaCorrente } from "./models/ContaCorrente";
import { ContaPoupanca } from "./models/ContaPoupanca";
import { Cargo } from "./models/Cargo";
import { CARGOS } from "./constants/cargos";



console.log("Aplicação 1")
const gerente = new Funcionario("111.222.333-45", "Jorge da Silva", "4002-8922", 3000, CARGOS.GERENTE)
const atendente = new Funcionario("111.222.333-66", "Julia Lima", "2222-3321", 2000, CARGOS.ATENDENTE)

//----------------

console.log("Aplicação 2");
const cliente2 = new Cliente("111.222.333-44", "João Silva", "77777-7777", true);
cliente2.adicionarEndereco(new Endereco("12345-678", "Rua A", "123", "Ap 1", "Cidade X", "RJ"));
cliente2.adicionarEndereco(new Endereco("23456-789", "Rua B", "456", "Casa", "Cidade Y", "SP"));
cliente2.adicionarEndereco(new Endereco("23451-789", "Rua C", "456", "Casa", "Cidade Z", "MG"));
cliente2.listarEnderecos();

//----------------

console.log("Aplicação 3");
const contaCorrente3 = new ContaCorrente("0001", 1000);
const cliente3 = new Cliente("111.222.333-44", "Jennifer Alves", "77777-7777", true);
cliente3.adicionarConta(contaCorrente3);
contaCorrente3.depositar(100);
contaCorrente3.depositar(100);
contaCorrente3.depositar(100);
contaCorrente3.sacar(50);
console.log("Saldo Conta Corrente:", contaCorrente3.calcularSaldo());

//----------------
console.log("Aplicação 4");
const contaCorrente41 = new ContaCorrente("0001", 1000);
const cliente41 = new Cliente("111.222.333-44", "João Silva", "77777-7777", true);
cliente41.adicionarConta(contaCorrente41);
contaCorrente41.depositar(1000);

const contaPoupanca42 = new ContaPoupanca("0002");
const cliente42 = new Cliente("111.222.333-44", "Lima Oscar", "77777-7777", true);
cliente42.adicionarConta(contaPoupanca42);
contaPoupanca42.depositar(1000)

contaCorrente41.transferir(contaPoupanca42, 500);

console.log("Saldo Conta Corrente:", contaCorrente41.calcularSaldo());
console.log("Saldo Conta Poupança:", contaPoupanca42.calcularSaldo());

//----------------

console.log("Aplicação 5");

const contaCorrente51 = new ContaCorrente("0001", 100);
const cliente51 = new Cliente("111.222.333-44", "João Silva", "77777-7777", true);
cliente51.adicionarConta(contaCorrente41);
contaCorrente51.depositar(300);

const contaCorrente52 = new ContaCorrente("0001", 100);
const cliente52 = new Cliente("111.222.333-44", "Luan Silva", "77777-7777", true);
cliente52.adicionarConta(contaCorrente41);
contaCorrente52.depositar(100);

contaCorrente51.transferir(contaCorrente52, 1000);
