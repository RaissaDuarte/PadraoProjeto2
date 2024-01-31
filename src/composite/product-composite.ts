import { ProductProtocol } from "../decorator/product/product-protocol";

// Component
export abstract class ProductComponent {
  abstract getpreco(): number;
  abstract getNome(): string;
  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

// Leaf
//aqui é somente o produto em si, sem os filhos
export class ProductLeaf extends ProductComponent {
  constructor(public nome: string, public preco: number) {
    super();
  }

  getpreco(): number {
    return this.preco;
  }

  getNome(): string {
    return this.nome;
  }
}

// Composite
//aqui vai somar o preço de todos os seus filhos
export class ProductComposite extends ProductComponent implements ProductProtocol {
  
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getpreco(): number {
    return this.children.reduce((sum, child) => sum + child.getpreco(), 0);
  }

  getNome(): string {
    return this.children.map((child) => child.getNome()).join(', ');
  }

}

