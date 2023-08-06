import React from 'react'
import { emotionList } from '../util'

import "./Viewer.css"

const Viewer = ({content, emotionId}) => {
    const emotionItem = emotionList.find((it) => it.id === emotionId);
    // console.log(emotionItem);
  return (
    <div className='Viewer'>
        <section>
            <h4>Emotion</h4>
            <div
                className={[
                    "emotion_img_wrapper",
                    `emotion_img_Wrapper_${emotionId}`,
                ].join(" ")}
            >
                <img alt={emotionItem.name} src={emotionItem.img}/>
                <div className='emotion_descript'>{emotionItem.name}</div>
            </div>
        </section>
        <section>
            <h4>Today's diary</h4>
            <div className='content_wrapper'>
                <p>{content}</p>
            </div>
        </section>
    </div>
  )
}

export default Viewer