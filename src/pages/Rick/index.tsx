import { ImageList, ImageListItem, Zoom } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "react-async-image";
import useApi from "../../hooks/useApi";

export default function Rick() {
  const { loading, data: images } = useApi(
    "https://rickandmortyapi.com/api/character"
  );

  if (loading) return <p>"Loading..."</p>;
  return (
    <Box sx={{ minHeight: 393 }}>
      <ImageList
        sx={{ width: "100%", height: 700 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {images.map((item: any) => {
          const cols = Math.floor(Math.random() * 3);
          return (
            <Zoom
              in
              key={item.id}
              style={{ transitionDelay: `${Math.random() * 300}ms` }}
            >
              <ImageListItem cols={cols} rows={cols}>
                <Image
                  {...srcset(item.image, 121, cols, cols)}
                  alt={item.name}
                  loading="lazy"
                />
              </ImageListItem>
            </Zoom>
          );
        })}
      </ImageList>
    </Box>
  );
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
