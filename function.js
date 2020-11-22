// Ini adalah fungsi
function hitung(angka1,angka2,angka3){
    let menghitung;
    menghitung = angka1 + angka2 + angka3;

    return menghitung;
}

// Menyimpan
let memanggil = hitung(1,2,3);
// Output
console.log(memanggil);

// Perulangan
function berulang(ulang){

    let penjumlahan = 0;
    for(let i=0;i<ulang;i++){
        penjumlahan = penjumlahan + i;
    }

    return penjumlahan;
}

let panggil = berulang(20);

console.log(panggil);


function lakukan(){
    let i = 0;
    while(i<10){
        i++;
        console.log("Welcome world" + i);
    }
}
