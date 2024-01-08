"use client"

import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoryList = () => {
    const [allCategories,setAllCategories] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const {data} = await getAllCategories()
            return setAllCategories(data)
        }
        fetchData()
    },[])
    console.log(allCategories);
    return (
        <Box className='mt-5 bg-gray-100 px-5 py-2'>
            <Typography variant="h6" >Categories</Typography>
            <Divider></Divider>
            <Stack className="mt-5" rowGap={1} sx={{ mt: '2.5'}}>{allCategories.map(category=>
                <Button variant="outlined" key={category.id}>
                    <Link href={`http://localhost:3000/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
                </Button>
            )}</Stack>
        </Box>
    );
};

export default CategoryList;