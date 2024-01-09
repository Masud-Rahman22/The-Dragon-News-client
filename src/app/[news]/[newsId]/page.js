import { getSingleNews } from "@/utils/getSingleNews";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";

const newsDetailsPage = async ({ params }) => {
    const { data } = await getSingleNews(params.newsId)
    console.log(data);
    return (
        <div>
            <Grid container spacing={2} sx={{
                marginTop: '5px'
            }}>
                <Grid item xs={6}>
                    <Image src={data.thumbnail_url} alt="news-image" width={1000} height={500} />
                    <Grid container spacing={2} sx={{
                        marginTop: '5px'
                    }}>
                        <Grid item xs={6}>
                            <Image src={data.image_url} alt="news-image" width={1000} height={700} />
                        </Grid>
                        <Grid item xs={6}>
                            <Image src={data.image_url} alt="news-image" width={1000} height={700} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        {data.title}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center'
                    }}>
                        <Avatar alt="Author Image" src={data.author.img} />
                        <Typography>
                            {data.author.name}
                        </Typography>
                        <Typography>
                            --- {data.author.published_date}
                        </Typography>
                    </Box>
                    <Typography style={{
                        textAlign: 'justify',
                        whiteSpace: 'pre-line',
                        margin: '10px 0px'
                    }}>
                        {data.details}
                    </Typography>
                    <Typography variant="h6" sx={{
                        marginTop: '30px'
                    }}>
                        ``Many desktop publishing packages and web page editors now use as
                        their default model text!
                    </Typography>
                    <Typography sx={{
                        margin: '10px 0px'
                    }}>--Masud Rahman</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default newsDetailsPage;