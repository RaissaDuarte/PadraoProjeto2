import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { Remedio } from './remedio';
import { Eletronico } from './eletronico';
import { Roupa } from './roupa';

export class TaxasEU implements TaxVisitorProtocol {
  calculaTaxaRoupa(roupa: Roupa): number {
    return roupa.getPreco() + roupa.getPreco()* 0.8;
  }
  calculaTaxaEletronico(eletronico: Eletronico): number {
    return eletronico.getPreco() + eletronico.getPreco()* 1.3;
  }
  calculaTaxaRemedio(remedio: Remedio): number {
    return remedio.getPreco() + remedio.getPreco()* 1;
  }
}
