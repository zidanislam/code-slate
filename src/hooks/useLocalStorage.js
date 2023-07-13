import { useEffect, useState } from 'react';

const PREFIX = 'code-slate-'

const useLocalStorage = (key, initValue) => {
    const prefixedValue = PREFIX + key;
    const [value , setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixedValue);
        if(jsonValue != null){return JSON.parse(jsonValue)}

        if(typeof initValue === "function"){
            return initValue()
        }else{
            return initValue;
        }
    })

    useEffect(()=>{
        localStorage.setItem(prefixedValue, JSON.stringify(value))
    },[prefixedValue, value])
    return [value, setValue]
};

export default useLocalStorage;