// Function to scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Book roulette functionality
function spinRoulette() {
    const books = [
        "El Quijote - $15",
        "Cien Años de Soledad - $12",
        "1984 - $10",
        "El Hobbit - $8",
        "Harry Potter - $14"
    ];
    
    const randomIndex = Math.floor(Math.random() * books.length);
    const selectedBook = books[randomIndex];
    
    document.getElementById('roulette-result').textContent = `¡Libro seleccionado: ${selectedBook}!`;
    document.getElementById('book-detail').textContent = `Detalles: ${selectedBook} - Disponible para compra o intercambio.`;
}