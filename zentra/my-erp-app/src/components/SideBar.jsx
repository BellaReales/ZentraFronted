import React from 'react';
import '../styles/global.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-user">
        <div className="sidebar-avatar">S</div>
        <div className="sidebar-user-info">
          <div className="sidebar-user-name">Super Admin</div>
          <div className="sidebar-user-role">super admin</div>
        </div>
      </div>
      <ul>
        <li className="active">👤 Cliente</li>
        <li>👥 Usuarios</li>
        <li>🛡️ Roles</li>
        <li>📦 Productos</li>
        <li>📚 Categorías</li>
        <li>🔗 Proveedores</li>
        <li>🚚 Bodegas</li>
        <li>🛒 Registrar Ventas</li>
      </ul>
    </div>
  );
};

export default Sidebar;
