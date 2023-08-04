import React from 'react'
import Button from '../component/Button'
import Header from '../component/Header'
// import { useSearchParams } from 'react-router-dom'
const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("sort"));
  return (
    <div>
      <Header
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
        />
    </div>
  )
}

export default Home