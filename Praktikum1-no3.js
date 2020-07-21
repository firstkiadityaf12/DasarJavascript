let bbadan = 90;  // satuan kg
let tbadan = 1.7; // satuan meter cm => m

let hitung = bbadan / (Math.pow(tbadan,2));

//bentuk ifelse
if (hitung <= 18.5) {
    console.log( "Kekurangan berat badan : ", hitung);
    } else if (hitung >= 18.5 && hitung <= 24.9){
        console.log("Normal(Ideal) : ", hitung);
        }else if (hitung >= 25.0 && hitung <= 29.9){
            console.log("Kelebihan berat badan : ", hitung);
        }else if (hitung >= 30.0){
            console.log("Kegemukan(Obesitas) : ", hitung);
        }
