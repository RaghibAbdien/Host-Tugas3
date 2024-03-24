//Mene Hamburger
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function(){
	dropdownMenu.classList.toggle('open');
	const isOpen = dropdownMenu.classList.contains('open');


	toggleBtnIcon.classList = isOpen?'fa-solid fa-xmark':'fa-solid fa-bars';
}

// Banner
let sliderIndex = 0;
showSlider();

function showSlider() {
  let i;
  let slider = document.getElementsByClassName("mySlider");
  let tmbl = document.getElementsByClassName("tmbl");
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";  
  }
  sliderIndex++;
  if (sliderIndex > slider.length) {sliderIndex = 1}    
  for (i = 0; i < tmbl.length; i++) {
    tmbl[i].className = tmbl[i].className.replace(" aktif", "");
  }
  slider[sliderIndex-1].style.display = "block";  
  tmbl[sliderIndex-1].className += " aktif";
  setTimeout(showSlider, 4000); // Change image every 2 seconds
}

// Fetch API CrudCrud

// Bikin data lewat looping
// let dataArray = [];
// for (let i = 0; i < 20; i++) {
//   let data = {
//     medicineName: 'Obat ' + (i + 1),
//     quantity: Math.floor(Math.random() * 100) + 1, // Jumlah acak antara 1 dan 100
//     price: Math.floor(Math.random() * 10000) + 1000, // Harga acak antara 1000 dan 10000
//     expiryDate: '2024-12-31',
//     imageUrl: 'https://img.freepik.com/free-photo/various-plastic-bottles-pills_23-2147983050.jpg?t=st=1711272587~exp=1711276187~hmac=78f2a4a590c2e402a745f3acbadbf8e7afd8535785033f024c1efa67361c0073&w=740' // URL gambar acak
//   };
//   dataArray.push(data);
// }

// POST data ke API
// fetch('https://crudcrud.com/api/05bdc699af324c5fbd1eafa52d964ba9/apotek', {
//   headers: { "Content-Type": "application/json; charset=utf-8" },
//   method: 'POST',
//   body: JSON.stringify({dataArray})
// })
// .then(response => response.json())
// .then(data => console.log(data))

//Cek data
fetch('https://crudcrud.com/api/05bdc699af324c5fbd1eafa52d964ba9/apotek/65fff7831492af03e8f0ff0b')
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Gagal mengambil data dari API');
})
.then(data => {
    // Mengambil dataArray dari respons JSON
    let dataArray = data.dataArray;
    // Menampilkan data
    dataArray.forEach((medicine, index) => {
        console.log(`Obat ${index + 1}:`);
        console.log(`Nama Obat: ${medicine.medicineName}`);
        console.log(`Jumlah: ${medicine.quantity}`);
        console.log(`Harga: ${medicine.price}`);
        console.log(`Tanggal Kedaluwarsa: ${medicine.expiryDate}`);
        console.log(`URL Gambar: ${medicine.imageUrl}`);
        console.log('\n');
    });
})
.catch(error => {
    console.error('Terjadi kesalahan:', error);
});


//Masukkan data kedalam HTML
let endpoint = 'https://crudcrud.com/api/05bdc699af324c5fbd1eafa52d964ba9/apotek/65fff7831492af03e8f0ff0b';

let konten = document.getElementById('container');

let datas = fetch(endpoint)
    .then((res) => res.json())
    .then((response) => {
        let dataArray = response.dataArray;
        dataArray.forEach((medicine) => {
            konten.innerHTML += `
            <div class="kartu">
                    <div class="gambar">
                        <img src="${medicine.imageUrl}">
                    </div>
                    <div class="text">
                        <h3>${medicine.medicineName}</h3>
                        <h4>Rp. ${medicine.price}</h4>
                        <div class="ket">
                            <p>Per ${medicine.quantity} buah</p>
                            <p>Exp : ${medicine.expiryDate}</p>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                </div>`;
        });
    })
    .catch((error) => {
        console.error('Terjadi kesalahan:', error);
    });
