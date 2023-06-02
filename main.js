class GameOfLife {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.init = Array.from({ length: this.height }, () =>
      Array.from({ length: this.width })
    );
    this.future = Array.from({ length: this.height }, () =>
      Array.from({ length: this.width })
    );
    this.isAlive = true;
  }

  generator() {
    for (let h = 0; h < this.height; h++) {
      for (let w = 0; w < this.width; w++) {
        if (Math.floor(Math.random() * 4) == 3) {
          this.init[h][w] = 1;
        } else {
          this.init[h][w] = 0;
        }
      }
    }
  }

  neighbours(height, width) {
    let cellsAround = 0;
    for (let h = -1; h <= 1; h++) {
      for (let w = -1; w <= 1; w++) {
        const a = height + h;
        const b = width + w;
        if (
          (h !== 0 || w !== 0) &&
          a >= 0 &&
          b >= 0 &&
          a < this.height &&
          b < this.width &&
          this.init[a][b] === 1
        ) {
          cellsAround += 1;
        }
      }
    }
    return cellsAround;
  }

  playGame() {
    let counter = 0;
    while (this.isAlive) {
        console.log(`Generacion ${counter} ^^^`);
        this.nextGeneration();
        counter++;
        if (counter > 10){
            break;
        }
    }

  }

  // grid = newGrid;
  // let sum = grid
  // 	.map((fila) => fila.reduce((acumulador, valor) => acumulador + valor, 0))
  // 	.reduce((acumulador, valor) => acumulador + valor, 0);

  // if (sum === 0) {
  // 	console.log("Suma igual a 0")
  // 	isAlive = false;
  // }
  // lastSum = sum;

  nextGeneration() {
    let sum = this.init
      .map((fila) => fila.reduce((acumulador, valor) => acumulador + valor, 0))
      .reduce((acumulador, valor) => acumulador + valor, 0);

    if(sum == 0){
        this.isAlive = false;
    }
    for (let h = 0; h < this.height; h++) {
      for (let w = 0; w < this.width; w++) {
        this.gameRules(h, w, this.neighbours(h, w));
      }
    }
    console.table(this.future);
    this.init = this.future;
    this.future = Array.from({ length: this.height }, () =>
      Array.from({ length: this.width })
    );
  }
  gameRules(height, width, neighbors) {
    this.future[height][width] =
      this.init[height][width] === 1 && neighbors < 2
        ? 0
        : this.init[height][width] === 1 && neighbors > 3
        ? 0
        : this.init[height][width] === 0 && neighbors === 3
        ? 1
        : this.init[height][width];
  }
}

const test = new GameOfLife(4, 8);

test.generator();

console.table(test.init);

test.playGame();
