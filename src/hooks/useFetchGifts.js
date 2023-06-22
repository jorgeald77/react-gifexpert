import {useEffect, useState} from "react";
import {getGifts} from "../helpers/getGifts.js";

export const useFetchGifts = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async () => {
        setImages(await getGifts(category))
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        images,
        isLoading: isLoading
    }
}