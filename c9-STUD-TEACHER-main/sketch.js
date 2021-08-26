

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the first variable: ');

function setup(){
  var swapbutton = createButton("click here to Swap");
  swapbutton.mousepressed(swap)

  }


function draw()
{
}
function swap ()
{ 

  [a,b]=[b,a]
  console.log("The 1st number after swapping "+a);
  console.log("The 1st number after swapping "+b);

}