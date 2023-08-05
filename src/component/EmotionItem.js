import React from 'react'
import "./EmotionItem.css"

const EmotionItem = ({id, img, name, onClick, isSelected}) => {
    const handleOnClick = () =>{
        onClick(id);
    }
  return (
    <div className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,
    ].join(" ")}
        onClick={handleOnClick}
    >
        
    </div>
  )
}

export default EmotionItem