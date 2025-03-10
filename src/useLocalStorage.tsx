import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (()=> T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
            if(jsonValue == null) {
                if(typeof initialValue === "function") {
                    return (initialValue as () => T)()
                } else {
                    return initialValue
                }
            } else {
                return JSON.parse(jsonValue)
            }
    })
// To savel the data in the local storage, when everytime when the value or the kety changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[value, key])

    return [value, setValue] as [T, typeof setValue]
}