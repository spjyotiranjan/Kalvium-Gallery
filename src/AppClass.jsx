import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    let imgArr = this.imageData()
    return (
      <>
      <h1>Kalvium Gallery</h1>
      <div className='grid'>
        {imgArr.map((e)=>{
          return (
            <img src={e.img} alt="elephant" className='image'/>
          )
        })}
      </div>
    </>
    )
  }
}
