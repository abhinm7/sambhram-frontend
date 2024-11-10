import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, IconButton, Pagination, PaginationItem } from "@mui/material";
import React, { useState } from "react";

const CarouselComponent = () => {
  const images = [
    "https://media.istockphoto.com/id/155673177/photo/two-chinese-dragons-for-chinese-new-year.jpg?s=612x612&w=0&k=20&c=sdQtNp_R1uUodt_xPxx_cIEmbXDHOBwE4hORgQLme8U=",
    "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/10/USAT/74045302007-dragon-boat-festival-races-01.jpg?crop=4314,2427,x42,y394&width=1600&height=800&format=pjpg&auto=webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlbK8rzQmHDE9F4zVPjjesyZujSweWBUM7w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY41W0e_e_9xTbxeSo_1NhhfjPK589i8NJlA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3G-0_S2nzGt8Iy2ALTeXZ8oGlb-5c98fKw&s",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlePaginationChange = (_, index) => {
    setCurrentIndex(index - 1);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="592px"
      height="308px"
      alignItems="center"
      gap={2}
      px={4}
      py={2}
      position="relative"
    >
      {/* Display the current image */}
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        width="100%"
        height="100%"
        flex={1}
        style={{ objectFit: "cover", borderRadius: 8 }}
      />

      {/* Pagination and navigation controls */}
      <Box display="flex" alignItems="center" justifyContent="center" gap={1} p={1}>
        <IconButton onClick={handlePrevious}>
          <ArrowLeftIcon fontSize="small" />
        </IconButton>

        <Pagination
          count={images.length}
          page={currentIndex + 1}
          onChange={handlePaginationChange}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#7b61ff",
                  borderRadius: "50%",
                },
                "&": {
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: "carouselgray",
                  opacity: item.selected ? 1 : 0.5,
                },
              }}
            />
          )}
        />

        <IconButton onClick={handleNext}>
          <ArrowRightIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CarouselComponent;
