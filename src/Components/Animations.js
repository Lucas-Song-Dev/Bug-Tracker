import React, { Component, useState } from "react";
import styled, { keyframes } from "styled-components";

function TitleAnimation() {
  const TitleArray = "LUCAS SONG".split("");
  const CreatedByArray = "DESIGNED".split("");
    return (
      <>
        <WrapperTitle>
        {CreatedByArray.map((item, index) => (
            <span key={index}>{item} </span>
          ))}
        </WrapperTitle>
      </>
    );
  }


const animationTitle = keyframes`
0% {opacity: 0; transform: translateY(-200px) skewY(10deg) skewX(5deg) rotateZ(5deg); filter: blur(10px); z-index: 200;}
25% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);z-index: 200;
75% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);z-index: 200;
100% {opacity: 0; transform: translateY(100px) skewY(10deg) skewX(5deg) rotateZ(5deg); filter: blur(10px);z-index: 200;}
`;

const fontFamily = `
  @font-face {
  font-family: "Comfortaa";
  src: url("./Fonts/Comfortaa/static/Comfortaa-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}`

const WrapperTitle = styled.span`
display: inline-block;
span{
  ${fontFamily}
  font-family: "Comfortaa";
  color: black;
  opacity: 0;
  animation-name: ${animationTitle};
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite ;
  
  user-select: none
  
  position: fixed;
  width: 10vw;
  text-align: center;
  font-size: 10vw;
  z-index: 3;
  user-select: none;
  overflow: hidden;
}
span:nth-child(1){
  animation-delay:0.2s;
  right: 27vw;
}
span:nth-child(2){
  animation-delay:0.4s;
  right: 23.65vw;

}
span:nth-child(3){
  animation-delay:0.6s;
  right: 21vw;
}
span:nth-child(4){
  animation-delay:0.8s;
  right: 18.9vw;
}
span:nth-child(5){
  animation-delay:0.5s;
  right: 15vw;
}
span:nth-child(6){
  animation-delay:0.6s;
  right: 12vw;
}
span:nth-child(7){
  animation-delay:0.7s;
  right: 9.3vw;
}
span:nth-child(8){
  animation-delay:0.8s;
  right: 6.1vw;
}
span:nth-child(9){
  animation-delay:0.9s;
  right: 3.1vw;
}
span:nth-child(10){
  animation-delay:1s;
  right: 0vw;
}
`;

export default TitleAnimation;
