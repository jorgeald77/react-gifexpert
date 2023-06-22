import {useState} from "react";
import {AddCategory, GiftGrid} from "./components";

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (category) => {
        if (categories.includes(category)) return;

        setCategories([...categories, category])
    }

    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)}/>

            {categories.map(category => (
                <GiftGrid
                    key={category}
                    category={category}/>
            ))}
        </>
    )
}