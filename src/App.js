// import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Routes/Navbar';
import HomeComp from './Components/HomeComp';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeComp/>
      <AllRoutes/>
    </div>
  );
}

export default App;
