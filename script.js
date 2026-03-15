/* ============================================
   OKLAKU - E-Commerce JavaScript
   ============================================ */

// ============================================
// DATA
// ============================================

var CATEGORIES = [
  { id: "all",        name: "Semua",      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=120&h=120&fit=crop", count: 12 },
  { id: "pakaian",    name: "Pakaian",    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=120&h=120&fit=crop", count: 3  },
  { id: "aksesoris",  name: "Aksesoris",  image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=120&h=120&fit=crop", count: 3  },
  { id: "elektronik", name: "Elektronik", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=120&h=120&fit=crop", count: 2  },
  { id: "kecantikan", name: "Kecantikan", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=120&h=120&fit=crop", count: 2  },
  { id: "olahraga",   name: "Olahraga",   image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=120&h=120&fit=crop", count: 1  },
  { id: "makanan",    name: "Makanan",    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=120&h=120&fit=crop", count: 1  },
];

var PRODUCTS = [
  { id: "p1",  name: "Kemeja Linen Premium",       category: "pakaian",    categoryName: "Pakaian",    price: 189000, originalPrice: 259000, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",  rating: 4.8, reviews: 234,  badge: "Terlaris" },
  { id: "p2",  name: "Dress Floral Casual",         category: "pakaian",    categoryName: "Pakaian",    price: 215000, originalPrice: 320000, image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400&h=400&fit=crop",  rating: 4.6, reviews: 189,  badge: "Baru"     },
  { id: "p3",  name: "Celana Chino Slim Fit",       category: "pakaian",    categoryName: "Pakaian",    price: 175000, originalPrice: 240000, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",  rating: 4.5, reviews: 156,  badge: null       },
  { id: "p4",  name: "Tas Tote Canvas",             category: "aksesoris",  categoryName: "Aksesoris",  price: 129000, originalPrice: 180000, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",  rating: 4.7, reviews: 312,  badge: "Terlaris" },
  { id: "p5",  name: "Jam Tangan Minimalis",        category: "aksesoris",  categoryName: "Aksesoris",  price: 345000, originalPrice: 450000, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",  rating: 4.9, reviews: 428,  badge: "Premium"  },
  { id: "p6",  name: "Kacamata Hitam UV400",        category: "aksesoris",  categoryName: "Aksesoris",  price: 95000,  originalPrice: 150000, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",  rating: 4.4, reviews: 98,   badge: null       },
  { id: "p7",  name: "Earphone TWS Wireless",       category: "elektronik", categoryName: "Elektronik", price: 275000, originalPrice: 399000, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",  rating: 4.7, reviews: 567,  badge: "Hot"      },
  { id: "p8",  name: "Power Bank 20000mAh",         category: "elektronik", categoryName: "Elektronik", price: 185000, originalPrice: 260000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",  rating: 4.6, reviews: 334,  badge: null       },
  { id: "p9",  name: "Serum Vitamin C Brightening", category: "kecantikan", categoryName: "Kecantikan", price: 145000, originalPrice: 210000, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",  rating: 4.8, reviews: 445,  badge: "Favorit"  },
  { id: "p10", name: "Lip Cream Matte Velvet",      category: "kecantikan", categoryName: "Kecantikan", price: 65000,  originalPrice: 89000,  image: "https://images.unsplash.com/photo-1631214524020-3c69bec76b78?w=400&h=400&fit=crop",  rating: 4.5, reviews: 289,  badge: null       },
  { id: "p11", name: "Sepatu Running Ultralight",   category: "olahraga",   categoryName: "Olahraga",   price: 399000, originalPrice: 550000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",  rating: 4.9, reviews: 612,  badge: "Terlaris" },
  { id: "p12", name: "Matcha Latte Powder Premium", category: "makanan",    categoryName: "Makanan",    price: 89000,  originalPrice: 120000, image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop",  rating: 4.6, reviews: 178,  badge: null       },
];

var RECOMMENDATIONS = [
  "Kemeja Linen Premium",
  "Jam Tangan Minimalis",
  "Earphone TWS Wireless",
  "Sepatu Running Ultralight",
  "Serum Vitamin C Brightening",
];

// ============================================
// STATE
// ============================================

var cart = [];
var activeFilter = "all";
var currentPayment = "transfer";
var currentBank = "mandiri";
var currentWallet = "ovo";

// ============================================
// UTILITIES
// ============================================

function formatRupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

function renderStars(rating) {
  var s = "";
  for (var i = 0; i < 5; i++) {
    s += i < Math.floor(rating) ? "★" : "☆";
  }
  return s;
}

function getCartItem(productId) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].product.id === productId) return cart[i];
  }
  return null;
}

// ============================================
// SLIDE & SCROLL
// ============================================

function slideTrack(trackId, amount) {
  var track = document.getElementById(trackId);
  if (track) track.scrollBy({ left: amount, behavior: "smooth" });
}

function scrollTo(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ============================================
// CATEGORIES
// ============================================

function renderCategories() {
  var html = "";
  for (var i = 0; i < CATEGORIES.length; i++) {
    var cat = CATEGORIES[i];
    html +=
      '<div class="category-card ' + (cat.id === activeFilter ? "active" : "") + '" onclick="setFilter(\'' + cat.id + '\')">' +
        '<img class="category-card__img" src="' + cat.image + '" alt="' + cat.name + '" loading="lazy" />' +
        '<span class="category-card__name">' + cat.name + '</span>' +
        '<span class="category-card__count">' + cat.count + ' produk</span>' +
      '</div>';
  }
  document.getElementById("categoriesTrack").innerHTML = html;
}

// ============================================
// PRODUCTS
// ============================================

function productCardHTML(product) {
  var badge = product.badge
    ? '<span class="product-card__badge">' + product.badge + '</span>'
    : "";
  var origPrice = product.originalPrice
    ? '<span class="price-original">' + formatRupiah(product.originalPrice) + '</span>'
    : "";
  return (
    '<div class="product-card" onclick="openProductModal(\'' + product.id + '\')">' +
      '<div class="product-card__img-wrap">' +
        '<img class="product-card__img" src="' + product.image + '" alt="' + product.name + '" loading="lazy" />' +
        badge +
        '<div class="product-card__quick">' +
          '<button class="quick-add-btn" onclick="event.stopPropagation(); addToCart(\'' + product.id + '\')" aria-label="Tambah">+</button>' +
        '</div>' +
      '</div>' +
      '<div class="product-card__body">' +
        '<div class="product-card__category">' + product.categoryName + '</div>' +
        '<div class="product-card__name">' + product.name + '</div>' +
        '<div class="product-card__rating">' +
          '<span class="stars">' + renderStars(product.rating) + '</span>' +
          ' <span>' + product.rating + ' (' + product.reviews.toLocaleString("id-ID") + ')</span>' +
        '</div>' +
        '<div class="product-card__price">' +
          '<span class="price-current">' + formatRupiah(product.price) + '</span>' + origPrice +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function renderProducts(filter) {
  var filtered = [];
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (filter === "all" || PRODUCTS[i].category === filter) {
      filtered.push(PRODUCTS[i]);
    }
  }
  var html = "";
  if (filtered.length === 0) {
    html = '<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:60px 0;">Tidak ada produk di kategori ini.</div>';
  } else {
    for (var j = 0; j < filtered.length; j++) {
      html += productCardHTML(filtered[j]);
    }
  }
  var grid  = document.getElementById("productsGrid");
  var track = document.getElementById("productsTrack");
  if (grid) grid.innerHTML = html;
  if (track) {
    var trackHtml = "";
    for (var k = 0; k < filtered.length; k++) trackHtml += productCardHTML(filtered[k]);
    track.innerHTML = trackHtml;
  }
}

function setFilter(filterId) {
  activeFilter = filterId;
  var tabs = document.querySelectorAll(".filter-tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.toggle("active", tabs[i].dataset.filter === filterId);
  }
  var cards = document.querySelectorAll(".category-card");
  for (var j = 0; j < cards.length; j++) {
    cards[j].classList.toggle("active", CATEGORIES[j].id === filterId);
  }
  renderProducts(filterId);
}

document.getElementById("filterTabs").addEventListener("click", function(e) {
  var tab = e.target.closest(".filter-tab");
  if (tab) setFilter(tab.dataset.filter);
});

// ============================================
// PRODUCT MODAL
// ============================================

function openProductModal(productId) {
  var product = null;
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === productId) { product = PRODUCTS[i]; break; }
  }
  if (!product) return;

  var existing = document.getElementById("productModal");
  if (existing) existing.remove();

  var badge = product.badge
    ? '<span style="position:absolute;top:14px;left:14px;background:var(--primary);color:#fff;font-size:.68rem;font-weight:700;padding:5px 12px;border-radius:50px;">' + product.badge + '</span>'
    : "";
  var origPrice = product.originalPrice
    ? '<span style="color:var(--text-muted);font-size:.9rem;text-decoration:line-through;">' + formatRupiah(product.originalPrice) + '</span>'
    : "";

  var modal = document.createElement("div");
  modal.id = "productModal";
  modal.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(4px);";
  modal.innerHTML =
    '<div style="background:#fff;border-radius:20px;max-width:480px;width:100%;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.2);animation:fadeInUp .3s ease both;">' +
      '<div style="position:relative;">' +
        '<img src="' + product.image + '" alt="' + product.name + '" style="width:100%;aspect-ratio:1.2;object-fit:cover;" />' +
        badge +
        '<button onclick="document.getElementById(\'productModal\').remove()" style="position:absolute;top:14px;right:14px;width:36px;height:36px;border-radius:50%;background:#fff;border:none;cursor:pointer;font-size:1.2rem;box-shadow:0 2px 8px rgba(0,0,0,.15);display:flex;align-items:center;justify-content:center;">✕</button>' +
      '</div>' +
      '<div style="padding:24px;">' +
        '<p style="font-size:.72rem;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">' + product.categoryName + '</p>' +
        '<h3 style="font-size:1.2rem;font-weight:800;margin-bottom:8px;">' + product.name + '</h3>' +
        '<div style="color:#f59e0b;margin-bottom:14px;">' + renderStars(product.rating) + ' <span style="color:var(--text-muted);font-size:.82rem;">' + product.rating + ' (' + product.reviews.toLocaleString("id-ID") + ' ulasan)</span></div>' +
        '<div style="display:flex;align-items:baseline;gap:10px;margin-bottom:24px;">' +
          '<span style="font-size:1.4rem;font-weight:800;color:var(--primary);">' + formatRupiah(product.price) + '</span>' + origPrice +
        '</div>' +
        '<button onclick="addToCart(\'' + product.id + '\'); document.getElementById(\'productModal\').remove();" style="width:100%;padding:14px;background:var(--primary);color:#fff;border:none;border-radius:50px;font-size:.95rem;font-weight:700;cursor:pointer;">Tambah ke Keranjang</button>' +
      '</div>' +
    '</div>';

  modal.addEventListener("click", function(e) {
    if (e.target === modal) modal.remove();
  });
  document.body.appendChild(modal);
}

// ============================================
// CART LOGIC
// ============================================

function addToCart(productId) {
  var product = null;
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === productId) { product = PRODUCTS[i]; break; }
  }
  if (!product) return;
  var existing = getCartItem(productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product: product, quantity: 1 });
  }
  updateCartUI();
  showToast("🛍️ " + product.name + " ditambahkan ke keranjang");
}

function removeFromCart(productId) {
  var newCart = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].product.id !== productId) newCart.push(cart[i]);
  }
  cart = newCart;
  updateCartUI();
  renderCartDrawer();
}

function changeQty(productId, delta) {
  var item = getCartItem(productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) { removeFromCart(productId); return; }
  updateCartUI();
  renderCartDrawer();
}

function getTotals() {
  var subtotal = 0;
  for (var i = 0; i < cart.length; i++) {
    subtotal += cart[i].product.price * cart[i].quantity;
  }
  var shippingCost = subtotal >= 200000 ? 0 : 15000;
  return { subtotal: subtotal, shippingCost: shippingCost, total: subtotal + shippingCost };
}

// ============================================
// CART UI
// ============================================

function updateCartUI() {
  var totalQty = 0;
  for (var i = 0; i < cart.length; i++) totalQty += cart[i].quantity;
  var badge = document.getElementById("cartBadge");
  badge.textContent = totalQty;
  badge.classList.toggle("visible", totalQty > 0);
}

function renderCartDrawer() {
  var body    = document.getElementById("cartBody");
  var footer  = document.getElementById("cartFooter");
  var options = document.getElementById("cartOptions");

  if (cart.length === 0) {
    body.innerHTML =
      '<div class="cart-empty">' +
        '<div class="cart-empty__icon">🛒</div>' +
        '<strong>Keranjang Anda kosong</strong>' +
        '<p>Yuk, mulai pilih produk favorit Anda!</p>' +
      '</div>';
    footer.style.display  = "none";
    options.style.display = "none";
    return;
  }

  var html = "";
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    html +=
      '<div class="cart-item">' +
        '<img class="cart-item__img" src="' + item.product.image + '" alt="' + item.product.name + '" loading="lazy" />' +
        '<div class="cart-item__info">' +
          '<div class="cart-item__name">' + item.product.name + '</div>' +
          '<div class="cart-item__price">' + formatRupiah(item.product.price) + '</div>' +
          '<div class="qty-control">' +
            '<button class="qty-btn" onclick="changeQty(\'' + item.product.id + '\', -1)">−</button>' +
            '<span class="qty-num">' + item.quantity + '</span>' +
            '<button class="qty-btn" onclick="changeQty(\'' + item.product.id + '\', 1)">+</button>' +
          '</div>' +
        '</div>' +
        '<button class="cart-item__remove" onclick="removeFromCart(\'' + item.product.id + '\')" aria-label="Hapus">✕</button>' +
      '</div>';
  }
  body.innerHTML = html;

  footer.style.display  = "block";
  options.style.display = "block";

  var totals = getTotals();
  document.getElementById("summarySubtotal").textContent = formatRupiah(totals.subtotal);
  document.getElementById("summaryShipping").textContent = totals.shippingCost === 0 ? "GRATIS 🎉" : formatRupiah(totals.shippingCost);
  document.getElementById("summaryTotal").textContent    = formatRupiah(totals.total);
  document.getElementById("freeShippingNote").textContent = totals.shippingCost > 0
    ? "Tambah " + formatRupiah(200000 - totals.subtotal) + " lagi untuk gratis ongkir!"
    : "✅ Kamu mendapatkan gratis ongkos kirim!";
}

// ============================================
// PAYMENT SELECTION
// ============================================

function switchPayment(type) {
  currentPayment = type;
  document.getElementById("tabTransfer").classList.toggle("active", type === "transfer");
  document.getElementById("tabEwallet").classList.toggle("active", type === "ewallet");
  document.getElementById("bankOptions").style.display    = type === "transfer" ? "grid" : "none";
  document.getElementById("ewalletOptions").style.display = type === "ewallet"  ? "grid" : "none";
}

function selectBank(bankId) {
  currentBank = bankId;
  var cards = document.querySelectorAll("#bankOptions .bank-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("active", cards[i].id === "bank-" + bankId);
  }
}

function selectWallet(walletId) {
  currentWallet = walletId;
  var cards = document.querySelectorAll("#ewalletOptions .bank-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("active", cards[i].id === "wallet-" + walletId);
  }
}

// ============================================
// CART DRAWER TOGGLE
// ============================================

function openCart() {
  renderCartDrawer();
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("visible");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("visible");
  document.body.style.overflow = "";
}

document.getElementById("cartBtn").addEventListener("click", openCart);

// ============================================
// CHECKOUT
// ============================================

function handleCheckout() {
  if (cart.length === 0) return;

  var name   = document.getElementById("addrName").value.trim();
  var street = document.getElementById("addrStreet").value.trim();
  var city   = document.getElementById("addrCity").value.trim();

  if (!name || !street || !city) {
    showToast("⚠️ Mohon lengkapi nama, alamat, dan kota terlebih dahulu!", 3500);
    return;
  }

  var delivery = "regular";
  var radios = document.querySelectorAll('input[name="delivery"]');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) { delivery = radios[i].value; break; }
  }

  var totals = getTotals();
  var bankNames   = { mandiri: "Mandiri", bca: "BCA", bri: "BRI" };
  var walletNames = { ovo: "OVO", gopay: "GoPay", dana: "DANA" };
  var methodLabel = currentPayment === "transfer"
    ? "Transfer Bank " + (bankNames[currentBank] || "")
    : "E-Wallet " + (walletNames[currentWallet] || "");
  var delivLabel = delivery === "express" ? "Express (1-2 hari)" : "Regular (3-5 hari)";

  cart = [];
  updateCartUI();
  closeCart();
  showToast("🎉 Pesanan berhasil! " + formatRupiah(totals.total) + " via " + methodLabel + " · " + delivLabel + " ke " + city);
}

// ============================================
// TOAST
// ============================================

function showToast(message, duration) {
  if (!duration) duration = 3000;
  var container = document.getElementById("toastContainer");
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(function() {
    toast.style.animation = "toastOut .3s ease both";
    setTimeout(function() { toast.remove(); }, 300);
  }, duration);
}

// ============================================
// SEARCH
// ============================================

var searchToggle    = document.getElementById("searchToggle");
var searchClose     = document.getElementById("searchClose");
var searchCollapsed = document.getElementById("searchCollapsed");
var searchExpanded  = document.getElementById("searchExpanded");
var searchInput     = document.getElementById("searchInput");
var searchDropdown  = document.getElementById("searchDropdown");
var searchArea      = document.getElementById("searchArea");

function openSearch() {
  searchCollapsed.style.display = "none";
  searchExpanded.style.display  = "flex";
  searchDropdown.style.display  = "block";
  renderSearchDropdown("");
  setTimeout(function() { searchInput.focus(); }, 50);
}

function closeSearch() {
  searchCollapsed.style.display = "";
  searchExpanded.style.display  = "none";
  searchDropdown.style.display  = "none";
  searchInput.value = "";
}

function renderSearchDropdown(query) {
  var html = "";
  if (query.length < 2) {
    html = '<div class="search-dropdown__label">🔥 Pencarian Populer</div>';
    for (var i = 0; i < RECOMMENDATIONS.length; i++) {
      var rec = RECOMMENDATIONS[i];
      html +=
        '<button class="search-rec" onclick="searchInput.value=\'' + rec + '\'; renderSearchDropdown(\'' + rec + '\');">' +
          '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
          rec +
        '</button>';
    }
  } else {
    var results = [];
    for (var j = 0; j < PRODUCTS.length; j++) {
      if (PRODUCTS[j].name.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        results.push(PRODUCTS[j]);
        if (results.length >= 5) break;
      }
    }
    if (results.length === 0) {
      html = '<div class="search-no-result">Produk tidak ditemukan 😕</div>';
    } else {
      html = '<div class="search-dropdown__label">Hasil Pencarian</div>';
      for (var k = 0; k < results.length; k++) {
        var p = results[k];
        html +=
          '<button class="search-result" onclick="closeSearch(); document.getElementById(\'terbaru\').scrollIntoView({behavior:\'smooth\'});">' +
            '<img src="' + p.image + '" alt="' + p.name + '" />' +
            '<div>' +
              '<div class="search-result__name">' + p.name + '</div>' +
              '<div class="search-result__price">' + formatRupiah(p.price) + '</div>' +
            '</div>' +
          '</button>';
      }
    }
  }
  searchDropdown.innerHTML = html;
}

searchToggle.addEventListener("click", openSearch);
searchClose.addEventListener("click", closeSearch);

searchInput.addEventListener("input", function() {
  renderSearchDropdown(searchInput.value);
});

searchInput.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeSearch();
});

document.addEventListener("click", function(e) {
  if (!searchArea.contains(e.target)) closeSearch();
});

// ============================================
// HEADER SCROLL
// ============================================

window.addEventListener("scroll", function() {
  document.getElementById("header").classList.toggle("scrolled", window.scrollY > 20);
});

// ============================================
// INIT
// ============================================

renderCategories();
renderProducts("all");