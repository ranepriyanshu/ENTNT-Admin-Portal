import { useState } from "react";
import "./orders.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { orders } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Image",
    width: 70,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 220,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 90,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 120,
  },
  {
    field: "OrderedBy",
    headerName: "Ordered By",
    type: "string",
    width: 100,
  },
  {
    field: "OrderedAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "Status",
    headerName: "Status",
    width: 150,
    type: "boolean",
  },
];

const Orders = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="order">
      <div className="info">
        <h1>Orders</h1>
        {/* <button onClick={() => setOpen(true)}>Manage Orders</button> */}
      </div>
      <DataTable slug="orders" columns={columns} rows={orders} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="order" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Orders;
