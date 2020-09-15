class Zebra {

  static get inputProperties() {
    return [
      '--zebraColor',
    ];
  }

  count = 0;
  zebraColor = '#4BB066';
  zebraSize = 4;
  zebraPetals = 6;
  zebraAmount = 20;

  paint(ctx, geom, properties) {
    this.zebraColor = properties.get('--zebraColor');
    this.draw(ctx, geom);
  }

  draw(ctx, geom) {
    console.log('begin');
    var gap = 5;
    ctx.strokeStyle = this.zebraColor;
    ctx.fillStyle = this.zebraColor;
    for(var pen=0;pen<geom.width; pen++){
      ctx.fillRect(pen, 0, 30, geom.height);
      pen=pen+60;
    }
  }
}

registerPaint('zebra', Zebra);