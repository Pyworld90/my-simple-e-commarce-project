// Custom JS for the search bar functionality
document.getElementById('searchInput').addEventListener('input', function (event) {
    let query = event.target.value.toLowerCase();
    let products = document.getElementsByClassName('card-title');
    
    Array.from(products).forEach(function (product) {
        let title = product.textContent.toLowerCase();
        if (title.includes(query)) {
            product.closest('.col-md-4').style.display = 'block';
        } else {
            product.closest('.col-md-4').style.display = 'none';
        }
    });
});

// JS for login (Example login feature; just showing an alert for now)
document.getElementById('loginButton').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Login functionality coming soon!');
});
