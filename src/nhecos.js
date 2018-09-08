class Nhecos {
  constructor(element) {
    this.canvas = window.document.createElement('canvas');
    this.image = window.Image;
    this.ctx = this.canvas.getContext('2d');
    this.element = element;
    this.width = 0;
    this.height = 0;
    this.nhecosWidth = 0;
    this.nhecosHeight = 0;

    return this.initialise().then(function (result) {
      return result;
    })

  }

  initialise() {

    const getImage = path => new Promise(resolve => {
      let img = new Image();
      img.onload = () => {
        this.width = img.naturalWidth;
        this.height = img.naturalHeight;
        resolve(img)
      };

      img.src = path;
      img.crossOrigin = "Anonymous";

    });

    const getNhecos = path => new Promise(resolve => {
      let img = new Image();
      img.onload = () => {
        this.nhecosWidth = img.naturalWidth;
        this.nhecosHeight = img.naturalHeight;
        resolve(img)
      };

      img.src = path;

    });

    return getImage(this.element).then((img) => {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx.width = this.width;
      this.ctx.height = this.height;

      this.ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      this.ctx.clearRect(0, 0, this.width, this.height);

      this.ctx.drawImage(img, 0, 0, this.width, this.height);

      let nhecos = this.getNhecosImage();

      return getNhecos(nhecos).then((img) => {

        let hRatio = this.canvas.width / img.width;
        let vRatio = this.canvas.height / img.height;
        let ratio = Math.min(hRatio, vRatio);

        this.ctx.save();
        this.ctx.rotate((Math.floor(Math.random() * 15) + 1) * Math.PI / 180);

        this.ctx.drawImage(img, (this.canvas.width / (Math.floor(Math.random() * 3) + 1)) - ((img.width * ratio) / 2), 0, img.width * ratio, img.height * ratio);

        this.ctx.restore();

        return this.canvas.toDataURL('image/png', 1.0);
      });

    });
  }

  getNhecosImage() {

  }

}