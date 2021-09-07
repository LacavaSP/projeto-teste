
import Footer from "components/Footer";
import NavBar from "components/navBar";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
   <>
    <NavBar/>
   <div className = "container">
      <h1 className = "text-primary"> Dashboard de Vendas</h1>
<div className = "row = px-3">
<div className="col-sm-6">
  <h5 className = "text-center text-secondary">Total de Vendas</h5>
<DonutChart />
</div>
<div className="col-sm-6">
<h5 className = "text-center text-secondary">Taxa de Sucesso (%)</h5>
<BarChart />
</div>

<h5 className = "text-primary">Todas vendas </h5>
    </div>
    <DataTable/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
