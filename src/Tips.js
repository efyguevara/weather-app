import React from 'react';
import './Tips.css';
import tips from './dataTips';

function Tips(props) {

  const giveMeTipsBy = (temp) => {
    changeBg(props.temp);
    
    if (temp <= 15) {
      return tips.Frio;
    }
    if (temp >= 16 && temp <= 26) {
      return tips.Normal;
    }
    if (temp >= 27 && temp <= 30) {
      return tips.Calor;
    }
    return [];
  }

  const changeBg = (temp) => {
    const background = document.getElementById('tips');
    if (background) {
      if (temp <= 15) {
        background.classList.add("cold");
      }
      if (temp >= 16 && temp <= 26) {
        background.classList.add("normal");
      }
      if (temp >= 27 && temp <= 30) {
        background.classList.add("heat");
      }
    }
  }

  const tipList = () => {
    let list = [];
    giveMeTipsBy(props.temp).forEach((el, index) => {
      list.push(<li key={index}>{el}</li>)
    })
    return list;
  }
  return (
      <>
        <p>Tips</p>
        <div id="tipList">
          <ul>{tipList()}</ul>
        </div>
      </>
  )
}

export default Tips;