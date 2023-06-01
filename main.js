class GameOfLife{
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.init = Array.from({ length: this.height }, () => Array.from({length: this.width}));
        this.future = Array.from({ length: this.height }, () => Array.from({length: this.width}));
    }

    generator(){
        for (let h = 0; h < this.height; h++){
            for (let w = 0; w < this.width; w++){
                if (Math.floor(Math.random()*4) == 3){
                    this.init[h][w] = 1;
                }
                else{
                    this.init[h][w] = 0;
                }

            }
        }
    }

    neighbors(height, width) {
        console.log(this.init[2][4])
        let cellsAround = 0;
        for (let h = -1; h <= 1; h++) {
          for (let w = -1; w <= 1; w++) {
            const a = height + h;
            const b = width + w;
            if (
                (h !== 0 || w !== 0) && 
                a >= 0 && b >= 0 && a < this.height && b < this.width &&
                this.init[a][b] === 1
              ) {
              cellsAround += 1;
            }
          }
        }
        return cellsAround;
    }   

    nextGeneration(){

    }
    gameRules(){
    }
}

const test = new GameOfLife(4, 8);
test.generator();
console.table(test.init);
console.log(test.neighbors(2,4))