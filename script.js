//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// klik diluar side bar untuk menghlangnkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Data produk
const products = {
  1: {
    img: "assets/img/1.jpg",
    title: "SPANDUK",
    speksifikasiTitle: "Spesifikasi",
    contentDesc1: "1. High resolution.",
    contentDesc2: "2. Gratis desain.",
    contentDesc3: "3. Revisi sampai fix.",
    contentDesc4: "",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "",
    contentket1: "",
    contentket2: "",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Rp 25.000",
  },
  2: {
    img: "assets/img/2.jpg",
    title: " ALBUM KENGANAN",
    contentDesc1: "1. Hard cover(Lamnating glosy/doff).",
    contentDesc2: "2. Isi artpaper 150 gram(Glosy).",
    contentDesc3: "3. Finishing jilid spiral, lem panas.",
    contentDesc4: "4. Isi 30 halaman.",
    contentDesc5: "",
    contentDesc6: "",
    keteranganTitle: "Keterangan",
    contentket1: "Tambah halaman Rp 3.000",
    contentket2: "Ukuran max A4 (21x29,7).",
    contentket3: "",
    contentket4: "",
    contentket5: "",
    contentket6: "",
    price: "Rp 85.000",
  },
  3: {
    img: "/assets/img/3.jpg",
    title: "SPANDUK",
    contentDesc1: "1. High resolution.",
    contentDesc2: "2. Gratis desain.",
    contentDesc3: "3. Revisi sampai fix.",
    contentDesc4: "3. Revisi sampai fix.",
    contentDesc5: "3. Revisi sampai fix.",
    contentDesc6: "3. Revisi sampai fix.",
    price: "Rp 25.000",
  },
  4: {
    img: "assets/img/4.jpg",
    title: "SPANDUK",
    contentDesc1: "1. High resolution.",
    contentDesc2: "2. Gratis desain.",
    contentDesc3: "3. Revisi sampai fix.",
    contentDesc4: "3. Revisi sampai fix.",
    contentDesc5: "3. Revisi sampai fix.",
    contentDesc6: "3. Revisi sampai fix.",
    price: "Rp 25.000",
  },
  5: {
    img: "assets/img/5.jpg",
    title: "SPANDUK",
    contentDesc1: "1. High resolution.",
    contentDesc2: "2. Gratis desain.",
    contentDesc3: "3. Revisi sampai fix.",
    contentDesc4: "3. Revisi sampai fix.",
    contentDesc5: "3. Revisi sampai fix.",
    contentDesc6: "3. Revisi sampai fix.",
    contentDesc4: "3. Revisi sampai fix.",
    contentDesc5: "3. Revisi sampai fix.",
    contentDesc6: "3. Revisi sampai fix.",
    price: "Rp 25.000",
  },

  // Tambahkan produk lain di sini
};

// Mendapatkan elemen modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalspekTitle = document.getElementById("spesifikasi-title");
const modalcontentDecs1 = document.getElementById("content-decs1");
const modalcontentDecs2 = document.getElementById("content-decs2");
const modalcontentDecs3 = document.getElementById("content-decs3");
const modalcontentDecs4 = document.getElementById("content-decs4");
const modalcontentDecs5 = document.getElementById("content-decs5");
const modalcontentDecs6 = document.getElementById("content-decs6");
const modalKetTitle = document.getElementById("keterangan-title");
const modalcontentKet1 = document.getElementById("content-ket1");
const modalcontentKet2 = document.getElementById("content-ket2");
const modalcontentKet3 = document.getElementById("content-ket3");
const modalcontentKet4 = document.getElementById("content-ket4");
const modalcontentKet5 = document.getElementById("content-ket5");
const modalcontentKet6 = document.getElementById("content-ket6");
const modalPrice = document.getElementById("modal-price");
const closeBtn = document.querySelector(".close");

// Mendapatkan semua tombol detail
const detailButtons = document.querySelectorAll(".detail-btn");

// Menambahkan event listener ke setiap tombol detail
detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.getAttribute("data-product");
    const product = products[productId];
    if (product) {
      modalImg.src = product.img;
      modalTitle.textContent = product.title;
      modalspekTitle.textContent = product.speksifikasiTitle;
      modalcontentDecs1.textContent = product.contentDesc1;
      modalcontentDecs2.textContent = product.contentDesc2;
      modalcontentDecs3.textContent = product.contentDesc3;
      modalcontentDecs4.textContent = product.contentDesc4;
      modalcontentDecs5.textContent = product.contentDesc5;
      modalcontentDecs6.textContent = product.contentDesc6;
      modalKetTitle.textContent = product.keteranganTitle;
      modalcontentKet1.textContent = product.contentket1;
      modalcontentKet2.textContent = product.contentket2;
      modalcontentKet3.textContent = product.contentket3;
      modalcontentKet4.textContent = product.contentket4;
      modalcontentKet5.textContent = product.contentket5;
      modalcontentKet6.textContent = product.contentket6;

      modalPrice.textContent = `Harga: ${product.price}`;
      modal.style.display = "flex";
    }
  });
});

// Menutup modal saat tombol close diklik
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Menutup modal saat klik di luar konten modal
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
