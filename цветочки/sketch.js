var flowers;

function setup()
{
    createCanvas(1000,500);
    base_x = width/2;
    base_y = height - 50;

    flowers = [];
    
    for(var i = 0; i < 10; i++)
    {
        var flower = {
            base_x: i * 100,
            base_y: height - 50,
            stem_h: random(50,400),
            col: color(
                random(139, 0, 0), 
                random(0,255),
                random(0, 255)
            ),
            center_col: color(
                random(0,255), 
                random(255, 165, 0),
                random(0,255)
            )
        };
        flowers.push(flower);
    }
}

function draw()
{
    background(150,150,250);
    for(var i = 0; i < flowers.length; i++)
    {
        drawFlower(flowers[i]);
    }
}

function drawFlower(_flower)
{
    noFill();
    strokeWeight(10);
    stroke(0,200,50);
    curve(_flower.base_x + 200, _flower.base_y + 100, 
          _flower.base_x , _flower.base_y,
          _flower.base_x , _flower.base_y - _flower.stem_h,
          _flower.base_x - 200, _flower.base_y - (_flower.stem_h + 100))

    noStroke();
    fill(_flower.col);
    ellipse(_flower.base_x + 45, _flower.base_y - _flower.stem_h,70,50);
    ellipse(_flower.base_x - 45, _flower.base_y - _flower.stem_h,70,50);
    ellipse(_flower.base_x ,_flower.base_y + 45 - _flower.stem_h,50,70);
    ellipse(_flower.base_x ,_flower.base_y - 45 - _flower.stem_h,50,70);
    
    //flip the colour
    var r = red(_flower.col);
    var g = green(_flower.col);
    var b = blue(_flower.col);
    
    _flower.col = color(r, g, b);
    
    //draw the center
    fill(_flower.center_col);
    ellipse(_flower.base_x,_flower.base_y - _flower.stem_h,70,70); // Увеличен размер центрального кружка
}