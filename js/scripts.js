//back-end
function System(){
  this.grid = [];
  this.coords = [0,0];
  this.gridSize = 3;
  //need to initialize data mambers for
  //audio context and oscillator node



}

System.prototype.playSound = function(){

}

System.prototype.generateArray = function(){
  for (var i = 0; i < this.gridSize; i++){
    this.grid.push([]);
    for (var n = 0; n < this.gridSize; n++){
      this.grid[i].push(`-`);
    }
  }
  console.log(this.grid);
}

System.prototype.updateCoords = function(x,y){
  if(x === -1 && this.coords[0] > 0){
    this.coords[0] += x;
  } else if(y === -1 && this.coords[1] > 0) {
    this.coords[1] += y;
  } else if(x === 1 && this.coords[0] < (this.gridSize-1)) {
    this.coords[0] += x;
  } else if(y === 1 && this.coords[1] < (this.gridSize-1)) {
    this.coords[1] += y;
  }
}

System.prototype.updateGrid = function(){
  console.log(`x: ${this.coords[0]}y: ${this.coords[1]}`);
  for (var i = 0; i < this.gridSize; i++){
    for (var n = 0; n < this.gridSize; n++){
      this.grid[i][n] = "-";
    }
  }

  this.grid[this.coords[0]][this.coords[1]] = "X"

  console.log(`[${this.grid[0][0]},${this.grid[1][0]},${this.grid[2][0]}]`);
  console.log(`[${this.grid[0][1]},${this.grid[1][1]},${this.grid[2][1]}]`);
  console.log(`[${this.grid[0][2]},${this.grid[1][2]},${this.grid[2][2]}]`);
}


//front-end
var generateDomGrid = function(){
  for (var i = 0; i < 3; i++){
    $(".container").append(`<div class="grid-row" id="row-${i}"></div>`);
    for (var n = 0; n < 3; n++) {
        $(`#row-${i}`).append(`<div class="grid-space" id="${i}${n}"></div>`);
    }
  }
}

var updateDomGrid = function(){
  
}

$(document).ready(function(){
  //new is apparently a bad way of initializing objects
  var newSystem = new System();

  newSystem.generateArray();
  generateDomGrid();

  $(document).keydown(function(event){
    var keyCode = event.keyCode;
    //left: 37 right: 39 up: 38 down: 40
    if(keyCode === 37){
      newSystem.updateCoords(-1,0);
    } else if(keyCode === 39){
      newSystem.updateCoords(1,0);
    }else if(keyCode === 38){
      newSystem.updateCoords(0,-1);
    }else if(keyCode === 40){
      newSystem.updateCoords(0,1);
    }else{
      console.log(keyCode);
    }
    newSystem.updateGrid();
    updateDomGrid(newSystem.grid, newSystem.coords);
  });

});
