import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

const navItems = [

    {
        route: 'About',
        pathname: '/about'
    },
    {
        route: 'Contact',
        pathname: '/contact'
    },
];

const Footer = () => {
    return (
        <Box sx={{backgroundColor:'lightslategray',paddingY:'30px'}}>
            <Container >
                <Box sx={{
                    "& svg": {
                        color: 'white'
                    },
                    textAlign:'center'
                }} >

                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                </Box>
                <Box sx={{textAlign:'center'}}>
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button sx={{color:'white'}}>{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant="body2" color='white' textAlign='center'>
                    @2023 News Portal. Designed by Jubayer Sojib.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;