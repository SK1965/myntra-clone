export default function Post(route,app){
    app.get(route, (req,res)=>{
        res.json({message : "Hey bosadi dekh"})
    })
}