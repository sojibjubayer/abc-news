
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Image from 'next/image';
import latest from '@/assets/younus.png'
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import {getAllNews} from '@/utils/getAllNews';


const LatestNews = async() => {
    const {data} = await getAllNews()
    console.log(data)
    
    return (
        <>
            <Box sx={{ marginY: 2 }}>
                <Typography>
                    Latest News
                </Typography>
                <Card sx={{ marginY: 2 }}>

                    <CardActionArea>
                        <CardMedia>
                            <Image src={latest} alt='latest news' width={800} />
                        </CardMedia>
                        <CardContent>
                            <Typography
                                sx={{
                                    backgroundColor: 'red',
                                    width: 60,
                                    borderRadius: 2,
                                    padding: .5
                                }}
                            >Politics</Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Punished for a crime I didn't commit: Prof Yunus
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Nobel Laureate Prof Muhammad Yunus, in his first reaction to the court verdict against him, said he was handed over a sentence for a crime he hadn’t committed
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Card sx={{ marginY: 2 }}>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={latest} alt='latest news' width={400} />
                                </CardMedia>
                                <CardContent>
                                    <Typography
                                        sx={{
                                            backgroundColor: 'red',
                                            width: 60,
                                            borderRadius: 2,
                                            padding: .5
                                        }}
                                    >Politics</Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Punished for a crime I didn't commit: Prof Yunus
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Nobel Laureate Prof Muhammad Yunus, in his first reaction to the court verdict against him, said he was handed over a sentence for a crime he hadn’t committed
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ marginY: 2 }}>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={latest} alt='latest news' width={400} />
                                </CardMedia>
                                <CardContent>
                                    <Typography
                                        sx={{
                                            backgroundColor: 'red',
                                            width: 60,
                                            borderRadius: 2,
                                            padding: .5
                                        }}
                                    >Politics</Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Punished for a crime I didn't commit: Prof Yunus
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Nobel Laureate Prof Muhammad Yunus, in his first reaction to the court verdict against him, said he was handed over a sentence for a crime he hadn’t committed
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ marginY: 2 }}>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={latest} alt='latest news' width={400} />
                                </CardMedia>
                                <CardContent>
                                    <Typography
                                        sx={{
                                            backgroundColor: 'red',
                                            width: 60,
                                            borderRadius: 2,
                                            padding: .5
                                        }}
                                    >Politics</Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Punished for a crime I didn't commit: Prof Yunus
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Nobel Laureate Prof Muhammad Yunus, in his first reaction to the court verdict against him, said he was handed over a sentence for a crime he hadn’t committed
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ marginY: 2 }}>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={latest} alt='latest news' width={400} />
                                </CardMedia>
                                <CardContent>
                                    <Typography
                                        sx={{
                                            backgroundColor: 'red',
                                            width: 60,
                                            borderRadius: 2,
                                            padding: .5
                                        }}
                                    >Politics</Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Punished for a crime I didn't commit: Prof Yunus
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Nobel Laureate Prof Muhammad Yunus, in his first reaction to the court verdict against him, said he was handed over a sentence for a crime he hadn’t committed
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default LatestNews;