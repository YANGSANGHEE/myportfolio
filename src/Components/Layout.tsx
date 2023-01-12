import Diary from './Diary';
import Intro from './Intro';
import styled from 'styled-components';
import { useState } from 'react';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('/img/bg.png') center no-repeat;
  background-size: cover;
  ${({ theme }) => theme.flexSet.flexColumnCenter}
  overflow: hidden;
  position: relative;
  & > div.light {
    opacity: 0;
    z-index: 3;
    margin-top: 20px;
    width: 14.2rem;
    height: 4.3rem;
    border-radius: 3rem;
    border: 2px solid #fff;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    cursor: pointer;
    transition: ease 0.8s;
  }
  & > div.light.active {
    opacity: 1;
    position: relative;
    & > span {
      font-size: 1.5rem;
      font-family: 'SegoePrint';
      color: #fff;
    }
    &::after {
      content: '';
      position: absolute;
      width: 3.5rem;
      height: 3.5rem;
      background: #fff;
      left: 2px;
      border-radius: 50%;
      transition: ease 0.5s;
    }
    &.on {
      &::after {
        left: 10rem;
      }
    }
  }
`;

const Layout = () => {
  const [view, setView] = useState('');
  const [on, setOn] = useState(false);
  const [sendClass, setClass] = useState('off');
  const getView = (view: string): void => {
    setView(view);
  };
  return (
    <Wrap>
      <Intro getView={getView} sendClass={sendClass} />
      <Diary />
      <div
        className={`light ${view} ${on === false ? '' : 'on'}`}
        onClick={() => {
          on === false ? setOn(true) : setOn(false);
          sendClass === 'off' ? setClass('on') : setClass('off');
        }}
      >
        <span>ON</span>
        <span>OFF</span>
      </div>
    </Wrap>
  );
};

export default Layout;
