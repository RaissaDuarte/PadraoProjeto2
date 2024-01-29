import { ProductLeaf, ProductComposite } from './ProductComponents';  // Importa as classes necessárias do arquivo original



//composite
//criar objetos que contem outros acessorios inclusos junto 
const carregador = new ProductLeaf('Carregador', 150);
const smartphone = new ProductLeaf('Smartphone', 2000);
const fone = new ProductLeaf('Fone de ouvido', 40);
const manual = new ProductLeaf('Manual Usuário', 8);

const celular = new ProductComposite();
celular.add(carregador, smartphone, fone, manual);

console.log(celular);
console.log("preço total:" + celular.getPrice());
