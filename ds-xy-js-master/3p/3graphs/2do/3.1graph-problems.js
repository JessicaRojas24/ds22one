/** INSTRUCTIONS
 * 
 * implement a method, function, non-function solution
 * 
 * PROBLEM 
 *
 * select one implementation af a graph from books (pdfs):
 * mcm14
 * gro14  
 *
 * write it and make sure it runs
 */
let tree = [
  [0, 1, 0, 0], //1
  [1, 0, 1, 1], //2
  [0, 1, 0, 0], //3
  [0, 1, 0, 0], //4
];

class Matriz {
  constructor(matriz) {
    this.matriz = matriz;
  }

  isSquare(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      let evaluar;
      evaluar = matriz[i].length;

      if (evaluar != matriz.length) {
        return false;
      }
    }
    return true;
  }

  isSymmetrical(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] != matriz[j][i]) {
          return false;
        }
      }
    }
    return true;
  }

  isTree(matriz) {
    let sum = 0;
    let contador = 0;
    let columnas = 0;

    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        contador++;
        columnas = contador / matriz.length;
      }
    }

    for (let i = 1; i < matriz.length; i++) {
      sum = 0;
      for (let j = 0; j < columnas; j++) {
        if (j < i) {
          sum += matriz[i][j];
          if (sum > 1) {
            return false;
          }
        }
      }
    }
    return true;
  }

  isGraph(matriz) {
    if (matriz.isTree(matriz) == false) {
      return true;
    } else {
      return false;
    }
  }
}

let matriz = new Matriz(tree);

console.log(matriz.isSquare(matriz));
console.log(matriz.isSymmetrical(matriz));
console.log(matriz.isTree(matriz));
console.log(matriz.isGraph(matriz));
