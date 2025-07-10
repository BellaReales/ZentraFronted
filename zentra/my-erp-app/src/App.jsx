import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Cliente from './pages/Clientes';
import './App.css';

function App() {
  return (
    <>
      <SideBar />
      <div style={{ marginLeft: 250 }}>
        <TopBar />
        <div className="main-content">
          <div className="container">
            <Cliente />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
