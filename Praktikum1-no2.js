let barang = [
    { nama: "Beras", Harga: 10000, jumlah: 5},
    { nama: "Gula", Harga: 14000, jumlah: 5},
    { nama: "Telur", Harga: 20000, jumlah: 2},
    { nama: "Minyak Goreng", Harga: 9000, jumlah: 10}
]

var total = 0;
for(var i = 0 ; i < 3 ; i++){
    total += barang[i].Harga;
    };

console.log(barang);    
console.log("Total Belanja : Rp.",total);

