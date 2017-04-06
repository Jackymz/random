var namespace = "http://www.w3.org/2000/svg"





function createFirstScene(){
 makeCircle(100,55,45,"black")
 makeCircle(50,20,20,"black")
 makeCircle(150,20,20,"black")
 makeEllipse(115,50,20,30,"#FFE4C4")
 makeEllipse(85,50,20,30,"#FFE4C4")
 makeEllipse(100,75,50,25,"#FFE4C4")
 makeEllipse(100, 70, 15, 9,"black")
 makeEllipse(89, 43, 10, 16, "white")
 makeEllipse(110, 43, 10, 16, "white")
 makeEllipse(89, 51, 5, 8, "black")
 makeEllipse(110,51, 5, 8, "black")
 makeImage("http://images.clipartpanda.com/minnie-mouse-clip-art-clipminhead212.gif", 190, 30, 10, 10)

}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene(){
makeRect(65, 50, 80, 50, "#FAD6A5")
makeCircle(10, 10, 10, "yellow")
makeRect(60, 45, 50, 5, "#964B00")
makeRect(110, 45, 40, 5, "#964B00")
makeRect(67, 40, 80, 5, "#964B00")
makeRect(72, 35, 70, 5, "#964B00")
makeRect(77, 30, 60, 5, "#964B00")
makeRect(82, 25, 50, 5, "#964B00")
makeRect(87,20, 40, 5, "#964B00")
makeRect(92, 15, 30, 5,"#964B00")
makeEllipse(80, 65, 7 , 7, "yellow")
makeRect(73, 65, 14, 1, "#FFFDD0")
makeRect(80, 58, 1, 14, "#FFFDD0")
makeImage("https://img.clipartfest.com/33b7d636076333ba35580ad36e6f1d8e_electrode20clipart-transparent-door-clipart_999-829.png", 100, 48, 50, 70)




          


        
          
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
 makeImage("http://eskipaper.com/images/soccer-field-1.jpg", 10, 2, 120, 130)    
 makeImage("http://kindersay.com/files/images/soccer-ball.png", 60, 50, 5, 5)
 makeImage("http://s1.ticketm.net/img/tat/dbimages/79696a", 150, 50, 30, 30)
 makeRect(140, 30, 30, 20, "Blue", 1)
 makeText("GO FCB", 140, 35, 5, "Red")

}




// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
         
        
     
         
    // If the number is less than 0.33, call the function to create your first scene.
    var random= Math.random()
    if(random < 0.33){
        createFirstScene()
    }else if(random<0.67){
        createSecondScene()
    }else{
        createThirdScene()
    }
        
    
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    
    
    // Else, call the function to create your third scene.
    
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}