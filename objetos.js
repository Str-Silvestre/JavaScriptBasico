var miAuto = {
    marca: "Honda",
    modelo: "Cr-v",
    annio: 2021,

    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.marca;
miAuto.detalleDelAuto();



function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);

