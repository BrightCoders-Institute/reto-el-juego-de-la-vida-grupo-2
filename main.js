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

    neighbour(){

    }
    nextGeneration(){

    }
    gameRules(){
    }
}

const test = new GameOfLife(4, 8);

test.generator()
console.log(test.init);


