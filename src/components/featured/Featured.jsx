import { useRouter } from "next/router";
import { Container, ImageList, ImageListItem, Typography } from "@mui/material";
import styles from "./Featured.module.scss";

export default function Featured({ items = [] }) {
  const router = useRouter();

  const handleItemClick = (href) => {
    router.push(href);
  };

  return (
    <Container>
      <ImageList cols={6} gap={10} className={styles.imageList}>
        {items.map((item, index) => (
          <ImageListItem
            key={index}
            cols={item.cols || 1}
            rows={item.rows || 1}
            onClick={() => handleItemClick(item.href)}
          >
            <img src={item.image} alt={item.title} className={styles.image} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}