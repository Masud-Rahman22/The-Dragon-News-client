"use client"
import { Box, Card, Grid } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import topNewsImg from '@/assets/top-news.png'
import topNewsImg2 from '@/assets/top-news2.png'
import { getAllNews } from "@/utils/getAllNews";
// eslint-disable-next-line @next/next/no-async-client-component
const LatestNews = async() => {
    const {data:allNews} = await getAllNews()
    // console.log(allNews[0]);

    return (
        <Box className="my-5">
            <Card>
                <CardMedia>
                    <Image src={allNews[0].thumbnail_url} width={800} height={500} alt='top-news'></Image>
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
            {/* card layout */}
            <Grid sx={{marginTop: '10px'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    allNews.slice(0,4).map(news => (
                        <Grid key={news.id} item xs={6}>
                    <Card >
                        <CardMedia sx={{
                            '& img':{
                                width: '100%',
                                height: '250px'
                            }
                        }}>
                            <Image src={news.thumbnail_url} width={800} height={300} alt='top-news'></Image>
                        </CardMedia>
                        <CardContent>
                            <p className="px-2 py-1 bg-red-500 rounded text-white w-28 my-5">{news.category}</p>
                            <Typography gutterBottom>
                                {news.title.length>50 ? news.title.slice(0,50)+"..." : news.title}
                            </Typography>
                            <Typography gutterBottom sx={{
                                margin: '15px 0px'
                            }}>
                                By {news.author.name} - {news.author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {news.details.length>200 ? news.details.slice(0,200)+"..." : news.details}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default LatestNews;