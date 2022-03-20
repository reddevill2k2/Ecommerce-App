import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React from "react";
import CardItem from "./CardItem";
import styles from "./ListCardItem.module.css";

const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2.5),
  borderRadius: "30px",
  //textAlign: "center",

  //color: theme.palette.text.secondary,
}));

function ListCardItem(props) {
  return (
    <div className={styles.listCardItem}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} columns={12}>
          {props.items.map((item) => (
            <Grid item xl={3} key={item.id}>
              <Item>
                <CardItem item={item} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ListCardItem;
