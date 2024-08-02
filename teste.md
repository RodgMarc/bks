# Definicoes typescript


# Variaveis

Variaveis são definidas com o prefixo var, let ou const. O valor de uma variável pode ser alterado durante a execução do programa.

```typescript
var a = 10;
let b = 20;
const c = 30;
```

# Tipos de Dados

Os tipos de dados em TypeScript são semelhantes aos do JavaScript, mas com algumas adições.

```typescript
let a: number = 10;
let b: string = "Hello";
let c: boolean = true;
let d: any = 10;

let e: number[] = [1, 2, 3];
let f: Array<number> = [1, 2, 3];
```

# Classes

Classes sao definidas com a palavra-chave class. Os membros da classe são definidos dentro de chaves.

```typescript
class Car {
    model: string;
    doors: number;

    constructor(model: string, doors: number) {
        this.model = model;
        this.doors = doors;
    }

    display(): void {
        console.log(this.model);
        console.log(this.doors);
    }
}

```



funcao 
essa funcao cria um novo usuario o parametro de entrada é um objeto do tipo User 
e o retorno nao e determinado 

```
  create(createUserDto: User) {
    return 'This action adds a new user';
  }```

## Construtor

O construtor é um método especial que é chamado quando um objeto é criado a partir de uma classe. Ele é usado para inicializar os membros da classe.

```typescript
class Car {
    model: string;
    doors: number;

    constructor(model: string, doors: number) {
        this.model = model;
        this.doors = doors;
    }
}
```