import { useEffect, useRef, useState } from "react"

export const LazyImage = ({ img }) => {
    const [visible, setVisible] = useState(false)
    const ref = useRef()

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                // setVisible(true)
            }})
        }
    

    useEffect(() => {
        let observer = new IntersectionObserver(callback)

        if (ref?.current) {
            observer.observe(ref.current)
        }

        return() => {
            observer.disconnect()
        }
    }, [])

    return visible ? (
        <img src={img} />
    ) : <div className="skeleton" ref={ref}></div>
}