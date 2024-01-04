
import Grid from '@mui/material/Grid';
import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from '@/components/ui/Sidebar';



const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <Sidebar></Sidebar>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;