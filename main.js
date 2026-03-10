function quali() {
    const tprice = 250.00;
    const afee  = 50;

    let quantity = document.getElementById("quantity").value;
    let num = Number(quantity);

    if (num < 0 || isNaN(num)) {
        num = 0;
    }

    let subtotal = num * tprice;
    let total    = subtotal + afee;

    document.getElementById("subtotal").textContent = "₱" + subtotal + ".00";
    document.getElementById("total").textContent    = "₱" + total + ".00";
}

quali();

document.getElementById("quantity").oninput = quali;
document.getElementById("calculateBtn").onclick = quali;