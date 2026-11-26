const kamera = {
    ambilFoto() {
        console.log(`${this.nama} mengambil foto.`);
    }
};

const internet = {
    bukaBrowser() {
        console.log(`${this.nama} membuka browser.`);
    }
};

const telepon = {
    panggil() {
        console.log(`${this.nama} melakukan panggilan.`);
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}

class TabletWifi {
    constructor(nama) {
        this.nama = nama;
    }
}

class PonselJadul {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(TabletWifi, kamera, internet);
applyCapabilities(PonselJadul, telepon);

const tablet = new TabletWifi("Tablet_3165");
const ponsel = new PonselJadul("Ponsel_3165");

tablet.ambilFoto();
tablet.bukaBrowser();

ponsel.panggil();

console.log(
    `Ponsel_3165 bisa mengambil foto? ${typeof ponsel.ambilFoto === "function"}`
);

console.log(
    `Ponsel_3165 bisa melakukan panggilan? ${typeof ponsel.panggil === "function"}`
);

console.log(
    `Tablet_3165 bisa melakukan panggilan? ${typeof tablet.panggil === "function"}`
);