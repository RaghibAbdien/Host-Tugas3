// Statement 
alert('Hello World')

// Semi Colon
//Perlu semi colon jika terdapat 2 statement dalam 1 baris
alert('Hello World'); console.log('statement baris kedua');
console.log('statement 1 baris')

//Komentar 1 Baris
alert('Hello World'); console.log('statement baris kedua');

/*
Komentar
Multi 
Baris
*/
console.log('statement 1 baris')

// Variabel
var fullname = "Adien"
document.write(fullname)

// Mengubah nilai variabel
var nama = "Paijo"
nama = "Ronaldo"
nama = "Messi"

document.write(nama)
document.write('<br>')
document.write(nama)
document.write('<br>')
document.write(nama)
document.write('<br>')
document.write(nama)
document.write('<br>')
document.write(nama)
document.write('<br>')
document.write(nama)
document.write('<br>')
document.write(nama)
document.write('<br>')
document.write(nama)
document.write('<br>')


// Var vs Let vs Const
let name = "Messi"
name = "Ronaldo"
document.write(name) // Output Ronaldo

const n = "Lionel"
n = "Joko"
document.write(n)  // Error


//Menggunakan var
var x = 10
if (true){
    var x = 20
    console.log("Nilai x di dalam blok :", x) //Output 20
}

console.log("Nilai x di luar blok :", x) //Output 20


// Tipe Data Number
let bulat = 25
let desimal = 25.2

document.write(bulat)
document.write('<br>')
document.write(desimal)
document.write('<br>')
document.write("Hasil Penjumlahan :")
document.write(bulat + desimal)

let blt = 25
let string = 'a'
document.write(bulat/0) //Output Infinity
document.write('<br>')
document.write(string/5) //Output NaN


//Tipe Data BigInt
let big = 12312321432423423534534523424234234n
documet.write(big)

//Tipe Data String
let text = "Arkatama"
document.write(text)

//Tipe Data Boolean
let admin = true
let penerbangan = 15 > 9

document.write(penerbangan)


//Tipe Data Undefined
let adm
document.write(adm)


//Tipe Data Null
let admn = null
document.write(admn)


//Tipe Data Symbol
let employee = Symbol('Joko')

console.log(employee)
console.log(employee.description)


//Tipe Data Object
let pegawai = {
    nama: "John",
    age: 30,
    job: "Web Developer",
    isMarried: false,
}

document.write(`My Name is ${pegawai.nama} and he is ${pegawai.age} years old`)

//Type Conversion:String
let value = false
let strng = String(value)
alert(typeof value)


//Type Conversion:Numeric
let str = "123"
let nbr = Number("123")

alert(typeof nbr)


//Type Conversion:Boolean
alert(Boolean(0))
alert(Boolean(1))


//Operator
let a = 3
let b = 5

console.log(a+b) //Penjumlahan
console.log(a-b) //Pengurangan
console.log(a*b) //Perkalian
console.log(a**b) //Pemangkatan
console.log(a/b) //Pembagian
console.log(a%b) //Sisa bagi


//Operator Perbandingan
let c = 3
let d = 5

console.log(c == d) //Sama dengan
console.log(c < d) //Lebih Kecil
console.log(c > d) //Lebih Besar
console.log(c != d) //Tidak Sama dengan


//Operator Logika
let e = 3
let f = 5

console.log(e && f) //Logika AND
console.log(e || f) //Logika OR
console.log(!e) //Kebalikan


//Operator Bitwise
let g = 3
let h = 5

console.log(g & h) //AND
console.log(g | h) //OR
console.log(g ^ h) //XOR
console.log(~g) //Kebalikan


//Operator Ternary seperti percabangan
let i = 3
let j = 5

console.log(i == j ? `Sama` : `Tidak sama`)


//POP UP
//alert
alert('Halo, Selamat Datang')

//prompt
let teks = prompt("Apakah anda mau?")
alert('Jawaban anda '+teks)

//confirm
let conf = confirm("Apakah anda yakin?")
conf ? alert('Jawaban anda ya') : alert('Jawaban anda tidak')


//Percabangan
//if else
let jawab = prompt("1 + 1 = ?")

if(jawab == 2){
    alert('Jawaban benar')
} else if(jawab > 2){
    alert('Kelebihan')
} else if(jawab < 2){
    alert('Kekurangan')
} else{
    alert('Salah')
}

//switch
let warna = "blue"

switch(warna){
    case "red" :
    alert("warna merah")
    break;

    case "blue" :
    alert("warna biru")
    break;

    default :
    alert("warna tidak diketahui")
    break;
}


//Looping
//for
for (let i = 1; i < 5; i++) {
    document.writeln(i)
    document.writeln("<br>")
}

//while
let k = 1

while(k<5){
    document.writeln(k)
    document.writeln("<br>")
    k++
}

//do while
let l = 1

document.writeln('Perulangan do while')
document.writeln("<br>")
do{
    document.writeln(l)
    document.writeln("<br>")
    l++
} while(l<5)

//loop break
document.writeln('Perulangan for')
document.writeln("<br>")

for (let a = 1; a < 5; a++) {
    if(a == 3){
        break
    }
    document.writeln(a)
    document.writeln("<br>")
}

//loop continue
document.writeln('Perulangan for')
document.writeln("<br>")

for (let a = 1; a < 5; a++) {
    if(a == 3){
        continue
    }
    document.writeln(a)
    document.writeln("<br>")
}