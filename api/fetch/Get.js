import categories from "./categories.js"
import trends from "./trends.js"

export default function Get(route,app){
 
const exportdata = {
    categories:categories,
    trends : trends
}
    
    app.get(route , (req,res)=>{
        res.json(exportdata)
    })
}
