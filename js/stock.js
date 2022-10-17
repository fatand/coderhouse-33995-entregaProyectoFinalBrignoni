//Mediante el fetch del deasfio de clase 15, es posible cargar el stock en .json y evitar cargar en .js

/* const catalogoHombres = [
    {id: 1, nombre: "Remera Verde", precio: 790, img: "men-product1.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 2, nombre: "Remera Rosada", precio: 690, img: "men-product2.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 3, nombre: "Short Azul", precio: 1190, img: "men-product3.jpg", categoria: "Shorts", recienLlegado: false, sale: true, cant:0, sexo: "male"},
    {id: 4, nombre: "Short Negro", precio: 1090, img: "men-product4.jpg",categoria: "Shorts", recienLlegado: false, sale: false, cant:0, sexo: "male"},
    {id: 5, nombre: "Medias", precio: 450, img: "men-product5.jpg", categoria: "Accesorios", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 6, nombre: "Buzo Fluor", precio: 1590, img: "men-product6.jpg", categoria: "Buzos", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 7, nombre: "Remera Verde", precio: 790, img: "men-product1.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 8, nombre: "Remera Rosada", precio: 690, img: "men-product2.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 9, nombre: "Short Azul", precio: 1190, img: "men-product3.jpg", categoria: "Shorts", recienLlegado: false, sale: true, cant:0, sexo: "male"},
    {id: 10, nombre: "Short Negro", precio: 1090, img: "men-product4.jpg",categoria: "Shorts", recienLlegado: false, sale: false, cant:0, sexo: "male"},
    {id: 11, nombre: "Medias", precio: 450, img: "men-product5.jpg", categoria: "Accesorios", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 12, nombre: "Buzo Fluor", precio: 1590, img: "men-product6.jpg", categoria: "Buzos", recienLlegado: true, sale: false, cant:0, sexo: "male"},
];

const catalogoMujeres = [
    {id: 13, nombre: "Remera Negra", precio: 790, img: "women-product1.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 14, nombre: "Remera Gris", precio: 790, img: "women-product2.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 15, nombre: "Buzo Rosado", precio: 1990, img: "women-product3.jpg", categoria: "Buzos", recienLlegado: false, sale: true, cant:0, sexo: "female"},
    {id: 16, nombre: "Short Negro", precio: 1090, img: "women-product4.jpg",categoria: "Shorts", recienLlegado: false, sale: false, cant:0, sexo: "female"},
    {id: 17, nombre: "Calza Negra", precio: 890, img: "women-product5.jpg", categoria: "Shorts", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 18, nombre: "Medias", precio: 450, img: "women-product6.jpg", categoria: "Medias", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 19, nombre: "Remera Negra", precio: 790, img: "women-product1.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 20, nombre: "Remera Gris", precio: 790, img: "women-product2.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 21, nombre: "Buzo Rosado", precio: 1990, img: "women-product3.jpg", categoria: "Buzos", recienLlegado: false, sale: true, cant:0, sexo: "female"},
    {id: 22, nombre: "Short Negro", precio: 1090, img: "women-product4.jpg",categoria: "Shorts", recienLlegado: false, sale: false, cant:0, sexo: "female"},
    {id: 23, nombre: "Calza Negra", precio: 890, img: "women-product5.jpg", categoria: "Shorts", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 24, nombre: "Medias", precio: 450, img: "women-product6.jpg", categoria: "Medias", recienLlegado: true, sale: false, cant:0, sexo: "female"}
]; */

const catalogo = [
    {id: 1, nombre: "Remera Verde", precio: 790, img: "men-product1.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 2, nombre: "Remera Rosada", precio: 690, img: "men-product2.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 3, nombre: "Short Azul", precio: 1190, img: "men-product3.jpg", categoria: "Shorts", recienLlegado: false, sale: true, cant:0, sexo: "male"},
    {id: 4, nombre: "Short Negro", precio: 1090, img: "men-product4.jpg",categoria: "Shorts", recienLlegado: false, sale: false, cant:0, sexo: "male"},
    {id: 5, nombre: "Medias", precio: 450, img: "men-product5.jpg", categoria: "Accesorios", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 6, nombre: "Buzo Fluor", precio: 1590, img: "men-product6.jpg", categoria: "Buzos", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 7, nombre: "Remera Verde", precio: 790, img: "men-product1.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 8, nombre: "Remera Rosada", precio: 690, img: "men-product2.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 9, nombre: "Short Azul", precio: 1190, img: "men-product3.jpg", categoria: "Shorts", recienLlegado: false, sale: true, cant:0, sexo: "male"},
    {id: 10, nombre: "Short Negro", precio: 1090, img: "men-product4.jpg",categoria: "Shorts", recienLlegado: false, sale: false, cant:0, sexo: "male"},
    {id: 11, nombre: "Medias", precio: 450, img: "men-product5.jpg", categoria: "Accesorios", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 12, nombre: "Buzo Fluor", precio: 1590, img: "men-product6.jpg", categoria: "Buzos", recienLlegado: true, sale: false, cant:0, sexo: "male"},
    {id: 13, nombre: "Remera Negra", precio: 790, img: "women-product1.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 14, nombre: "Remera Gris", precio: 790, img: "women-product2.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 15, nombre: "Buzo Rosado", precio: 1990, img: "women-product3.jpg", categoria: "Buzos", recienLlegado: false, sale: true, cant:0, sexo: "female"},
    {id: 16, nombre: "Short Negro", precio: 1090, img: "women-product4.jpg",categoria: "Shorts", recienLlegado: false, sale: false, cant:0, sexo: "female"},
    {id: 17, nombre: "Calza Negra", precio: 890, img: "women-product5.jpg", categoria: "Shorts", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 18, nombre: "Medias", precio: 450, img: "women-product6.jpg", categoria: "Medias", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 19, nombre: "Remera Negra", precio: 790, img: "women-product1.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 20, nombre: "Remera Gris", precio: 790, img: "women-product2.jpg", categoria: "Remeras", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 21, nombre: "Buzo Rosado", precio: 1990, img: "women-product3.jpg", categoria: "Buzos", recienLlegado: false, sale: true, cant:0, sexo: "female"},
    {id: 22, nombre: "Short Negro", precio: 1090, img: "women-product4.jpg",categoria: "Shorts", recienLlegado: false, sale: false, cant:0, sexo: "female"},
    {id: 23, nombre: "Calza Negra", precio: 890, img: "women-product5.jpg", categoria: "Shorts", recienLlegado: true, sale: false, cant:0, sexo: "female"},
    {id: 24, nombre: "Medias", precio: 450, img: "women-product6.jpg", categoria: "Medias", recienLlegado: true, sale: false, cant:0, sexo: "female"}
];