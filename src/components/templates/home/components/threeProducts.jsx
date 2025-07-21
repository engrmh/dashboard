import { Button, Grid, Stack, Typography } from "@mui/material";
import { topSell } from "../data/data";

export default function ThreeProducts() {
  return (
    <Grid container spacing={2} marginTop={2}>
      {topSell.slice(-3).map((t, i) => (
        <Grid size={{ xs: 12, md: 4 }} bgcolor="#fff" padding={4}>
          <Stack
            justifyContent="center"
            flexDirection="column"
            alignItems={"center"}
          >
            <Typography
              variant="h5"
              component="h5"
              fontWeight="bold"
              marginBottom={3}
            >
              {t.type.slice(-1)}
            </Typography>
            <img
              src={t.image}
              alt={t.title}
              width={150}
              height={150}
              style={{ borderRadius: "50%" }}
            />
            <Typography
              variant="h6"
              component="h6"
              fontWeight="bold"
              marginTop=".8rem"
            >
              {t.title}
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              fontWeight="bold"
              marginBottom={3}
              color="#a9a9a9"
            >
              {t.category.map((c, i, arr) =>
                i !== arr.length - 1 ? `${c} - ` : c
              )}
            </Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent={'space-between'} alignItems={'stretch'} marginTop={5}>
            <Stack>
              <Typography fontSize='1.2rem'>${t.price}</Typography>
              <Typography fontSize='1.2rem' variant="del" component="del">
                ${t.price}
              </Typography>
            </Stack>
            <Button variant="contained" >Add To Cart</Button>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
