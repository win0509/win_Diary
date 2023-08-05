import React from 'react'
import { useContext } from 'react'
import { DiaryStateContext } from '../App'


const useDiary = (id) => {
    const data = useContext(DiaryStateContext)
    return data;
}

export default useDiary