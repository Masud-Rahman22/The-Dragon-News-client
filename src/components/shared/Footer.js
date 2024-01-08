"use client"
import { Box, Container, IconButton, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";


const Footer = () => {
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
            pathName: '/category'
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
    return (
        <Box sx={{
            backgroundColor: 'black',
            padding: '40px 8px'
        }}>
            <Container>
            <Box className='w-full text-center' sx={{
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
                    </Box>
            </Container>
            <Box className='w-full text-center my-10'>
                        {navItems.map((item) => (
                            <Link className='text-white mr-5 uppercase' key={item} href={item.pathName}>
                                {item.route}
                            </Link>
                        ))}
                    </Box>
                    <Typography textAlign='center' variant="body2" color='gray'>
                        @2023 the dragon news. Designed by Programming Hero.
                    </Typography>
        </Box>
    );
};

export default Footer;