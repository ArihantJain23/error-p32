const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;



function preload() {
    getbackgroundimage();
}



function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
 if(backgroundImage){

    
    background(backgroundImage);
    }
    // add condition to check if any background image is there to add
   // if(backgroundImage){
      //  background(backgroundImage);
       // }                                               


    Engine.update(engine);

    // write code to display time in correct format here


}



    
    async function getbackgroundimage(){
        var response=await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')  
        var responseJson=await response.json()
      console.log(ResponseJson.datetime)
      var hour=responseJson.datetime.slice(11,13)
      if(hour>=06 && hour<=19){
          bg='sprites/sunrise1.png'
      }
      else{
          bg='sprites/sunset12.png'
      }
      backgroundImage=loadImage(bg);
    }
