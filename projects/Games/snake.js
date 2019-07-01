//requires a set up and a draw function
function setup() {
    //create a canvas function for the game aka the dimension of the game
    createCanvas(600, 600);

    
}

function draw() {
    background(51);
}

//create a snake object
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    
}