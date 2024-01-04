import { getAllCategories } from "@/utils/getAllCategories";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";


const CategoryList = async () => {

    const { data: AllCategories } = await getAllCategories()
    
    return (
        <Box>
            <Typography variant="6" 
            sx={{ width: 'full', marginX: 'auto' ,fontSize:25,fontWeight:'bold',background:'lightslategray',color:'white',
            paddingX:4
        }}>
            Categories</Typography>
            <Divider />
            <Stack rowGap={1} sx={{ mt: 2 }}>
                {
                    AllCategories.map(category =>
                        <Button key={category._id} variant="outlined">
                            <Link href={`/categories/news?category=${category.title.toLowerCase()}`} style={{textDecoration:'none'}}>
                                {category.title}
                            </Link>
                        </Button>
                    )
                }
            </Stack>

        </Box>
    );
};

export default CategoryList;