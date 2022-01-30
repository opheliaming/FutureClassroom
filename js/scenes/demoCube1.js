let DemoCube1 = function() {

  this.init = (model) => {
    this.start = true;
    this.name = "experiment";
    this.model = model;
    this.model.move(0,1.5,0).scale(0.3);

    this.donut1 = this.model.add('donut').color(1,1,1).texture('media/textures/pink_doughnut.jpeg');
    this.donut2 = this.model.add('donut').color(1,1,1).texture('media/textures/pink_doughnut.jpeg');
    this.donut3 = this.model.add('donut').color(1,1,1).texture('media/textures/pink_doughnut.jpeg');
    this.donut4 = this.model.add('donut').color(1,1,1).texture('media/textures/pink_doughnut.jpeg');

    for (let i = 0; i<3; i++)
    {
      this.cube1 = this.model.add('cube').color(1,1,1).texture('media/textures/ice.png');
      this.cube1.move(-6, -4 + 2*i,-11);
    }

    this.cube2 = this.model.add('cube').color(1,1,1).texture('media/textures/ice.png');
    this.cube2.move(-4, -2,-11);

    for (let i = 0; i<3; i++)
    {
      this.cube1 = this.model.add('cube').color(1,1,1).texture('media/textures/ice.png');
      this.cube1.move(-2, -4 + 2*i,-11);
    }

    for (let i = 0; i<2; i++)
    {
      this.cube1 = this.model.add('cube').color(1,1,1).texture('media/textures/ice.png');
      this.cube1.move(2, -4 + 2*i,-11);
    }

    this.ball = this.model.add('sphere').color(1,1,1).texture('media/textures/ice.png');
    this.ball1 = this.model.add('cube').color(1,1,1).texture('media/textures/green.png');
    this.ball2 = this.model.add('cube').color(1,1,1).texture('media/textures/green.png');

    for (let i = 0; i<6; i++)
    {
      this.cube1 = this.model.add('cube').color(1,1,1).texture('media/textures/green.png');
      this.cube1.move(-6,  -1+ 0.25*i,-1).scale(0.25);
    }

    for (let i = 0; i<6; i++)
    {
      this.cube1 = this.model.add('cube').color(1,1,1).texture('media/textures/green.png');
      this.cube1.move(-6, -1+ 0.25*i,-4).scale(0.25);
    }

    for (let i = 0; i<12; i++)
    {
      this.cube1 = this.model.add('cube').color(1,1,1).texture('media/textures/green.png');
      this.cube1.move(-6, -1,-1 - i*0.25).scale(0.25);
    }
  }

  this.display = () => {
    this.model.animate(() => {
      this.donut1.identity().turnX(0.7 * this.model.time)
      this.donut2.identity().move(1,0,0).turnX(-0.7 * this.model.time);
      this.donut3.identity().move(0.5,0.8,0.5).turnY(-0.7 * this.model.time);
      this.donut4.identity().move(0.5,-0.8,0.5).turnY(0.7 * this.model.time);
      this.ball.identity().move(2, 1,-11).turnY(0.7 * this.model.time);
      this.ball1.identity().move(-6, 2,-1).scale(0.5).turnZ(0.7 * this.model.time).turnX(0.7 * this.model.time);
      this.ball2.identity().move(-6, 2,-4).scale(0.5).turnX(-0.7 * this.model.time).turnZ(0.7 * this.model.time);
    });
  }
}



export let demoCube1
  = new DemoCube1();