window.addEventListener("load",()=>{
    // localStorage.clear();
    // localStorage.
    const triangulo = new Poligono(20, 5);
    localStorage.setItem("poligono",JSON.stringify(triangulo));

    var cuadrado = new Poligono(10, 4);
    localStorage.setItem("poligono",JSON.stringify(cuadrado));

    console.log(localStorage.getItem("poligono")); 
});

class Poligono {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

// const cuadrado = new Poligono(10, 10);

// console.log(cuadrado.area);
// cuadrado.height = 20;
// cuadrado.width = 20; 
// console.log(cuadrado.calcArea());
