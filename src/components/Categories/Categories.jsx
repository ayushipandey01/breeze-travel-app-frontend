import axios from "axios"
import { useEffect , useState } from "react";
import "./Categories.css";

export const Categories = () => {

    const [categories , setCategories] = useState([]);
    const [numberOfcategoryToShow , setNumberOfcategoryToShow] = useState(0);

    const handleShowMoreRightClick = () => {
        setNumberOfcategoryToShow(prev => prev+10)
    };

    const handleShowMoreLeftClick = () => {
        setNumberOfcategoryToShow(prev => prev-10)
    };

    useEffect(()=>{
        (async () => {
            try {
            const {data} = await axios.get("https://breeze-travel-app.cyclic.app/api/category");
            const categoriesToShow = data.slice(numberOfcategoryToShow + 10 > data.length ? data.length - 10 : numberOfcategoryToShow,numberOfcategoryToShow > data.length ? data.length : numberOfcategoryToShow + 10);
            setCategories(categoriesToShow);
        } catch (error) {
            console.log(error);
        }
    })()
    },[numberOfcategoryToShow])

  return (
    <section className="categories d-flex align-center gap-large cursor-pointer">
        {
            numberOfcategoryToShow >=10 && (
                <button 
                className="button btn-category btn-left fixed cursor-pointer"
                onClick={handleShowMoreLeftClick}>
                <span class="material-icons-outlined">
                chevron_left
                </span>
                </button>
            )
        }
        {categories && categories.map(({ _id ,category })=> <span className="span-category" key ={_id}>{category}</span>)}
        {
            numberOfcategoryToShow - 10 < categories.length && (
                <button 
                 className="button btn-category btn-right fixed cursor-pointer"
                onClick={handleShowMoreRightClick}>
                <span class="material-icons-outlined">
                chevron_right
                </span>
                </button>
            )
        }        
    </section>
  )
}
