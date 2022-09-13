const app=require("express")();

const PORT = provess.env.PORT || 3000

app.get("",(req, res)=>{
    res.send("Hello World");
});

app.listen(PORT,()=>{
    console.log('App up at port ${PORT}');

});