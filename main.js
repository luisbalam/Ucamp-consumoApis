/* fetch(url)
        .then(response => response.json())
        .then(data => respuesta = data); */

let respuesta = 'Aún sin datos';

const peticion = async (moneda1, moneda2) => {

    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${moneda1}/${moneda2}.json`

    const response = await fetch(url);
    const data = await response.json();
    console.log(`Un ${moneda1} vale ${data[moneda2]} ${moneda2}.`);
}

peticion("mxn", "jpy")


const peticionPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //El método GET, no lleva body
        body: JSON.stringify({
            "userId": 1,
            "title": "sunt aut facere repellat provident",
            "body": "quia et suscipit"
        })
    });
    const data = await response.json()
    console.log(data);
}

const peticionPut = async (id) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        //El método GET, no lleva body
        body: JSON.stringify({
            "userId": 1,
            "title": "sunt aut facere repellat provident",
            "body": "quia et suscipit"
        })
    });
    const data = await response.json()
    console.log(data);
}

peticionPost()
peticionPut(3);


/*
GET => ruta/ => obtenerDatos();
POST => ruta/ => crearDatos();
DELETE => ruta/:id => borrarDatos(); 
*/

//query string

// http://www.mipagina.com/post?clave1=valor1&clave2=valor2&clave3=valor3

// http://www.mipagina.com/posts/3

const peticionPut = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token'
        },
        //El método GET, no lleva body
        body: JSON.stringify({
            "userId": 1,
            "title": "sunt aut facere repellat provident",
            "body": "quia et suscipit"
        })
    });
    const data = await response.json()
    console.log(data);
}