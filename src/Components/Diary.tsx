import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import PageFront from './Page_front';
import PageBack from './Page_back';
import e from 'express';

const DiarySet = styled.div`
  ${({ theme }) => theme.flexSet.flexCenterrow}
  width: 573px;
  height: 806px;
  position: relative;
  perspective: 2000px;
  /* 원근법 */
  transition: 1s;
  & > div.book {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 1s;
    transform-style: preserve-3d;
    transform-origin: left;
    color: #333;
  }
  .face-front,
  .face-back {
    position: relative;
    width: 99%;
    height: 99%;
    background: url(/img/paper.png) no-repeat;
    background-size: cover;
    padding: 5%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .face-front {
    box-shadow: inset 3px 0px 20px -7px black;
    border-radius: 10px;
  }
  .face-back {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateZ(-1px) rotateY(180deg);
    box-shadow: inset -3px 1px 20px -7px black;
    border-radius: 10px;
  }
  #portada {
    width: 100%;
    height: 100%;
    top: 0;
    background: url(/img/cover.png) no-repeat;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 5px 10px 10px 0px rgba(0, 0, 0, 0.25);
  }
  #porta-back {
    width: 100%;
    height: 100%;
    background: url(/img/back.png) no-repeat;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 5px 10px 10px 0px rgba(0, 0, 0, 0.25);
  }
  .trnsf {
    transform: translateX(16vw);
  }
  .trnsf-reset {
    transform: translateX(0vw);
  }
`;
// 다이어리 스타일링

const Diary = () => {
  const [addclass, setClass] = useState<string>('trsf');
  const [portada, setPortada] = useState<string>('portada');
  const bookCon = useRef(null);
  const book = useRef<null[] | HTMLDivElement[]>([]);
  // 돔 제어용 useRef

  // console.log(document.getElementsByClassName('book-con'));
  console.log(book.current);

  const Filps = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const filp = document.getElementsByClassName('book-con');
    const bookEle = book.current;

    let conZindex = 2; // 고정인덱스
    let customZindex = 1; // 커스텀인덱스

    for (let i = 0; i < bookEle.length; i++) {
      bookEle[i].style.zIndex = customZindex;
      customZindex--;

      let target = e.target;
      let unoThis = e.currentTarget;

      if (target.getAttribute('class') === 'face-front') {
        unoThis.style.zIndex = conZindex;
        conZindex += 20;

        setTimeout(() => {
          unoThis.style.transform = 'rotateY(-180deg)';
        }, 500);
      }

      if (target.getAttribute('class') == 'face-back') {
        unoThis.style.zIndex = conZindex;
        conZindex += 20;

        setTimeout(() => {
          unoThis.style.transform = 'rotateY(0deg)';
        }, 500);
      }

      if (target.getAttribute('id') == 'portada') {
        filp.classList.remove('trnsf-reset');
        filp.classList.add('trnsf');
      }
      if (target.getAttribute('id') == 'trsf') {
        filp.classList.remove('trnsf');
        filp.classList.add('trnsf-reset');
      }
    }
  }, []);
  return (
    <DiarySet className='book-con' ref={bookCon}>
      <div
        className='book'
        onClick={Filps}
        ref={(elem) => (book.current[0] = elem)}>
        <div className='face-front' id={portada}></div>
        {/* 앞 표지 */}
        <div className='face-back' id={addclass}></div>
      </div>

      {/* 내용물 */}
      <div
        className='book'
        onClick={Filps}
        ref={(elem) => (book.current[1] = elem)}>
        <PageFront>
          <h1>하이</h1>
        </PageFront>
        <PageBack>
          <h1>하이</h1>
        </PageBack>
      </div>
      <div
        className='book'
        onClick={Filps}
        ref={(elem) => (book.current[2] = elem)}>
        <PageFront>
          <h1>하이</h1>
        </PageFront>
        <PageBack>
          <h1>하이</h1>
        </PageBack>
      </div>
      <div
        className='book'
        onClick={Filps}
        ref={(elem) => (book.current[3] = elem)}>
        <PageFront>
          <h1>하이</h1>
        </PageFront>
        <PageBack>
          <h1>하이</h1>
        </PageBack>
      </div>
      <div
        className='book'
        onClick={Filps}
        ref={(elem) => (book.current[4] = elem)}>
        <PageFront>
          <h1>악악</h1>
        </PageFront>
        <div className='face-back' id='porta-back'></div>
        {/* 뒷 표지 */}
      </div>
    </DiarySet>
  );
};

export default Diary;
