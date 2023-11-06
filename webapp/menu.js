function injectMenuHTML() {
    const menu = document.getElementById('menu');

    // Define the plain HTML content you want to insert
    const menuHTML = `
        <h2>Menu</h2>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="generic.html">Aventura</a></li>
            <li><a href="generic.html">Gastronomía</a></li>
            <li><a href="generic.html">Salud</a></li>
            <li><a href="elements.html">Elements</a></li>
            <li><a href="ciudad.html">Lista Ciudad</a></li>
        </ul>
    `;

    // Set the HTML content of the menu element
    menu.innerHTML = menuHTML;
    console.log('Menu Added');
}
