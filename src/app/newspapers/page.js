import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const NewsPapers = () => {
    return (
        <>
        <Box sx={{ marginY: 2 }}>
            <Typography>
                Popular Newspaper
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <iframe
                                title="bbc"
                                src={`https://www.daily-sun.com/`}
                                style={{ width: '100%', height: '100%', minHeight: '400px' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <iframe
                                title="bbc"
                                src={`https://www.nytimes.com/`}
                                style={{ width: '100%', height: '100%', minHeight: '400px' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <iframe
                                title="bbc"
                                src={`https://observerbd.com/`}
                                style={{ width: '100%', height: '100%', minHeight: '400px' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
           
            
        </Box>
    </>
    );
};

export default NewsPapers;