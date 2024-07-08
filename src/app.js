document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "P1.jpg", price: 20000 },
      { id: 2, name: "Arabica Blend", img: "P2.jpg", price: 25000 },
      { id: 3, name: "Primo Passo", img: "P3.jpg", price: 30000 },
      { id: 4, name: "Aceh Gayo", img: "P4.jpg", price: 35000 },
      { id: 5, name: "Sumatra Mandheling", img: "P5.jpg", price: 40000 },
    ],
  }));
  //
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    },
  });
});

// Konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
