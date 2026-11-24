const express=require("express");
const axios=require("axios");
const app=express();
const PORT=3000;

app.get("/nasa", async(req, res)=>
{
    try
    {
        const odgovor=await axios.get("https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=DEMO_KEY");
        const img=await axios.get(odgovor.data.hdurl, {responseType: "stream"}); 

    res.setHeader("Content-Type", "image/jpeg");
    img.data.pipe(res);
        }          
        catch(e)
        {
            res.status(500).send(e);
        }
});
app.listen(PORT, ()=>
{
    console.log(`server radi na na portu ${PORT}`);
});