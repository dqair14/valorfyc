window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const subtotal = parseInt(urlParams.get('total'));
    const taxes = subtotal * 0.15;
    const total = subtotal + taxes;

    document.getElementById('date').textContent = new Date().toLocaleDateString();
    document.getElementById('subtotal').textContent = subtotal;
    document.getElementById('taxes').textContent = taxes.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
};

document.getElementById('exit').addEventListener('click', function () {
    window.location.href = "Home.html";  // Return to home page
});
