import {
  Button,
  DialogActions,
  DialogContent,
  Grid,
  Stack,
} from "@mui/material";
import BaseContainer from "./modules/baseContainer";
import { DataGrid } from "@mui/x-data-grid";
import { products } from "../data/data";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

export default function SoldProduct() {
  const [selectedRow, setSelectedRow] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

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
    <>
      <Grid container marginY={2}>
        <BaseContainer title="Sold Products" size={{ xs: 12 }}>
          <DataGrid
            rows={products}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            //   checkboxSelection
            //   disableRowSelectionOnClick
          />
        </BaseContainer>
      </Grid>
      <Dialog maxWidth="xl" open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{selectedRow.name}</DialogTitle>
        <DialogContent>
          <img
          style={{
            width: '50rem'
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
    </>
  );
}
