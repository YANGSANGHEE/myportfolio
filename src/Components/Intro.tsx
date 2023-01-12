import styled, { keyframes } from 'styled-components';
import { useRef, useState, useEffect } from 'react';

const Write = keyframes`
  0%{
    stroke-dashoffset: 2434;
  }
  100%{
    stroke-dashoffset: 0;
  }
`;

const IntroWrap = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 3;
  &.on {
    z-index: 1;
    background: radial-gradient(
      72.87% 72.87% at 50% 48.19%,
      rgba(228, 250, 255, 0) 16.67%,
      rgba(188, 201, 204, 0.257727) 44.27%,
      rgba(122, 129, 131, 0.426549) 64.06%,
      rgba(42, 42, 43, 0.63) 87.5%
    );
  }
  & > div {
    position: relative;
    width: inherit;
    height: inherit;
    z-index: 5;
    & > img:nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      transition: linear 0.8s;
      &.active {
        transform: translateY(-1000px);
      }
    }
    & > img:nth-child(2) {
      position: absolute;
      bottom: 0;
      left: 0;
      transition: linear 0.8s;
      &.active {
        transform: translateY(500px);
      }
    }
    & > img:nth-child(3) {
      position: absolute;
      bottom: 0;
      left: 0;
      transition: linear 0.8s;
      &.active {
        transform: translateX(-1000px);
      }
    }
    & > div {
      position: relative;
      z-index: 10;
      transition: linear 0.5s;
      svg#layer_1 {
        position: absolute;
        width: 70rem;
        right: 10%;
        top: 33vh;
        path.cls-1 {
          animation: ${Write} 7s linear forwards;
        }
      }
      svg#layer_2 {
        position: absolute;
        width: 65rem;
        right: 0%;
        top: 45vh;
        path.cls-1 {
          animation: ${Write} 7s 4s linear forwards;
        }
      }
      path.cls-1 {
        stroke: #ffc700;
        fill: none;
        stroke-width: 5;
        stroke-dashoffset: 2434;
        stroke-dasharray: 2434;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      &.active {
        opacity: 0;
        z-index: -999;
      }
    }
  }
