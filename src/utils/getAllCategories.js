export const getAllCategories = async()=>{
    const res = await fetch('https://the-dragon-news-server-blue-eight.vercel.app/categories')
    return res.json()
}