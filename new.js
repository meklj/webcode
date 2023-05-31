let img; // Declare variable 'img'.
function setup() 
{
  createCanvas(720, 400);
  img = loadImage("http://rvj6py0on.hd-bkt.clouddn.com/NewImage/9.jpg","jpg"); // Load the image
}

function draw() 
{
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0,width,height);
  // Displays the image at point (0, height/2) at half size
  // image(img, 0, height / 2, img.width / 2, img.height / 2);
}
