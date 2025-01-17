import './App.css';
import Navbar from './components/Navbar';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <div className="App">
      <TopHeader >
        <Navbar />
      </TopHeader>
    </div>
  );
}

export default App;
