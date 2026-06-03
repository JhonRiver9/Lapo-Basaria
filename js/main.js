const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const tanggal = document.getElementById('tanggal');
if (tanggal) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  tanggal.min = `${yyyy}-${mm}-${dd}`;
}

const params = new URLSearchParams(window.location.search);
const menuParam = params.get('menu');
const menuSelect = document.getElementById('menu');

if (menuParam && menuSelect) {
  menuSelect.value = menuParam;
}

const orderForm = document.getElementById('orderForm');

if (orderForm) {
  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const telepon = document.getElementById('telepon').value.trim();
    const menu = document.getElementById('menu').value;
    const jumlah = document.getElementById('jumlah').value.trim();
    const tanggal = document.getElementById('tanggal').value;
    const alamat = document.getElementById('alamat').value.trim();
    const catatan = document.getElementById('catatan').value.trim();

    if (!nama || !telepon || !menu || !jumlah || !tanggal || !alamat) {
      alert('Mohon lengkapi data pesanan terlebih dahulu.');
      return;
    }

    const pesan =
      `Halo Ibu Basaria, saya ingin memesan makanan.%0A%0A` +
      `Nama: ${encodeURIComponent(nama)}%0A` +
      `No WhatsApp: ${encodeURIComponent(telepon)}%0A` +
      `Menu: ${encodeURIComponent(menu)}%0A` +
      `Jumlah: ${encodeURIComponent(jumlah)}%0A` +
      `Tanggal Pengiriman: ${encodeURIComponent(tanggal)}%0A` +
      `Alamat: ${encodeURIComponent(alamat)}%0A` +
      `Catatan: ${encodeURIComponent(catatan || '-')}`;

    window.open(`https://wa.me/6282111318783?text=${pesan}`, '_blank');
  });
}
