import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DiaryDispatchContext } from '../App'

import Button from '../component/Button'
import Header from '../component/Header'
import Editor from '../component/Editor'

const New = () => {
  const {onCreate} = useContext(DiaryDispatchContext);

  const onSubmit = (data) => {
    const {date,content, emotionId} = data;
    onCreate(date, content , emotionId);
    navigate("/", {replace : true});
  }

  const navigate = useNavigate();
  const goBack = () =>{
    navigate(-1);
  }
  return (
    <div>
      <Header 
        title={"Write a new diary"}
        leftChild={<Button text={"<"} onClick={goBack}/>}
      />
      <Editor onSubmit={onSubmit}/>
    </div>
  )
}

export default New