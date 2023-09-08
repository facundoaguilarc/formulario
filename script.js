let boton = document.getElementById('boton');
const url = 'https://jsonplaceholder.typicode.com/users';

boton.addEventListener('click', function () {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let fecha = document.getElementById('fecha').value;

    fetch(url, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            fecha: fecha
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});