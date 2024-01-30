import {EmailValidatorProtocol} from './validation/email-validator-protocol';
import { EmailValidatorAdapter } from './validation/email-validator-adapter';

function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido');
  } else {
    console.log('Email é inválido');
  }
}

const email = 'luizomf@gmail.com';
validaEmailClass(new EmailValidatorAdapter(), email);