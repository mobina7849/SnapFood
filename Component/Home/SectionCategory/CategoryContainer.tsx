import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CategoryCards from "./CategoryCard";

import pizza from "../../../Assets/Images/HomeImages/CategoryImages/pizza.jpg";
import berger from "../../../Assets/Images/HomeImages/CategoryImages/berger.jpg";
import sandwitch from "../../../Assets/Images/HomeImages/CategoryImages/sandwitch.jpg";
import sokhary from "../../../Assets/Images/HomeImages/CategoryImages/sokhary.jpg";
import salad from "../../../Assets/Images/HomeImages/CategoryImages/salad.jpg";
import pasta from "../../../Assets/Images/HomeImages/CategoryImages/pasta.jpg";
import { StaticImageData } from "next/image";

export interface CategoryTypes {
  id: number;
  pic: StaticImageData;
  title: string;
}
const categorydata: CategoryTypes[] = [
  { id: 1, pic: pizza, title: "پیتزا" },
  { id: 2, pic: berger, title: "برگر" },
  { id: 3, pic: sandwitch, title: "ساندویچ" },
  { id: 4, pic: sokhary, title: "سوخاری" },
  { id: 5, pic: salad, title: "سالاد" },
  { id: 6, pic: pasta, title: "پاستا" },
];

const CategoryContainer = () => {
  return (
    <Grid xs={11} sx={{ direction: "rtl" }}>
      <Grid p={3} mr={{ md: 4 }}>
        <Typography variant="subtitle2" sx={{ color: "rgb(83, 86, 92)" }}>
          دسته‌بندی‌ ها
        </Typography>
      </Grid>
      <Grid
        display={"flex"}
        height={{ md: 200 }}
        xs={12}
        sx={{
          flexWrap: { xs: "nowrap", sm: "wrap" },
          overflowX: { xs: "scroll", sm: "hidden" },
          mr: { md: 8 },
        }}
        gap={4}
      >
        {categorydata.map((item) => (
          <CategoryCards {...item} />
        ))}
      </Grid>
    </Grid>
  );
};

export default CategoryContainer;
