function injectMenuHTML() {
    const menu = document.getElementById('menu');

    // Define the plain HTML content you want to insert
    const menuHTML = `
        <h2>Menu</h2>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="categoria.html?categoria=Vuelo">Vuelo</a></li>
            <li><a href="categoria.html?categoria=Acuática">Acuática</a></li>
            <li><a href="categoria.html?categoria=Aventura">Aventura</a></li>
            <li><a href="categoria.html?categoria=Relax">Relax</a></li>
            <li><a href="categoria.html?categoria=Gastronomia">Gastronomía</a></li>
            <li><a href="categoria.html?categoria=Pareja">Pareja</a></li>       
               
        </ul>
    `;

    // Set the HTML content of the menu element
    menu.innerHTML = menuHTML;
    console.log('Menu Added');
}
