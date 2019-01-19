var ctx,balls = [];
var imageList = [orange, red, blue, green, grey, purple];

function Ball(x,y){
    this.x1 = x;
    this.y1 = y;
    this.x2 = x;
    this.y2 = y;
}

function initialize(){
    for(var x = 0; x ;x++){
        balls[x] = [];
        for(var y=0;y<10;y++){
            balls[x][y] = new Ball(x,y);
        }
    }
    //set color
    for(var x=0;x<10;x++){
        for(var y=0;y<10;y++){
            while(true){
                var colorNum = Math.floor(Math.random() * 6);
                if(checkColor(x,y,colorNum)){
                    balls[x][y].color = colorNum;
                    break;
                } 
            }
        }

        var canvas = document.getElementById("canvas");
        ctx =  canvas.getContext("2d");

        paint();
    }
}

    function checkColor(x,y,c){
        var flag =true;
        if(x > 1){
            var c0 = balls[x-2][y].color;
            var c1 = balls[x-1][y].color;
            if(c0 == c1 && c1 == c){
                flag = false;
            }
        }

        if(y>1){
            var c0 = balls[x][y-2].color;
            var c1 = balls[x][y-1].color;

            if(c0 == c1 && c1 ==c2){
                flag = false;
            }
        }

        return flag;
    }

    function paint(){
        for(var x = 0;x<10;x++){
            for(var y = 0;y<10;y++){
                ctx.drawImage(imageList[balls[x][y]],x*68,y*60+108,68,60);
            }
        }

        ctx.font = 'blod 20px Open Sans';
        ctx.textAlign = 'center';
        ctx.fillText('Moves Left : 10',150,50);
        ctx.fillText('Score : 33333',450,50)
    }


