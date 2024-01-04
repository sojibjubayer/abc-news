
'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '@/assets/logo.jpg'
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import Header from './Header';


const navItems = [
    {
        route: 'Home',
        pathname: '/'
    },
   
    {
        route: 'Category',
        pathname: '/categories/news?category=all-news'
    },
    {
        route: 'NewsPapers',
        pathname: '/newspapers'
    },
 
];


function Navbar() {


    return (
        <>
            <Header />

            <AppBar sx={{backgroundColor:'lightslategray',position:'sticky'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{display:'flex' , justifyContent:'space-between'}}>
                        <Link href='/'>
                            <Image src={logo} alt='logo' width='60' height='60' style={{marginLeft:0}} />
                        </Link>

                        <Box className='w-full text-center'>
                            {navItems.map((item) => (
                                <Link key={item} href={item.pathname} style={{marginRight:50}}>
                                    <Button sx={{color:'white'}}>{item.route}</Button>
                                </Link>
                            ))}
                        </Box>

                        <Box>
                            <Stack direction='row'
                                sx={{
                                    "& svg": {
                                        color: 'white'
                                    }
                                }}>
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
                            </Stack>
                        </Box>


                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;