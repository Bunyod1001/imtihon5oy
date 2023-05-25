import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import React, {useState} from "react";
import translation from "../../Language";
import useLang from "../../Hook/uselang";

export default function MediaCard() {
  const productData = useSelector((store) => store.product.product);

  

  const [showMore, setShowMore] = useState(false);
  const loadMore = () => {
    setShowMore(true)
  };

  const initalProducts = !showMore && productData
    ? productData.filter((item, index) => index < 4)
    : productData;


  //   const slice = productData.slice(0,  noOfElement);

  let [lang] = useLang();
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {initalProducts &&
              initalProducts.map((product, i) => (
                <Card
                  key={i}
                  sx={{
                    maxWidth: 270,
                    marginTop: "100px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{ height: "200px" }}
                    src={product.image}
                    alt="dsc"
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {product.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      rate:{product.rating.rate}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {product.price}
                      {translation[lang].item_money}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <Button variant="text" onClick={() => loadMore()}>
              {" "}
              {translation[lang].item_more}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
