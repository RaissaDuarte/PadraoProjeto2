// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

// Leaf
//aqui é somente o produto em si, sem os filhos
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
//aqui vai somar o preço de todos os seus filhos
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client
const pen = new ProductLeaf('Caneta', 1);
const smartphone = new ProductLeaf('Smartphone', 1_000);
const tShirt = new ProductLeaf('Camiseta', 40);

const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);


const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);

const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);



console.log(productBox);
console.log("preço total:" + productBox.getPrice());

//fazer emeplo do retaurante, criar comida, comida doce e salgada 
//depois cria bebida, sem e com alcool, e ai faz o preço final de tudo
