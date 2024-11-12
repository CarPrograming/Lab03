class Car {
    constructor(carBrand, carModel,vehicleType,Carcolor,decade,scale,SKUCar,UPCCar,imgCar,packaging,price) {
      this.carBrand = carBrand;
      this.carModel = carModel;
      this.vehicleType = vehicleType;
      this.Carcolor = Carcolor;
      this.decade = decade;
      this.packaging = packaging;
      this.scale = scale;
      this.UPCCar=UPCCar;
      this.SKUCar=SKUCar;
      this.price=price;
      this.imgCar=imgCar;
    }

    ShowProducts(){

        const ImageToShow = document.createElement('img');
        let CarImage = this.imgCar;

        ImageToShow.setAttribute('src',CarImage);
        ImageToShow.setAttribute('alt', `${this.carBrand} ${this.carModel}`);
        const productImgContainer = document.getElementById('ProductImg');
        productImgContainer.appendChild(ImageToShow);

    }
   
  }

  const myCar = new Car("Ford",'Mustang #5 "L. John\'s Racing"',"Muscle Car","Blue","60s","1/24 Scale","30527-JADA-BLUE",
    "694365739073","Img/Mustang0.jpg","Window Box",19.99);

    myCar.ShowProducts();