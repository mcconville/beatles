class Grid {

    static get inputProperties() {
      return [
        '--scribbleColor',
        '--scribbleWobble',
        '--scribbleWidth'
      ];
    }
  
    count = 0;
    scribbleColor = '#4BB066';
    scribbleWobble = 4;
  
    paint(ctx, geom, properties) {
      this.scribbleColor = properties.get('--scribbleColor');
      this.scribbleWobble = parseFloat(properties.get('--scribbleWobble').toString());
      this.scribbleWidth = parseFloat(properties.get('--scribbleWidth').toString());
      this.draw(ctx, geom);
    }
  
    drawSquiggleDown(context, startx, starty, endx, endy) {
      context.beginPath();
      context.strokeStyle = this.scribbleColor;
      context.lineWidth = 1;
      context.lineCap = 'round';
  
      context.moveTo(startx, starty);
  
      console.log('got to here');
  
      for (var increment = 0; increment < endy; increment = increment + 8) {
        var wobble = Math.floor(Math.random() * this.scribbleWobble) + 1;
        context.lineTo(startx + wobble, starty + increment);
      }
  
      context.stroke();
    }
  
    drawSquiggleAcross(context, startx, starty, endx, endy) {
      context.beginPath();
      context.strokeStyle = this.scribbleColor;
      context.lineWidth = this.scribbleWidth;
      context.lineCap = 'round';
  
      context.moveTo(startx, starty);
  
      for (var increment = 0; increment < endx; increment = increment + 8) {
        var wobble = Math.floor(Math.random() * 4) + 1;
        context.lineTo(startx + increment, starty + wobble);
      }
  
      context.stroke();
    }
  
    draw(context, geom) {
  
        var starty = 0;
        var startx = 0;

        var width = geom.width;
        var height = geom.height;
    
        context.beginPath();
        context.strokeStyle = "#EDF1FE";
        context.lineWidth = 4;
        context.lineCap = 'round';
    
        var squaresize = 30;
    
        // lines across
    
        for (var increment = 0; increment < width; increment = increment + squaresize) {
            context.moveTo(startx + increment, starty);
            context.lineTo(startx + increment, height);
            console.log('drawing');
            context.stroke();
        }
    
    
        for (var increment = 0; increment < height; increment = increment + squaresize) {
    
            context.moveTo(startx, starty + increment);
            context.lineTo(width, starty + increment);
            context.stroke();
    
            for (var increment2 = 0; increment2 < width; increment2 = increment2 + squaresize) {
    
                context.beginPath();
                context.arc(startx + (squaresize / 2) + increment2, starty + increment + squaresize, squaresize / 4, 0, Math.PI, true);
                context.closePath();
                context.lineWidth = 0;
                context.fillStyle = '#EDF1FE';
                context.fill();
    
                context.beginPath();
                context.arc(startx + (squaresize / 2) + increment2, starty + increment - (squaresize / 2) + squaresize, squaresize / 8, 0, 2 * Math.PI, true);
                context.closePath();
                context.lineWidth = 0;
                context.fillStyle = '#EDF1FE';
                context.fill();
            }
        }


    }
  }
  
  registerPaint('grid', Grid);

