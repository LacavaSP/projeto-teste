 
 

function DataTable() {
    return (
<div className="table-responsive">
    <table className="table table-striped table-sm">
        <thead>
            <tr>
                <th>Data</th>
                <th>Vendedor</th>
                <th>Clientes visitados</th>
                <th>Negócios fechados</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>22/04/2021</td>
                <td>André Marques</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Carlos Alves</td>
                <td>67</td>
                <td>44</td>
                <td>22000.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Fábio Silva</td>
                <td>55</td>
                <td>27</td>
                <td>20000.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Dani Muller</td>
                <td>19</td>
                <td>5</td>
                <td>157.00</td>
            </tr>
        </tbody>
    </table>
</div>
    );
}

export default DataTable;
