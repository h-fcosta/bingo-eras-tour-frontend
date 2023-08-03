import "./App.css";
import GridTable from "./components/GridTable";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container is-fullhd">
      <Navbar />
      <GridTable />
    </div>
  );
}

export default App;
