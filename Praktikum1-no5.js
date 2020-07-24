class Lingkaran {
    constructor(r){
        this.jari = r;
    }
    //luas lingkaran
    luas(){
        //rumus pi * r ^ 2 => menggunakan Math.pi
        return Math.PI * this.jari * this.jari;
    }
    //keliling lingkaran
    keliling(){
        return Math.PI * this.jari * 2;
    }
}

//class bola
class bola extends Lingkaran{
    constructor(r){
        super(r);
    }
    //luas permukaan
    luas_permukaan(){
        return 4 * Math.PI * Math.pow(this.jari,2);
    }
    //volume
    volume(){
        return 4 / 3 * Math.PI * Math.pow(this.jari,3);
    }
}

//class kerucut
class kerucut extends Lingkaran{
    constructor(r,t){
        super(r);
        this.Tinggi = t;
    }
    //luas selimut
    luas_selimut_k(){
        // pelukis s akar r2 + t2
        let selimut = Math.sqrt(Math.pow(this.jari,2)+ Math.pow(this.Tinggi,2));
        // rumus selimut = pi r selimut
        return Math.PI * this.jari * selimut;
    }
    //luas permukaan
    luas_permukaan_k(){
        //rumus l permukaan pi * r * (r+s)
        let selimut = Math.sqrt(Math.pow(this.jari,2)+ Math.pow(this.Tinggi,2));
        return Math.PI * this.jari * selimut;
    }
    //volume
    volume_k(){
        //rumus 1/3 luas alas * tinggi
        // l alas = pi r^2
        return 1 / 3 * (Math.PI * Math.pow(this.jari,2)) * this.Tinggi;
    }
}
//class tabung
class tabung extends Lingkaran{
    constructor(r,t){
        super(r);
        this.Tinggi = t;
    }
    //selimut tabung
    luas_selimut_t(){
        return Math.PI * Math.pow(this.jari,2) * this.Tinggi;
    }
    //l permukaan
    luas_permukaan_t(){
        return 2 * Math.PI * this.jari * (this.jari + this.Tinggi);
    }
    //volume
    volume_t(){
        return Math.PI * Math.pow(this.jari,2) * this.Tinggi;
    }
}

let objek = new bola(15);
console.log("Volume Bola : "+ objek.luas_permukaan());
console.log("Luas Permukaan Bola : "+ objek.volume());
console.log("------------------------------------");
let data = new kerucut(10, 40);
console.log("Volume Kerucut : "+ data.volume_k());
console.log("Luas Permukaan Kerucut : "+ data.luas_permukaan_k());
console.log("Luas Selimut : "+ data.luas_selimut_k());
console.log("------------------------------------");
let key = new tabung(7.5, 50);
console.log("Volume Kerucut : "+ key.volume_t());
console.log("Luas Permukaan Kerucut : "+ key.luas_permukaan_t());
console.log("Luas Selimut : "+ key.luas_selimut_t());
console.log("------------------------------------");
