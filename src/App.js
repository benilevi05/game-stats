
import Header from './components/Header'
import GamingTable from "./components/GamingTable"

function App() {

  return (
    <div className="container">
      <Header class="header" title="Gaming Statistics" />
      <GamingTable />
    </div>
  );
}

export default App;
