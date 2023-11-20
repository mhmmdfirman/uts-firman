// script.js

// Data produk
const products = [
    { id: 1, name: 'Beras', price: 15000 },
    { id: 2, name: 'Minyak Goreng', price: 20000 },
    { id: 3, name: 'Garam', price: 4000 },
    { id: 4, name: 'Gula', price: 12000 },
    { id: 5, name: 'Tepung Terigu', price: 6000 }
  ];
  
  // Data keranjang belanja
  let cart = [];
  
  // Fungsi untuk menambahkan produk ke keranjang
  function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      cart.push(selectedProduct);
      updateCart();
    }
  }
  
  // Fungsi untuk memperbarui tampilan keranjang
  function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
  
    // Hapus isi keranjang sebelum memperbarui
    cartItemsElement.innerHTML = '';
  
    // Tambahkan item ke keranjang
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - Rp. ${item.price}`;
      cartItemsElement.appendChild(li);
    });
  
    // Hitung total belanja
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  
    // Tampilkan total belanja
    totalElement.textContent = `Rp. ${totalAmount}`;
  }
  
  // Fungsi untuk checkout
  function checkout() {
    alert('Terima kasih telah berbelanja!');
    // Lakukan logika checkout sesuai kebutuhan
  }
  
  // Fungsi untuk mengedit keranjang
  function editCart() {
    // Lakukan logika edit keranjang sesuai kebutuhan
  }
  
  // Fungsi untuk menghapus produk dari keranjang
  function deleteProduct(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
  }
  
  // Inisialisasi tampilan keranjang saat halaman dimuat
  document.addEventListener('DOMContentLoaded', () => {
    updateCart();
  });
  