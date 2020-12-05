import '../css/funciones.css'

export const saludar = ( nombre ) => {
    console.log(`Imprimira el nombre en el h1`);
    let h1 = document.createElement('h1');
    h1.innerText = `Hola ${ nombre }, buen dia!`;
    document.body.append(h1);
}