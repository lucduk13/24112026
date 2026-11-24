const express=require("express");
const axios=require("axios");
const app=express();
const PORT=3000;

app.get("/photo", async(req, res)=>
{
    try
        {
            const odgovor=await axios.get("https://api.unsplash.com/photos/?client_id=R-2AwekEGK6owLbGjw_j0atYQpyVlsFMTGuNpdb1nLI");
            const img=await axios.get(odgovor.data[0].urls.raw, {responseType: "stream"}); 

        res.setHeader("Content-Type", img.headers("content-type"));
        img.data.pipe(res);
            }          
            catch(e)
            {
                res.status(500).send("ne možemo dohvatiti fotografiju");
            }
});

app.listen(PORT, ()=>
{
    console.log(`server radi na na portu ${PORT}`);
});