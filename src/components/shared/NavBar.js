"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import { IconButton, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import Header from './Header';
const navItems = [
    {
        route: 'Home',
        pathName: '/'
    },
    {
        route: 'Pages',
        pathName: '/page'
    },
    {
        route: 'Category',
        pathName: '/categories/news?category=all-news'
    },
    {
        route: 'News',
        pathName: '/news'
    },
    {
        route: 'Posts',
        pathName: '/post'
    },
    {
        route: 'contact',
        pathName: '/contact'
    },
];

function NavBar() {

    return (
        <>
        <Header></Header>
        <AppBar className='bg-black' position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src={logo} alt='logo' width={50} height={50}></Image>
                    <Box className='w-full text-center'>
                        {navItems.map((item) => (
                            <Link className='text-white mr-5 uppercase' key={item} href={item.pathName}>
                                {item.route}
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Stack direction='row' sx={{
                            '& svg': {
                                color: 'white'
                            }
                        }}>
                        <IconButton>
                            <InstagramIcon></InstagramIcon>
                        </IconButton>
                        <IconButton>
                            <FacebookIcon></FacebookIcon>
                        </IconButton>
                        <IconButton>
                            <TwitterIcon></TwitterIcon>
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon></LinkedInIcon>
                        </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    );
}
export default NavBar;