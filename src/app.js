document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "P1.jpg", price: "Rp. 20.000" },
      { id: 2, name: "Arabica Blend", img: "P2.jpg", price: "Rp. 25.000" },
      { id: 3, name: "Primo Passo", img: "P3.jpg", price: "Rp. 30.000" },
      { id: 4, name: "Aceh Gayo", img: "P4.jpg", price: "Rp. 35.000" },
      { id: 5, name: "Sumatra Mandheling", img: "P5.jpg", price: "Rp. 40.000" },
    ],
  }));
});
