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
        <Typography variant="p" fontSize="1.2rem" paddingY=".5rem">
          {title}
        </Typography>
      </Stack>
      <Divider />
      <Stack paddingX={pX} paddingY={pY}>
        {children}
      </Stack>
    </Grid>
  );
}
