import { Grid, Stack, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function ChartCard({
  title = "Lorem ipsum",
  counter = "56485",
  desc = "25% new record",
  icon = <AcUnitIcon />,
  color= "yellowgreen"
}) {
  return (
    <Grid size={{ xs: 12, md: 3 }}>
      <Stack bgcolor={color} padding={2}>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="flex-start" color="#fff">
          <Stack flexDirection="column" gap={1} className="">
            <Typography variant="p" fontSize='0.9rem' color="#000">{title}</Typography>
            <Typography variant="h6" lineHeight='.8rem' fontWeight="bold">{counter}</Typography>
            <Typography variant="p" fontSize='0.7rem'>{desc}</Typography>
          </Stack>
          <Stack borderRadius="50%" bgcolor="#fff" color={color} >
            {icon}
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}
