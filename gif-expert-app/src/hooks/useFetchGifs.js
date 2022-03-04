import { useEffect, useState } from "react"
import { gifFetch } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        gifFetch(category)
            .then( imgs => {

                setTimeout(()=> {
                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 2000)

            });
    }, [ category ])

    return state;
}