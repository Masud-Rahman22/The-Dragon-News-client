export const getAllNews = async()=>{
    const res = await fetch('https://the-dragon-news-server-blue-eight.vercel.app/all-news', {
        next: {
            revalidate: 30,
        }
    })

    return res.json()
}