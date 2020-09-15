class Flower {

  static get inputProperties() {
    return [
      '--flowerColor',
      '--flowerPetals',
      '--flowerSize',
      '--flowerAmount'
    ];
  }

  count = 0;
  flowerColor = 'random';
  flowerSize = 4;
  flowerPetals = 6;
  flowerAmount = 20;

  beatlesColors = ["#55C6A9", "#00758F", "#FA7A35", "CD212A" ];

  paint(ctx, geom, properties) {
    this.flowerColor = properties.get('--flowerColor');
    this.flowerSize = parseFloat(properties.get('--flowerSize').toString());
    this.flowerPetals = parseFloat(properties.get('--flowerPetals').toString());
    this.flowerAmount = parseFloat(properties.get('--flowerAmount').toString());
    this.draw(ctx, geom);
  }

  createPetal(length, width) {

    const path = new Path2D();
    // draw outer line
    path.moveTo(0, 0);
    path.lineTo(length * 0.3, -width);
    path.lineTo(length * 0.8, -width);
    path.lineTo(length, 0);
    path.lineTo(length * 0.8, width);
    path.lineTo(length * 0.3, width);
    // close the path so that it goes back to start
    path.closePath();

    // create the line down the middle.
    path.moveTo(0, 0);
    path.lineTo(length, 0);

    return path;
  }

  drawPetals(ctx, x, y, count, startAt, petal) {
    const step = (Math.PI * 2) / count;
    ctx.setTransform(1, 0, 0, 1, x, y); // set center
    ctx.rotate(startAt); // set start angle
    for (var i = 0; i < count; i += 1) {
      ctx.stroke(petal); // draw a petal
      ctx.rotate(step); // rotate to the next
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0); // restore default
  }

  drawFlower(ctx, x, y) {

    console.log(this.flowerColor);

    var newcolor;

    if( this.flowerColor == 'random' ){
      var index = Math.floor(Math.random() * 3);
      newcolor  = this.beatlesColors[index];
      console.log(this.flowerColor);
    }else{
      newcolor = this.flowerColor;
    }

    ctx.strokeStyle = newcolor;
    ctx.lineWidth = 1;
    const size = this.flowerSize; 
    this.drawPetals(ctx, x, y, this.flowerPetals, 0, this.createPetal(size, size * 0.2));
    ctx.beginPath();
    ctx.fillStyle = newcolor;
    ctx.fill();
  }

  draw(ctx, geom) {

    console.log(this.flowerAmount)
    for (var i = 0; i < this.flowerAmount; i++) {
      var x = Math.floor(Math.random() * geom.width);
      var y = Math.floor(Math.random() * geom.height);
      this.drawFlower(ctx, x, y)
    }
  }
}

registerPaint('flower', Flower);