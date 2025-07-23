import {
  Button,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { products } from "../home/data/data";
import DashboardContainer from "../../modules/dashboardContainer/dashboardContainer";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddNewProduct from "./componets/addProducts";

export default function Products() {
  const [selectedRow, setSelectedRow] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [openAddNewProductDialog, setOpenAddNewProductDialog] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return (
          <div
            onClick={() => {
              setSelectedRow(params.row);
              setOpenDialog(true);
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                padding: ".5rem",
              }}
              src={params.value !== "" ? params.value : "/images/noPhoto.jpg"}
              alt={params.row.name}
            />
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 110,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      width: 110,
    },
  ];

  return (
    <DashboardContainer
      pageTitle="Products Page"
      links={[{ title: "Products", href: "/products" }]}
    >
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginBottom: "5px",
        }}
        onClick={() => setOpenAddNewProductDialog(true)}
      >
        <AddBoxIcon />
        <Typography variant="p" component="p" fontWeight="bold">
          Add New Product
        </Typography>
      </Button>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        //   checkboxSelection
        //   disableRowSelectionOnClick
      />
      <Dialog
        maxWidth="xl"
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle>{selectedRow.name}</DialogTitle>
        <DialogContent>
          <img
            style={{
              width: "50rem",
            }}
            src={
              selectedRow.image !== ""
                ? selectedRow.image
                : "/images/noPhoto.jpg"
            }
            alt={selectedRow.name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      <AddNewProduct
        openAddProduct={openAddNewProductDialog}
        onSumbiting={(status) => {
          if (status) {
            // add new product to server
            setOpenAddNewProductDialog(false);
          } else {
            setOpenAddNewProductDialog(status);
          }
        }}
      />
    </DashboardContainer>
  );
}