`;
const Intro = ({
  getView,
  sendClass,
}: {
  getView: (view: string) => void;
  sendClass: string;
}) => {
  const [active, setActive] = useState('');
  const [imgs, setImgs] = useState('');

  useEffect(() => {
    const promi = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        setActive('active');
      }, 8300);
      resolve();
    });
    promi.then(() => {
      setTimeout(() => {
        setImgs('active');
      }, 9300);
    });
    promi.then(() => {
      setTimeout(() => {
        getView('active');
      }, 11000);
    });
  }, [active]);
  return (
    <IntroWrap className={sendClass}>
      <div>
        <img src='/img/intro_top.png' className={imgs} alt='top'></img>
        <img src='/img/intro_bttom.png' className={imgs} alt='bttom'></img>
        <img src='/img/intro_left.png' className={imgs} alt='left'></img>
        <div className={active}>
          <svg
            id='layer_1'
            data-name='layer_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 371.02 204.59'
          >
            <path
              className='cls-1'
              d='M67.79,79.84C63.12,69,46.42,67.94,37.65,75.9S26.88,97,28.27,108.78c.7,5.87,3.71,13,9.62,12.93,3.08-.06,5.66-2.21,8-4.19,8-6.76,17.72-13.2,28.16-12,15.39,1.74,24.32,19.84,22.38,35.2-1.56,12.25-9.94,24.85-22.22,26.13-2.9.31-6.38-.4-7.56-3.06-.81-1.81-.26-3.91.35-5.79a109.27,109.27,0,0,1,31.27-47.81c2.42-2.14,5.13-4.27,8.35-4.63,8.16-.91,12.83,9.48,12.35,17.68-.28,5-1.69,10.29-5.55,13.48s-10.64,3-13.09-1.34a11.1,11.1,0,0,1-1.09-5.81,30.62,30.62,0,0,1,9.34-21.08,8.58,8.58,0,0,1,4.26-2.54c7.38-1.24,7.93,12,14.7,15.24,4.44,2.1,9.93-1.53,11.42-6.21s0-9.78-1.9-14.29-4.39-8.92-5-13.8L144,114.54c-2.36-10.77-3.78-23.81,4.43-31.16a4.85,4.85,0,0,1,3.79-1.55,5.43,5.43,0,0,1,3.09,2.41,68,68,0,0,1,10.91,21.54c-.5-4.64,1-9.23,2.12-13.77s1.81-9.5-.19-13.72-7.67-7-11.55-4.35c-4.17,2.78-2.93,10.21,1.66,12.21s10.37-1.11,12.11-5.82-.05-10.2-3.51-13.83a215,215,0,0,1,21.91,55.7c.92,3.87,1.74,7.94.79,11.81s-4.2,7.47-8.18,7.52c-5.27.06-8.77-5.81-9-11.07-1-18.09,20-29,27.47-45.5,6.65-14.68,1.78-31.74-3.15-47.08,6.85,22.28,13.83,44.88,26.4,64.52-2.7-11.88-5.26-24.93.32-35.76,1.23-2.38,3-4.72,5.63-5.41,4.42-1.17,8.57,3.08,9.89,7.45s1,9.14,2.47,13.46,6,8.28,10.3,6.63c2.79-1.09,4.26-4.08,5.31-6.87a79.9,79.9,0,0,0,4.12-15.34,6.71,6.71,0,0,0-.2-4.07c-1.61-3.33-7-2-9.12,1.07-4.38,6.28-.64,15.92,6.31,19.12s15.52.9,21.37-4,9.43-12,12.11-19.2c1.8-4.84,2.91-11.16-1.08-14.44-3.31-2.72-8.63-1.49-11.55,1.65s-4,7.57-4.44,11.83c-.56,4.9-.44,10.22,2.38,14.26,6.09,8.72,19.61,6,29.15,1.33a141.12,141.12,0,0,0,46-36.38'
            />
          </svg>
          <svg
            id='layer_2'
            data-name='layer2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 371.02 204.59'
          >
            <path
              className='cls-1'
              d='M65.77,123.7l-3-2.87c2.18-5,9.71-5.49,14.12-2.23s6.44,8.74,8.24,13.91l18.1,51.91A190.49,190.49,0,0,0,92.89,155c-3.27-7.3-7.07-14.63-7.61-22.6-.9-13.29,8.72-26.53,21.63-29.8a13.44,13.44,0,0,1,8.11,0c6.26,2.42,7.53,10.63,7.41,17.35a171.86,171.86,0,0,1-12,60.26c26.24-26.25,38.8-65.49,32.68-102.09-2.86,1.55-3.3,5.4-3.35,8.64a355.9,355.9,0,0,0,3.15,53.31c.39,2.89.86,5.9,2.52,8.3s4.86,4,7.57,2.91a8.92,8.92,0,0,0,3.74-3.64c11.39-17.35,9.78-39.83,14.58-60,.83-3.47,2.54-7.51,6.08-8,3.27-.41,5.9,2.59,7.54,5.45a47.08,47.08,0,0,1,3.39,39c-.77,2.11-1.85,4.33-3.89,5.28-4.71,2.21-9-3.87-10.19-8.94a61.29,61.29,0,0,1,4.27-39.89c1-2.06,2.39-4.3,4.64-4.61,2.09-.29,4,1.23,5.32,2.85,4,4.86,5.53,11.24,8.3,16.9s7.84,11.14,14.14,10.89c5.81-.23,10.42-5.49,11.87-11.12s.43-11.57-.58-17.29l-4.11-23.1a330.77,330.77,0,0,1,16,49c-3.33-15.22-5.37-32.29,3.09-45.37a4,4,0,0,1,2-1.87,3.25,3.25,0,0,1,2.73.71c3.2,2.31,3.74,6.72,4.69,10.55s3.55,8.13,7.49,7.86c3.77-.25,5.8-4.49,6.73-8.15a67.64,67.64,0,0,0-.49-35.05C268.14,52.1,276,71.54,279.23,92c1.64,10.42,2,21.29-1.22,31.32-1.53,4.7-4,9.32-8.12,12.08s-10.09,3.1-13.75-.22-3.92-9.12-2-13.63,5.56-8,9.11-11.39l27.43-26C304.11,71.42,318.58,56.3,318,37.78c-.27-8.86-6.86-19-15.59-17.46'
            />
            <path className='cls-1' d='M130,63.28l12.65-8.61' />
          </svg>
        </div>
      </div>
    </IntroWrap>
  );
};

export default Intro;
