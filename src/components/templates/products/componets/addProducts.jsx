import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import SInput from "../../../modules/sInput";

export default function AddNewProduct({ openAddProduct, onSumbiting }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
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
        setName(data);
      },
      type: "text",
    },
    {
      lable: "Price",
      value: price,
      onchange: (data) => {
        setPrice(data);
      },
      type: "number",
    },
    {
      lable: "Stock",
      value: stock,
      onchange: (data) => {
        setStock(data);
      },
      type: "number",
    },
    {
      lable: "Rating",
      value: rating,
      onchange: (data) => {
        setRating(data);
      },
      type: "number",
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

  const categoryList = ["Phone", "Accessories", "Clothes", "Food"];

  const handleSubmit = async () => {
    try {
      const newProduct = {
        name,
        price,
        stock,
        rating,
        category,
        image: "",
      };

      console.log(newProduct);
      onSumbiting(newProduct);
      
      setName("");
      setPrice("");
      setStock("");
      setRating("");
      setCategory("");

    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Dialog maxWidth="xl" open={open} onClose={() => onSumbiting(false)}>
      <DialogTitle>Add New Product</DialogTitle>
      <DialogContent>
        <Stack flexDirection="column" gap={2}>
          {formSections.map((item, i) => (
            <SInput
              key={i}
              label={item.lable}
              value={item.value}
              onChange={(e) => {
                item.onchange(e.target.value);
              }}
              // type={item.type}
            />
          ))}

          <FormControl size="small" variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Categorty"
            >
              {categoryList.map((c, i) => (
                <MenuItem value={i} key={i}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onSumbiting()}>Close</Button>
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
