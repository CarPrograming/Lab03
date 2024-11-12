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
        //create element in the index to set the img
        const ImageToShow = document.createElement('img');
        //saving the img source in a variable
        let CarImage = this.imgCar;

        //assign the src
        ImageToShow.setAttribute('src',CarImage);
        
        //gettin the container to set the image in it
        const productImgContainer = document.getElementById('ProductImg');

        //adding the img
        productImgContainer.appendChild(ImageToShow);


        //show all text on the html 
        //geting the id from my container to set information
        const productDetailsContainer = document.getElementById('ContainerProductDetails');

        //create the p tag for every value in our constructor
        const brandElement = document.createElement('p');
        brandElement.textContent = `Brand: ${this.carBrand}`;
        productDetailsContainer.appendChild(brandElement);

        const modelElement = document.createElement('p');
        modelElement.textContent = `Model: ${this.carModel}`;
        productDetailsContainer.appendChild(modelElement);

        const typeElement = document.createElement('p');
        typeElement.textContent = `Type of vehicle: ${this.vehicleType}`;
        productDetailsContainer.appendChild(typeElement);

        const colorElement = document.createElement('p');
        colorElement.textContent = `Color: ${this.Carcolor}`;
        productDetailsContainer.appendChild(colorElement);

        const decadeElement = document.createElement('p');
        decadeElement.textContent = `Decade: ${this.decade}`;
        productDetailsContainer.appendChild(decadeElement);

        const scaleElement = document.createElement('p');
        scaleElement.textContent = `Scale: ${this.scale}`;
        productDetailsContainer.appendChild(scaleElement);

        const SKUElement = document.createElement('p');
        SKUElement.textContent = `SKU: ${this.SKUCar}`;
        productDetailsContainer.appendChild(SKUElement);

        const UPCElement = document.createElement('p');
        UPCElement.textContent = `UPC: ${this.UPCCar}`;
        productDetailsContainer.appendChild(UPCElement);

        const packagingElement = document.createElement('p');
        packagingElement.textContent = `Packaging: ${this.packaging}`;
        productDetailsContainer.appendChild(packagingElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${this.price}`;
        productDetailsContainer.appendChild(priceElement);
    }


   
  }

  const myCar = new Car("Ford",'Mustang #5 "L. John\'s Racing"',"Muscle Car","Blue","60s","1/24 Scale","30527-JADA-BLUE",
    "694365739073","Img/Mustang0.jpg","Window Box",19.99);

    myCar.ShowProducts();