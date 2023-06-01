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

  nextGeneration() {    for (let h = 0; h < this.height; h++) {
    for (let w = 0; w < this.width; w++) {
      this.gameRules(h, w, this.neighbours(h, w));
    }
  }
  }
  gameRules(height, width, neighbors) {
    this.future[height][width] = this.init[height][width] === 1 && neighbors < 2
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

console.log("Primera generacion:");
console.table(test.init);


test.nextGeneration();


console.log("Segunda generacion:");
console.table(test.future);
