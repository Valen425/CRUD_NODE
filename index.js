const express =require('express');
const app =express();
app.get('/',(req,res)=>{
    res.send('Mi primera pagina');
});
app.listen(3000, ()=>{
    console.log('servidor corriendo en http://localhost:3000');
})