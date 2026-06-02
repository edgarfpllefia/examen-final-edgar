"use client";

function EventCard({ evento }) {
  const { id, nom, data, ciutat } = evento;

  return (
    <div id={id}>
      <h2>Nombre: {nom}</h2>
      <p>Fecha: {data}</p>
      <p>Ciudad: {ciutat}</p>
    </div>
  );
}

export default EventCard;
