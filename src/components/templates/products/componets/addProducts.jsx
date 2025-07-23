import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import SInput from "../../../modules/sInput";

export default function AddNewProduct({ openAddProduct, onSumbiting }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setSrice] = useState("");
  const [stock, setStock] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState({});

  useEffect(() => {
    if (openAddProduct) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [openAddProduct]);

  const formSections = [
    {
      lable: "Product Name",
      value: name,
      onchange: (data) => {
        // console.log(data);
        setName(data);
      },
    },
    {
      lable: "Price",
      value: price,
      onchange: (data) => {},
    },
    {
      lable: "Stock",
      value: stock,
      onchange: (data) => {},
    },
    {
      lable: "Rating",
      value: rating,
      onchange: (data) => {},
    },
    // {
    //   lable: "Category",
    //   value: category,
    //   onchange: (data) => {},
    // },
    // {
    //   lable: "",
    //   value: ,
    //   onchange: (data) => {}
    // },
  ];
  return (
    <Dialog maxWidth="xl" open={open} onClose={() => onSumbiting(false)}>
      <DialogTitle>Add New Product</DialogTitle>
      <DialogContent>
        <Stack flexDirection="column" gap={2}>
          {formSections.map((item, i) => (
            <SInput
              label={item.lable}
              value={item.value}
              onChange={(e) => item.onchange(e.target.value)}
            />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onSumbiting(true)}>Add</Button>
        <Button onClick={() => onSumbiting(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
