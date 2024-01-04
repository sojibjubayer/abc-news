import { getSingleNews } from "@/utils/getSingleNews";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
const NewsDetailPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId);
    // console.log(data);
    return (
        <Box sx={{ my: 5 }}>
            <Container>
                <Grid container  spacing={2}>
                    <Grid item xs={6}>
                        <Image
                            src={news.thumbnail_url}
                            width={500}
                            height={300}
                            alt="news"
                        />
                        <Grid container spacing={1} sx={{ mt: 2 }}>
                            <Grid item xs={6}>
                                <Image
                                    src={news.image_url}
                                    width={230}
                                    height={150}
                                    alt="news"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Image
                                    src={news.image_url}
                                    width={230}
                                    height={150}
                                    alt="news"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" component="h2">
                            {news.title}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 3,
                                alignItems: "center",
                            }}
                        >
                            <Avatar alt="author" src={news.author.img} />
                            <Typography>By {news.author.name}</Typography>
                            <Typography>Publish: {news.author.published_date}</Typography>
                        </Box>
                        <Typography
                            style={{
                                textAlign: "justify",
                                whiteSpace: "pre-line",
                                margin: "10px 0px",
                                color: "gray",
                            }}
                        >
                            {news.details}
                        </Typography>



                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailPage;
