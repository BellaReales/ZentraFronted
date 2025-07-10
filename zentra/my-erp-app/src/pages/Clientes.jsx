import Layout from '../components/Layout';
import ClientTable from '../components/ClientTable';

const Clientes = () => {
  return (
    <Layout>
      <h1 className="section-title">
        <span className="icono-titulo">👥</span> Gestión de Cliente
      </h1>
      <ClientTable />
    </Layout>
  );
};

export default Clientes;
