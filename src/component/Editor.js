import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { emotionList, getFormattedDate } from '../util';
import Button from './Button';
import "./Editor.css"
import EmotionItem from './EmotionItem';

const Editor = ({initDate, onSubmit}) => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        date:getFormattedDate(new Date()),
        emotionId:3,
        content:"",
    });
    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
      });
    };

    const handleChangeContent = (e) => {
        setState({
            ...state,
            content:e.target.value,
        });
    };

    // 작성완료 버튼기능 구현
    const handleSubmit = () => {
        onSubmit(state);
    }

    //취소하기 버튼 기능 구현
    const handleOnGoBack = () => {
        navigate(-1);
    };

    const handleChangeEmotion = (emotionId) => {
        setState({
            ...state,
            emotionId,
        });
    };

    // const handleSubmit = () => {
    //     onSubmit(state);
    // }

    useEffect(() => {
        if(initDate){
            setState({
                ...initDate,
                date: getFormattedDate(new Date(parseInt(initDate.date))),
            });
        }
    },[initDate]);
  return (
    <div className='Editor'>
        <div className='editor_section'>
            <h4>오늘의 날짜</h4>
            <div className='input_wrapper'>
                <input type='date' value={state.date} onChange={handleChangeDate}/>
            </div>
        </div>
        <div className='editor_section'>
            <h4>오늘의 감정</h4>
            <div className='input_wrapper emotion_list_wrapper'>
                {emotionList.map((it) =>(
                    <EmotionItem 
                        key={it.id}
                        {...it}
                        onClick={handleChangeEmotion}
                        isSelected={state.emotionId === it.id}
                    />
                ))}
            </div>
        </div>
        <div className='editor_section'>
            <h4>오늘의 일기</h4>
            <div className='input_wrapper'>
                <textarea 
                    placeholder='오늘은 어땠나요?'
                    value={state.content}
                    onChange={handleChangeContent}
                />
            </div>
        </div>
        <div className='editor_section bottom_section'>
            <Button text={"취소하기"} onClick={handleOnGoBack}/>            
            <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit}/>            
        </div>
    </div>
  )
};

export default Editor