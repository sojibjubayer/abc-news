

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
import Link from 'next/link';

const LatestNews = async () => {
    const { data } = await getAllNews();

    return (
        <Box className="my-5">
            <Link href={`/${data[0].category.toLowerCase()}/${data[0]._id}`} style={{ textDecoration: 'none' }}>


                <Card sx={{ my: 2 }}>
                    <CardActionArea>
                        <CardMedia sx>
                            <Image
                                src={data[0].thumbnail_url}
                                width={800}
                                height={400}
                                alt="top news"
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography sx={{ width: '100px', background: 'red', padding: .6, borderRadius: 1, my: 2 }}

                            >
                                {data[0].category}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {data[0].title}
                            </Typography>
                            <Typography gutterBottom className="my-3">
                                By {data[0].author.name} - {data[0].author.published_date}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {data[0].details.length > 200
                                    ? data[0].details.slice(0, 200) + "..."
                                    : data[0].details}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>

            <Grid
                className="mt-5"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {data.slice(0, 4).map((news) => (
                    <Grid key={news.id} item xs={6}>
                        <Link href={`/${news.category.toLowerCase()}/${news._id}`} style={{ textDecoration: 'none' }}>
                            <Card sx={{ my: 2, height: '420px' }}>
                                <CardActionArea>
                                    <CardMedia>
                                        <Image
                                            src={news.thumbnail_url}
                                            width={800}
                                            height={200}
                                            alt="top news"
                                        />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography
                                            sx={{ width: '90px', background: 'red', paddingX: .5, borderRadius: 1, my: 2 }}

                                        >
                                            {news.category}
                                        </Typography>
                                        <Typography gutterBottom>{news.title.slice(0, 10)}</Typography>
                                        <Typography gutterBottom className="my-3">
                                            By Jubayer Hossain - Jan 03 2024
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {news.details.slice(0, 150) + '...'}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default LatestNews;
