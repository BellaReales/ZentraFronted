import React from 'react';
import '../styles/global.css';

const clientes = [
  {
    nombre: "Isabella Reales",
    correo: "ejemplo@gmail.com",
    telefono: "+57 374635347",
    tipo: "cc",
    numero: "6937109836",
    ciudad: "Bogotá",
    direccion: "calle 23 #34",
    fecha: "06/06/2025",
    estado: "Activo",
  },
  {
    nombre: "Yanifer Garzón",
    correo: "ejemplo@gmail.com",
    telefono: "+57 374635347",
    tipo: "cc",
    numero: "6937109836",
    ciudad: "Bogotá",
    direccion: "calle 23 #34",
    fecha: "06/06/2025",
    estado: "Inactivo",
  },
  // agrega más clientes según lo necesites
];

const ClientTable = () => {
  return (
    <div className="tabla-clientes">
      <table>
        <thead>
          <tr>
            <th>📋 Código</th>
            <th>🙍 Nombre</th>
            <th>✉️ Correo</th>
            <th>📞 Teléfono</th>
            <th>📌 Tipo</th>
            <th>🔢 Número</th>
            <th>🏙️ Ciudad</th>
            <th>🏠 Dirección</th>
            <th>📅 Fecha</th>
            <th>✅ Estado</th>
            <th>⚙️ Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{c.nombre}</td>
              <td>{c.correo}</td>
              <td>{c.telefono}</td>
              <td>{c.tipo}</td>
              <td>{c.numero}</td>
              <td>{c.ciudad}</td>
              <td>{c.direccion}</td>
              <td>{c.fecha}</td>
              <td>
                <span className={c.estado === 'Activo' ? 'estado-activo' : 'estado-inactivo'}>
                  {c.estado}
                </span>
              </td>
              <td>⚙️</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
