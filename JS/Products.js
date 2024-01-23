const productname = ["Nubia Ultima", "Dex Inferno", "Dell Alienware M17 R4", "Asus ROG Strix Scar 17", "Razer Blade Stealth 16", "Lenovo Legion Tower 5"];
const productDescriptions = [
    "Our Most Powerful Gaming Desktop with the most high-end specs for an immersive gaming experience.",
    "Another top of the line gaming desktop witth the only compromise of CPU and Aesthetics that brings a much smaller price tag",
    "Mobility Power at its ultimate, The most powerful gaming laptop to exist, specially tuned by our experts to generate less fan noise and reduced thermal throttling",
    "The best overall gaming laptop of 2023, Best in class specs at an unbeatable price that brings power and undeniably pleasant aesthetics through RGB",
    "The Ultimate Machine combining superb Power and Mobility,  A laptop that allows play to even be taken outside without compromise in performance, the ultimate choice for ones seeking power in a slim form factor.",
    "The Most affordable gaming Desktop featuring excellent specs that performs exceptionally well for what it costs, whether you're a professional gamer or just someone who needs something powerful for your buck"
];
const productPrices = ["$2499.99", "$1749.99", "$1129.99", "$850", "$1300", "$750"];
const productImages = ["./Images/desktop1.jpeg", "./Images/desktop2.jpeg", "./Images/laptop5a.jpeg", "./Images/laptop3.jpeg", "./Images/laptop1.jpeg", "./Images/desktop3.webp", ]

function updateProductInfo(id) {
    let prod_id = id -1;
    const productNameElement = document.getElementById("prod-name");
    const productDescriptionElement = document.getElementById("prod-descript");
    const productPriceElement = document.getElementById("prod-Price");
    const productImageElement = document.getElementById("prod-img");


 

    productNameElement.innerHTML = productNames[prod_id];
    productDescriptionElement.textContent = productDescriptions[prod_id];
    productPriceElement.textContent = productPrices[prod_id];
    productImageElement = productImages[prod_id];

}

document.addEventListener("DOMContentLoaded", updateProductInfo);