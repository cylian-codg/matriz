
var weight = [35,38,42,45,43,34,36,41,48,32];

function escreverMatriz(){
  for(var i = 0; i<weight.length; i++){
    console.log(weight[i])
  }
}
function setup() {
  createCanvas(400,400);
  escreverMatriz()
  
  console.log("length: "+ weight.length)
}

function draw() 
{
  background(30);
}

 

