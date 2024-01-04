
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from '@/components/ui/Sidebar';



const HomePage = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;