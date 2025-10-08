
import axios from "axios"
import { useEffect, useState } from "react"


const useApps  = () => {
    const [apps, setapps] = useState([])
    const [loader, setloader] = useState(true)

    useEffect( () => {
        setloader(true)
         axios('../data.json').then((res) => {
            setapps(res.data)
         })
          .finally(() => setloader(false))
    },[])

    return {apps, loader}
}

export default useApps