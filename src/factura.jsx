import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './Factura.css';

const Factura = () => {
    const navigate = useNavigate(); // Get useNavigate hook instance
}

const factura = () => {
  const [form, setForm] = useState({
    email: '',
    idReserva: '',
    idFactura: '',
    horaInicio: '',
    horaFin: '',
    fechaInicio: '',
    fechaFin: '',
    precio: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Factura</h1>
      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label><br />
      <label>
        ID Reserva:
        <input type="number" name="idReserva" value={form.idReserva} onChange={handleChange} required />
      </label><br />
      <label>
        ID Factura:
        <input type="number" name="idFactura" value={form.idFactura} onChange={handleChange} required />
      </label><br />
      <label>
        Hora Inicio:
        <input type="time" name="horaInicio" value={form.horaInicio} onChange={handleChange} required />
      </label><br />
      <label>
        Hora Fin:
        <input type="time" name="horaFin" value={form.horaFin} onChange={handleChange} required />
      </label><br />
      <label>
        Fecha Inicio:
        <input type="date" name="fechaInicio" value={form.fechaInicio} onChange={handleChange} required />
      </label><br />
      <label>
        Fecha Fin:
        <input type="date" name="fechaFin" value={form.fechaFin} onChange={handleChange} required />
      </label><br />
      <label>
        Precio:
        <input type="number" name="precio" value={form.precio} onChange={handleChange} required />
      </label><br />
      <button type="submit">Imprimir Factura</button>
    </form>
  );
};

export default factura;
