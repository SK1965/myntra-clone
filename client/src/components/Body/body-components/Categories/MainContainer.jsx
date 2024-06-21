import SubContainer from "./SubContainer";
import Header from "./Header";

export default function MainContainer({ Categoriesdata }) {
	console.log(Categoriesdata)
  const categories = [
    {
      imgurl: "",
      catname: "Shirts/T-shirts"
    },
    {
      imgurl: "",
      catname: "Jeans/Pants"
    },
    {
      imgurl: "",
      catname: "SweatShirts"
    },
    {
      imgurl: "",
      catname: "Traditionals"
    },
    {
      imgurl: "",
      catname: "Tops/Frocks"
    },
    {
      imgurl: "",
      catname: "Shorts"
    },
    {
      imgurl: "",
      catname: "PartyWears"
    },
    {
      imgurl: "",
      catname: "Kids"
    },
    {
      imgurl: "",
      catname: "Essentials"
    }
  ];

  return (
    <div className="w-full min-h-[500px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <Header />
      <SubContainer Categoriesdata={Categoriesdata}/>
    </div>
  );
}
