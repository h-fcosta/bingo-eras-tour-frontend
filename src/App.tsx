import "./App.css";
import GridTable from "./components/GridTable";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container is-fullhd">
      <Navbar />
      <GridTable />
      <Footer />
    </div>
  );
}

export default App;
