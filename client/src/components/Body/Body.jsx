/* eslint-disable react/react-in-jsx-scope */
import Trending from "./body-components/Trending/Trending"
import Categories from "./body-components/Categories/Categories"
export default function Body({data}){
    
    // eslint-disable-next-line react/react-in-jsx-scope
    return <div className=" px-4 py-16 block justify-center">
     <Trending data ={data.trends}></Trending>
     <Categories Categoriesdata = {data.categories} />
    </div>
}