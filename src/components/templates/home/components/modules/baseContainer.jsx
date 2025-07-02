import { Divider, Grid, Stack, Typography } from "@mui/material";

export default function BaseContainer({
  title,
  children,
  pX = 2,
  pY = 2,
  size,
}) {
  return (
    <Grid size={size} bgcolor="#fff">
      <Stack padding={1}>
        <Typography variant="p">{title}</Typography>
      </Stack>
      <Divider />
      <Stack paddingX={pX} paddingY={pY}>
        {children}
      </Stack>
    </Grid>
  );
}
