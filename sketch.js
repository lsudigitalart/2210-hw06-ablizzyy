
let SBimg;
let randomPhrase;
let phrases;


function preload() {
  SBimg = loadImage('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdhZWVyaDR1cGpsNWg0bjM2ZWVlMzF4dzV3cWplZndpZjg0YnVvciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/141kXAUyJFoBEc/giphy.gif');
}

function setup() {


    phrases = [
        "Who lives in a pineapple under the sea?",
        "The Krusty Krab Pizza is the Pizza 4 You & Me!",
        "I'm a Goofy Goober, Yeah!",
        "Are you feeling it now Mr. Krabs?",
        "I'm ready! I'm ready!",
        "You don't need a license to drive a sandwich."
      ];
}

function draw() {
  createCanvas(800, 600);
  background(220);
 /* 
 for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(100, 200);
  }
*/
  image(SBimg, 0, 0, 800, 600)

  // Set the text style
  textSize(32);
  textAlign(LEFT);
  //fill(random(255), random(255), random(255));
  
  // Display the text in a random position
  if(frameCount % 60 == 0 ) {
    randomPhrase = random(phrases);
    print(randomPhrase)
  }

//  Print(randomPhrase)
  text(randomPhrase, 100, 100);

}
