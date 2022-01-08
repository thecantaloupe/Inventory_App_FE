import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css"
import { deleteWarehouse, getWarehouse } from "../../actions/Warehouse";

export default function Warehouse() {
  const warehouses = useSelector((state) => state.warehouses)
  console.log(warehouses)
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();
  let number = parseInt(params.warehouseId, 10)
  let warehouse = warehouses.find((warehouse) => {
    return warehouse.id === number
  })
  console.log(warehouse)
  let inv = warehouse.inventory_levels

  return (
    <main style={{ padding: "1rem" }}>
      <h3>{warehouse.description}</h3>
      <p>{warehouse.address1}, {warehouse.city}, {warehouse.state}</p>
      <p>Warehouse Manager: {warehouse.warehouse_manager}</p>
      <h5>Inventory Levels</h5>
      {inv.map((invs) =>(
      <p key={invs.id}>Inventory Item Id number: {invs.id} | Count: {invs.count}</p>))}
      <button
            onClick={() =>
              dispatch(deleteWarehouse(warehouse.id), dispatch(getWarehouse()), navigate("/warehouses"))
            }
            id="delete"
          >
            DELETE
          </button>
    </main>
  );
}