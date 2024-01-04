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
import latest2 from '@/assets/latest.jpg'
import Link from 'next/link';




const Sidebar = () => {
    return (
        <>
            <Box sx={{ marginY: 2 }}>
                <Typography>
                    Popular News
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
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
                <Box sx={{
                    display: 'flex',
                    gap: 1
                }}>
                    <Image src={latest2} width={100} height={80} alt='popular card' />
                    <Box>
                        <Typography variant='body' sx={{ display: 'block', fontWeight: 'bold' }}>
                            Metro rail now stops at Shahbagh, Karwan Bazar stations
                        </Typography>
                        <Typography variant='body2'>
                            Metro rail now stops at Shahbagh, Karwan Bazar stations
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    marginY: 2
                }}>
                    <Image src={latest2} width={100} height={80} alt='popular card' />
                    <Box>
                        <Typography variant='body' sx={{ display: 'block', fontWeight: 'bold' }}>
                            Metro rail now stops at Shahbagh, Karwan Bazar stations
                        </Typography>
                        <Typography variant='body2'>
                            Metro rail now stops at Shahbagh, Karwan Bazar stations
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 1
                }}>
                    <Image src={latest2} width={100} height={80} alt='popular card' />
                    <Box>
                        <Typography variant='body' sx={{ display: 'block', fontWeight: 'bold' }}>
                            Metro rail now stops at Shahbagh, Karwan Bazar stations
                        </Typography>
                        <Typography variant='body2'>
                            Metro rail now stops at Shahbagh, Karwan Bazar stations
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    marginY: 2
                }}>
                    <Image src={latest2} width={100} height={80} alt='popular card' />
                    <Box>
                        <Typography variant='body' sx={{ display: 'block', fontWeight: 'bold' }}>
                            Metro rail now stops at Shahbagh, Karwan Bazar stations
                        </Typography>
                        <Typography variant='body2'>
                            Metro rail now stops at Shahbagh, Karwan Bazar stations
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 1
                }}>
                    <Image src={latest2} width={100} height={80} alt='popular card' />
                    <Box>
                        <Typography variant='body' sx={{ display: 'block', fontWeight: 'bold' }}>
                            Metro rail now stops at Shahbagh, Karwan Bazar stations
                        </Typography>
                        <Typography variant='body2'>
                            Metro rail now stops at Shahbagh, Karwan Bazar stations
                        </Typography>
                    </Box>
                </Box>
                <Link href='/go'>
                    <Box sx={{
                        display: 'flex',
                        gap: 1,
                        marginY: 2
                    }}>
                        <Image src={latest2} width={100} height={80} alt='popular card' />
                        <Box>
                            <Typography variant='body' sx={{ display: 'block', fontWeight: 'bold' }}>
                                Metro rail now stops at Shahbagh, Karwan Bazar stations
                            </Typography>
                            <Typography variant='body2'>
                                Metro rail now stops at Shahbagh, Karwan Bazar stations
                            </Typography>
                        </Box>
                    </Box>
                </Link>
            </Box>
        </>
    );
};

export default Sidebar;