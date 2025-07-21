import { Button, Divider, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <div>
      <Typography variant="h5" fontWeight="bold">
        Carousel with header
      </Typography>
      <Stack marginTop="1rem" className="">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className=""
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          {Array(3)
            .fill()
            .map((_, i) => `i_${i}`)
            .map((s, i) => (
              <SwiperSlide key={i}>
                <img
                  src="/images/noPhoto.jpg"
                  alt={s}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Stack>
      <Typography variant="h6" color="#a9a9a9" marginTop="1rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        aspernatur!
      </Typography>
      <Stack
        justifyContent={"space-between"}
        flexDirection="row"
        marginTop="1.5rem"
      >
        <Typography color="#4E71FF" variant="h6" component="h">
          Card Link
        </Typography>
        <Typography color="#4E71FF" variant="h6" component="h">
          Card Link
        </Typography>
      </Stack>
      <Divider />
      <Stack
        marginTop=".5rem"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography>3 days ago</Typography>
        <Stack justifyContent={"center"} flexDirection="row" gap={1}>
          <Button
            style={{
              backgroundColor: "#0ABAB5",
              color: "#fff",
              borderRadius: "3rem"
            }}
          >
            Online
          </Button>
          <Button
            style={{
              backgroundColor: "#ED3500",
              color: "#fff",
              borderRadius: "3rem"
            }}
          >
            Customer
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
