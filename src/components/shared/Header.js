"use client"

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import titleImg from '@/assets/The Dragon News.png'
import { getCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box className="w-full my-5">
            <Container>
                <Image className=" mx-auto" src={titleImg} alt='title' width={500} height={500}></Image>
            </Container>
            <Typography textAlign='center' variant="h6" color='gray'>
                        Journalism without fear or favour.
                    </Typography>
            <Typography textAlign='center' variant="h5">
                        {currentDate}
                    </Typography>
        </Box>
    );
};

export default Header;