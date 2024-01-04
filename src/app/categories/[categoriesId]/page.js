import { getCategoryNews } from "@/utils/getCategoryNews";
import  Box  from "@mui/material/Box";
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async ({  searchParams }) => {

  const { data } = await getCategoryNews(searchParams.category);
 
  return (
    <Box className="my-5">
      
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`} style={{textDecoration:'none'}}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      width={800}
                      height={100}
                      alt="top news"
                    />
                  </CardMedia>
                  <CardContent>
                    <span
                      className="
                      bg-red-500
                      px-2
                      text-white
                      my-3
                      rounded
                      "
                    >
                      {news.category}
                    </span>
                    <Typography gutterBottom variant="h6">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom className="my-2">
                      By {news.author.name} - {news.author.published_date}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicNewsPage;
