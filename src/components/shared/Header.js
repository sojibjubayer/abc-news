import { Box, Container, Typography } from "@mui/material";
import headerImage from '@/assets/header_logo.webp';
import Image from "next/image";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const getDate = getCurrentDate();

  return (
    <Box>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '5px',
        }}
      >
        <Box sx={{ mb: 2 }}>
          {/* Center the image */}
          <Image src={headerImage} alt="headerImage" width={400} height={100} />
        </Box>
        <Typography variant="body2" color="black" textAlign="center" fontSize={18} mb={1}>
          Journalism without fear and favour.
        </Typography>
        <Typography variant="body2" color="black" textAlign="center" fontSize={15}>
          {getDate.day},{getDate.month},{getDate.date},{getDate.year}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
