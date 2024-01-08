import { getCategoryNews } from "@/utils/getCategoryNews";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
// import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const DynamicNews = async ({ params, searchParams }) => {
    const { data: categoryNews } = await getCategoryNews(searchParams.category)
    console.log(categoryNews);
    return (
        <div className="my-10">
            <Grid container spacing={2}>
                {
                    categoryNews.map(news => (
                        <Link href={`/${news.category}/${news._id}`} key={news.id}>
                        <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia sx={{
                            '& img':{
                                width: '100%',
                                height: '250px'
                            }
                        }}>
                        <Image src={news.thumbnail_url} height={800} width={800} alt='top-news'></Image>
                        </CardMedia>
                        <CardContent>
                            <p className="px-2 py-1 bg-red-500 rounded text-white w-32 my-5">{news.category}</p>
                            <Typography gutterBottom variant="h5">
                                {news.title.length>20 ? news.title.slice(0,20)+"..." : news.title}
                            </Typography>
                            <Typography gutterBottom sx={{
                                margin: '15px 0px'
                            }}>
                                By {news.author.name} - {news.author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {news.details.length>200 ? news.details.slice(0,200)+ "..." : news.details}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                        </Link>
                    ))
                }
            </Grid>
        </div>
    );
};

export default DynamicNews;