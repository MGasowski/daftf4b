import { Button, ImageList, ImageListItem, Zoom } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

export default function Rick() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [_, reload] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      await fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => data.results)
        .then((results) => setImages(results.map((el: any) => el.image)));
      setLoading(false);
    };
    fetchImages();
  }, [_]);

  if (loading) return <p>"Loading..."</p>;
  return (
    <Box sx={{ minHeight: 393 }}>
      <Button onClick={() => reload(Math.random())}> Rearrange Grid</Button>

      <ImageList
        sx={{ width: "100%", height: 700 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {images.map((item) => {
          const cols = Math.floor(Math.random() * 3);
          return (
            <Zoom
              in
              key={item}
              style={{ transitionDelay: `${Math.random() * 300}ms` }}
            >
              <ImageListItem cols={cols} rows={cols}>
                <img
                  {...srcset(item, 121, cols, cols)}
                  alt={item}
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
