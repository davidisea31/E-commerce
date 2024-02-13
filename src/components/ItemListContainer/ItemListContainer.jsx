import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {
let { id } = useParams();

useEffect(() => {
    // Lógica para cargar productos basada en el parámetro id
    // Este efecto se ejecutará cada vez que cambie el parámetro id
    console.log(`Cargando productos para la categoría: ${id}`);
}, [id]);

return (
    <div>
    <h2>ItemListContainer</h2>
    <p>{greeting}</p>
    </div>
);
}

export default ItemListContainer;
