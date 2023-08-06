import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { getFormattedDate } from '../util';

import useDiary from '../hooks/useDiary';
import Button from '../component/Button';
import Header from '../component/Header';
import Viewer from '../component/Viewer';


const Diary = () => {
  const {id} = useParams();
  const data = useDiary(id);
  // console.log(data);
  const navigate = useNavigate();
  const goBack = () =>{
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  }; 

  if(!data){
    return <div>일기를 불러오고 있습니다...</div>;  
  }else{
    const {date, emotionId, content} = data;
    const title = `${getFormattedDate(new Date(Number(date)))}`;
  return (
    <div>
      <Header 
        title={title}
        leftChild={<Button text={"<"} onClick={goBack}/>}
        rightChild={<Button text={"수정"} onClick={goEdit}/>}
      />
      <Viewer content={content} emotionId={emotionId}/>
    </div>
    );
  }
};

export default Diary