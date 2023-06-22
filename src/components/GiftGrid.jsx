import {GiftItem} from "./GiftItem.jsx";
import {useFetchGifts} from "../hooks/useFetchGifts.js";

// eslint-disable-next-line react/prop-types
export const GiftGrid = ({category}) => {
    const {images, isLoading} = useFetchGifts(category)

    return (
        <>
            <h3>{category}</h3>

            {isLoading && (<h2>Cargando...</h2>)}

            <div className={"card-grid"}>
                {images.map(image => (
                    <GiftItem key={image.id} {...image}/>
                ))}
            </div>
        </>
    )
}