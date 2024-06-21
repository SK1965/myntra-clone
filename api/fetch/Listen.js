export default function Listen(port ,app){
    app.listen(port , ()=>{
        console.log("Connected Successfully to https://localhost:3000/")
    })
}