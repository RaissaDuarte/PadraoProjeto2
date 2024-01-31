import { ProductLeaf, ProductComposite } from './composite/product-composite'; 
import {EmailValidatorProtocol} from './adapter/validation/email-validator-protocol';
import { EmailValidatorAdapter } from './adapter/validation/email-validator-adapter';
import { ProductUsed } from './decorator/product/product-used';


//composite
//criar objetos que contem outros acessorios inclusos junto 
console.log('---------Composite----------')
const carregador = new ProductLeaf('Carregador', 150);
const smartphone = new ProductLeaf('Smartphone', 2000);
const fone = new ProductLeaf('Fone de ouvido', 40);
const manual = new ProductLeaf('Manual de Usuário', 8);

const celular = new ProductComposite();
celular.add(carregador, smartphone, fone, manual);

console.log(celular.getNome());
console.log("preço total:"+ celular.getpreco() + ',00');
console.log();

//decorator
console.log('-------Decorator----------')
const celularUsado = new ProductUsed(celular);
console.log(celularUsado.getNome() );
console.log('Preço total do usado: '+ celularUsado.getpreco() + ',00');
console.log();

//adapter
console.log('--------Validação de email:----------')
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


//pode fz se email for valido, emailenviado, se nao, emailrejaitado 
