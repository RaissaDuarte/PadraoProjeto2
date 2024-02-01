import { ProductLeaf, ProductComposite } from './composite/product-composite'; 
import {EmailValidatorProtocol} from './adapter/validation/email-validator-protocol';
import { EmailValidatorAdapter } from './adapter/validation/email-validator-adapter';
import { ProductUsed } from './decorator/product/product-used';
import { ShoppingOrder } from './state/shopping-order/shopping-order';
import { Eletronico } from './visitor/eletronico';
import { Remedio } from './visitor/remedio';
import { Roupa } from './visitor/roupa';
import { TaxasBrasil } from './visitor/taxasBrasil';
import { TaxasEU } from './visitor/taxasEU';


//criação objs
const carregador = new ProductLeaf('Carregador', 150);
const smartphone = new ProductLeaf('Smartphone', 2000);
const fone = new ProductLeaf('Fone de ouvido', 40);
const manual = new ProductLeaf('Manual de Usuário', 8);

const tablet = new Eletronico(550);
const dorflex = new Remedio(10);
const camiseta = new Roupa(160);




//composite
//criar objetos que contem outros acessorios inclusos junto 
console.log('---------------Composite---------------')
const celular = new ProductComposite();
celular.add(carregador, smartphone, fone, manual);

console.log(celular.getNome());
console.log("preço total:"+ celular.getpreco() + ',00');
console.log();

//decorator
console.log('---------------Decorator---------------')
const celularUsado = new ProductUsed(celular);
console.log(celularUsado.getNome() );
console.log('Preço total do usado: '+ celularUsado.getpreco() + ',00');
console.log();


//visitor
console.log('---------------Visitor---------------')

const taxasBrasil = new TaxasBrasil();
const taxasEU = new TaxasEU();
const pedidoVisitor = [tablet, dorflex, camiseta];
const total = pedidoVisitor.reduce((sum, item) => item.getPreco() + sum, 0);
const totalTaxasBrasil = pedidoVisitor.reduce((sum, item) => item.getPrecoComTaxa(taxasBrasil) + sum,0,);
const totalTaxasEU = pedidoVisitor.reduce((sum, item) => item.getPrecoComTaxa(taxasEU) + sum,0,);
console.log('Total do pedido com taxas do brasil: ' + totalTaxasBrasil);
console.log('Total do pedido com taxas da europa: ' + totalTaxasEU);
console.log('Total do pedido sem taxas: ' + total);
console.log();


//adapter
console.log('---------------adapter---------------')
function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido');
  } else {
    console.log('Email é inválido');
  }
}

const email = 'raissaduarte@gmail.com';
validaEmailClass(new EmailValidatorAdapter(), email);
const email2 = 'arthurespindola@gmailcom';
validaEmailClass(new EmailValidatorAdapter(), email2);
console.log();


console.log('---------------state---------------');
const pedido = new ShoppingOrder();
pedido.approvePayment(); //vai pro aprovado 
console.log('Envia pedido: ');
pedido.shipOrder();

pedido.waitPayment(); //pedido fica com pagamento pendente 
console.log('Envia pedido: ');
pedido.shipOrder();

pedido.rejectPayment(); //pagamento rejeitado 
console.log('Envia pedido: ');
pedido.shipOrder();

