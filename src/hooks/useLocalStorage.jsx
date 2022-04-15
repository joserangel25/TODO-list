import React, { useState, useEffect } from 'react';

export function useLocalStorage (itemName, initialValue) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
    useEffect(()=>{
        setTimeout(()=> {
            try {
                const itemGuardado = window.localStorage.getItem(itemName)
                const todos = itemGuardado ? JSON.parse(itemGuardado) : initialValue;
                setItem(todos);
                setLoading(false);
            } catch (error) {
                setError(error)
            }
        }, 2000);
    })
    

    const setValue = (value) => {
        try {
            setItem(value)
            window.localStorage.setItem(itemName, JSON.stringify(value))
        } catch (error) {
            setError(error)
        }
    } 

    return {item, setValue, loading, error};
}


//original
/*
export function useLocalStorage (itemName, initialValue) {
    
    const [item, setItem] = useState(()=> {
        try {
            const itemGuardado = window.localStorage.getItem(itemName)
            return itemGuardado ? JSON.parse(itemGuardado) : initialValue 
        } catch (error) {
            console.log(error)
        }
    });

    const setValue = (value) => {
        try {
            setItem(value)
            window.localStorage.setItem(itemName, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    } 

    return [item, setValue]
}
*/