import React from 'react'
import Button from '../component/Button'
import Header from '../component/Header'
import Editor from '../component/Editor'
import DiaryList from '../component/DiaryList'

import { useState, useContext, useEffect} from 'react';
import { DiaryStateContext } from '../App';

import { getMonthRangeByDate } from '../util';
// import { useSearchParams } from 'react-router-dom'
const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivoDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  const headerTitle = `${pivotDate.getFullYear()}년
                        ${pivotDate.getMonth() +1}월`;

  useEffect(()=> {
    if(data.length >=1){
      const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    }else{
      setFilteredData([]);
    }
  }, [data, pivotDate]);                      
  
  const onIncreaseMonth = () =>{
    setPivoDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivoDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1));
  };
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("sort"));
  return (
    <div>
      <Header 
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
      />
      <DiaryList data={filteredData}/>
    </div>
  )
}

export default Home

{/* <Editor
initDate={{
  date: new Date().getTime(),
  emotionId: 1,
  content: "이전에 작성했던 일기"
}}
onSubmit={() => {
  alert("작성 완료!");
}}
/> */}

{/* <Header
        title ={"Home"}
        leftChild={
          <Button
            type="positive"
            text={"긍정 버튼"}
            onClick={() => {
              alert("positive button");
            }}
          />
        }
        rightChild={
          <Button
            type="negative"
            text={"부정 버튼"}
            onClick={() => {
              alert("negative button");
            }}
          />
          }
        /> */}