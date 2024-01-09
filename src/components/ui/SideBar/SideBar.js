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
import { getAllNews } from "@/utils/getAllNews";
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

// eslint-disable-next-line @next/next/no-async-client-component
const SideBar = async() => {
    const {data:allNews} = await getAllNews()
    return (
        <Box>
            <Card className="my-5">
                <CardMedia>
                    <Image src={allNews[0].thumbnail_url} width={800} height={300} alt='top-news'></Image>
                </CardMedia>
                <CardContent>
                    <p className="px-2 py-1 bg-red-500 rounded text-white w-28 my-5">{allNews[0].category}</p>
                    <Typography gutterBottom variant="h5" component="div">
                    {allNews[0].title}
                    </Typography>
                    <Typography gutterBottom sx={{
                        margin: '15px 0px'
                    }}>
                        By {allNews[0].author.name} - {allNews[0].author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {allNews[0].details.length>200 ? allNews[0].details.slice(0,200)+"..." : allNews[0].details}
                    </Typography>
                </CardContent>
            </Card>
            <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                {
                    allNews.slice(0,6).map(news => (
                        <StyledPaper key={news.id}
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Image className="rounded-full" width={50} height={50} src={news.thumbnail_url} alt='image-1'></Image>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography >{
                                news.details.length>50 ? news.details.slice(0,50)+"..." : news.details
                                }</Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
                    ))
                }
            </Box>
            <Image className="" src={bottomImgae} alt='bottom-image' width={400}></Image>
        </Box>
    );
};

export default SideBar;