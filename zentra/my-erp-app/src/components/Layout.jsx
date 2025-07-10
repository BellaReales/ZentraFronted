import SideBar from './SideBar';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      <div style={{ marginLeft: 250 }}>
        <TopBar />
        <div className="main-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
