import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { Remedio } from './remedio';
import { Eletronico } from './eletronico';
import { Roupa } from './roupa';

export class TaxasBrasil implements TaxVisitorProtocol {
  calculaTaxaRoupa(roupa: Roupa): number {
    return roupa.getPreco() + roupa.getPreco() * 0.03;
  }

  calculaTaxaEletronico(eletronico: Eletronico): number {
    return eletronico.getPreco() + eletronico.getPreco() * 2;
  }

  calculaTaxaRemedio(remedio: Remedio): number {
    return remedio.getPreco() + remedio.getPreco() * 0.7;
  }
}
