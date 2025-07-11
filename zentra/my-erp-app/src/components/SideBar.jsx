import React from 'react';
import '../styles/global.css';
import UserIcon from '../assets/icons/user.svg?react';
import UsersIcon from '../assets/icons/users.svg?react';
import RolesIcon from '../assets/icons/roles.svg?react';
import ProductIcon from '../assets/icons/product.svg?react';
import CategoryIcon from '../assets/icons/category.svg?react';
import ProviderIcon from '../assets/icons/provider.svg?react';
import WarehouseIcon from '../assets/icons/warehouse.svg?react';
import SaleIcon from '../assets/icons/sale.svg?react';

const menuItems = [
  { label: 'Cliente', icon: <UserIcon />, active: true },
  { label: 'Usuarios', icon: <UsersIcon /> },
  { label: 'Roles', icon: <RolesIcon /> },
  { label: 'Productos', icon: <ProductIcon /> },
  { label: 'Categorías', icon: <CategoryIcon /> },
  { label: 'Proveedores', icon: <ProviderIcon /> },
  { label: 'Bodegas', icon: <WarehouseIcon /> },
  { label: 'Registrar Ventas', icon: <SaleIcon /> },
];

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
        {menuItems.map((item, idx) => (
          <li key={item.label} className={item.active ? 'active' : ''}>
            <span className="sidebar-icon">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
