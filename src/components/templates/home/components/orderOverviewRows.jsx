import Grid from "@mui/material/Grid";
import BaseContainer from "./modules/baseContainer";
import TimeLine from "./modules/timeLine";
import Carousel from "./modules/carousel";

export default function OrderOverviewRows() {
  return (
    <Grid container marginTop={2} spacing={2}>
      <BaseContainer title="Order Activity" size={{ xs: 12, md: 4 }}>
        <div className="">
          <TimeLine />
        </div>
      </BaseContainer>
      <BaseContainer title="Recent Products" size={{ xs: 12, md: 4 }}>
        <div className="">
          <Carousel />
        </div>
      </BaseContainer>
      <BaseContainer title="Order Activity" size={{ xs: 12, md: 4 }}>
        <div className=""></div>
      </BaseContainer>
    </Grid>
  );
}
