document.getElementById('checkout').addEventListener('click', function () {
    const selectedProducts = document.querySelectorAll('input[name="product"]:checked');
    let total = 0;
    let productList = [];

    selectedProducts.forEach(product => {
        total += parseInt(product.value);
        productList.push(product.getAttribute('data-name'));
    });

    if (total > 0) {
        // Redirect to invoice page, passing total and product names as query parameters
        window.location.href = `invoice.html?total=${total}&products=${productList.join(', ')}`;
    } else {
        alert("Please select at least one product.");
    }
});

document.getElementById('cancel').addEventListener('click', function () {
    // Reloads the page to reset the form
    window.location.reload();
});

document.getElementById('exit').addEventListener('click', function () {
    window.location.href = "index.html";  // Return to home page
});
