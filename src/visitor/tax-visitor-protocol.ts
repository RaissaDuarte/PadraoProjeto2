import { Roupa } from './roupa';
import { Eletronico } from './eletronico';
import { Remedio } from './remedio';

export interface TaxVisitorProtocol {
  calculaTaxaRoupa(roupa: Roupa): number;
  calculaTaxaEletronico(eletronico: Eletronico): number;
  calculaTaxaRemedio(remedio: Remedio): number;
}
