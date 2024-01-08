"use client"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sideBarNews from '@/assets/side-top-news.png'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import bottomImgae from '@/assets/side-bottom-img.png'
import img1 from '@/assets/3d-render-globe-abstract.jpg'
import img2 from '@/assets/19385.jpg'
import img3 from '@/assets/business-concept-glass-world-laptop.jpg'
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
}));

const message1 = `Bitcoin's value rises after Elon Musk suggests Tesla might resume accepting it, hinting at renewed cryptocurrency support by the company.`;
const message2 = `Bitcoin's price soars following Elon Musk's indication of Tesla's possible return to accepting the cryptocurrency, fueling market enthusiasm and investor interest.`;
const message3 = `Elon Musk's hinted potential for Tesla to re-embrace Bitcoin as a payment option triggered a surge in Bitcoin's value, boosting market optimism.`;

const SideBar = () => {
    return (
        <Box>
            <Card className="my-5">
                <CardMedia>
                    <Image src={sideBarNews} width={800} alt='top-news'></Image>
                </CardMedia>
                <CardContent>
                    <p className="px-2 py-1 bg-red-500 rounded text-white w-28 my-5">Technology</p>
                    <Typography gutterBottom variant="h5" component="div">
                        Bitcoin Climbs As Elon Musk Says Tesla Likely To Accept It Again
                    </Typography>
                    <Typography gutterBottom sx={{
                        margin: '15px 0px'
                    }}>
                        By Masud Rahman - Jan 7 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        In a significant development for cryptocurrency enthusiasts, Bitcoin's value surged as Elon Musk hinted at Tesla's potential reacceptance of the digital currency. Musk's announcement sparked investor optimism, causing Bitcoin's price to rise. This statement signals a potential revival of Tesla's support for Bitcoin as a mode of payment for its products.
                    </Typography>
                </CardContent>
            </Card>
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Image className="rounded-full" width={50} height={50} src={img1} alt='image-1'></Image>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography >{message1}</Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                        <Image className="rounded-full" width={50} height={50} src={img2} alt='image-1'></Image>
                        </Grid>
                        <Grid item xs>
                            <Typography>{message2}</Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                        <Image className="rounded-full" width={50} height={50} src={img3} alt='image-1'></Image>
                        </Grid>
                        <Grid item xs>
                            <Typography>{message3}</Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
            </Box>
            <Image className="lg:ml-10" src={bottomImgae} alt='bottom-image' width={300}></Image>
        </Box>
    );
};

export default SideBar;