class Scribble {

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

    console.log('paint');

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

  draw(ctx, geom) {

    console.log('DRAW');

    var starty = 0;
    var startx = 0;

    for (var increment = 0; increment < geom.width; increment = increment + 6) {
      this.drawSquiggleDown(ctx, startx + increment, starty, geom.width, geom.height);
    }

    for (var increment = 0; increment < geom.height; increment = increment + 6) {
      this.drawSquiggleAcross(ctx, startx, starty + increment, geom.width, geom.height);
    }
  }
}

registerPaint('scribble', Scribble);