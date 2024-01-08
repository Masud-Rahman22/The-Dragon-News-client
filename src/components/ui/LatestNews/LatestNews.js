"use client"
import { Box, Card, Grid } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import topNewsImg from '@/assets/top-news.png'
import topNewsImg2 from '@/assets/top-news2.png'
const LatestNews = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardMedia>
                    <Image src={topNewsImg} width={800} alt='top-news'></Image>
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
            {/* card layout */}
            <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card >
                        <CardMedia>
                            <Image src={topNewsImg2} width={800} alt='top-news'></Image>
                        </CardMedia>
                        <CardContent>
                            <p className="px-2 py-1 bg-red-500 rounded text-white w-28 my-5">Technology</p>
                            <Typography gutterBottom>
                                Bitcoin Climbs As Elon Musk Says Tesla Likely To Accept It Again
                            </Typography>
                            <Typography gutterBottom sx={{
                                margin: '15px 0px'
                            }}>
                                By Masud Rahman - Jan 7 2024
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Elon Musk's indication of Tesla reconsidering Bitcoin as a payment method caused a surge in Bitcoin's value today. Excitement ensued.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={topNewsImg2} width={800} alt='top-news'></Image>
                        </CardMedia>
                        <CardContent>
                            <p className="px-2 py-1 bg-red-500 rounded text-white w-28 my-5">Technology</p>
                            <Typography gutterBottom>
                                Bitcoin Climbs As Elon Musk Says Tesla Likely To Accept It Again
                            </Typography>
                            <Typography gutterBottom sx={{
                                margin: '15px 0px'
                            }}>
                                By Masud Rahman - Jan 7 2024
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Elon Musk's indication of Tesla reconsidering Bitcoin as a payment method caused a surge in Bitcoin's value today. Excitement ensued.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={topNewsImg2} width={800} alt='top-news'></Image>
                        </CardMedia>
                        <CardContent>
                            <p className="px-2 py-1 bg-red-500 rounded text-white w-28 my-5">Technology</p>
                            <Typography gutterBottom>
                                Bitcoin Climbs As Elon Musk Says Tesla Likely To Accept It Again
                            </Typography>
                            <Typography gutterBottom sx={{
                                margin: '15px 0px'
                            }}>
                                By Masud Rahman - Jan 7 2024
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Elon Musk's indication of Tesla reconsidering Bitcoin as a payment method caused a surge in Bitcoin's value today. Excitement ensued.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={topNewsImg2} width={800} alt='top-news'></Image>
                        </CardMedia>
                        <CardContent>
                            <p className="px-2 py-1 bg-red-500 rounded text-white w-28 my-5">Technology</p>
                            <Typography gutterBottom>
                                Bitcoin Climbs As Elon Musk Says Tesla Likely To Accept It Again
                            </Typography>
                            <Typography gutterBottom sx={{
                                margin: '15px 0px'
                            }}>
                                By Masud Rahman - Jan 7 2024
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Elon Musk's indication of Tesla reconsidering Bitcoin as a payment method caused a surge in Bitcoin's value today. Excitement ensued.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;