import React, { useRef, useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import PageFront from '@/components/Page_front';
import PageBack from '@/components/Page_back';
import PageOne from './Page/Page_1';
import PageTwo from './Page/Page_2';
import PageThree from './Page/Page_3';
import PageFour from './Page/Page_4';
import PageFive from './Page/Page_5';

const DiarySet = styled.div`
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
    overflow: hidden;
    padding: 5%;
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
  &.trnsf {
    transform: translateX(16vw);
  }
  &.trnsf-reset {
    transform: translateX(0vw);
  }
`;
// 다이어리 스타일링

const Diary = () => {
  const [back, setBack] = useState<string>('face-back');
  const [front, setFront] = useState<string>('face-front');
  const [tclass, settClass] = useState<string>('');
  const [portada, setPortada] = useState<string>('portada');
  const bookCon = useRef(null);
  const book = useRef<null[] | HTMLDivElement[]>([]);
  // 돔 제어용 useRef

  useEffect(() => {
    const filp: HTMLCollectionOf<Element> | any =
      document.getElementsByClassName('book-con');
    const bookEle: any[] | HTMLDivElement[] = book.current;

    let conZindex: number = 2; // 고정인덱스
    let customZindex: number = 1; // 커스텀인덱스

    for (let i = 0; i < bookEle.length; i++) {
      bookEle[i].style.zIndex = String(customZindex);
      customZindex--;

      bookEle[i].addEventListener(
        'click',
        (e: React.MouseEvent<HTMLDivElement>) => {
          let target: EventTarget | HTMLDivElement | any = e.target;
          let unoThis: (EventTarget & HTMLDivElement) | any = e.currentTarget;

          unoThis.style.zIndex = conZindex;
          conZindex++;

          if (target.classList.contains('face-front')) {
            unoThis.style.zIndex = String(conZindex);
            conZindex += 20;

            setTimeout(() => {
              unoThis.style.transform = 'rotateY(-180deg)';
            }, 500);
          }

          if (target.classList.contains('face-back')) {
            unoThis.style.zIndex = String(conZindex);
            conZindex += 20;

            setTimeout(() => {
              unoThis.style.transform = 'rotateY(0deg)';
            }, 500);
          }

          if (target.getAttribute('id') == 'portada') {
            settClass('');
            settClass('trnsf');
          }
          if (target.getAttribute('id') == 'trsf') {
            settClass('');
            settClass('trnsf-reset');
          }
        }
      );
    }
  }, []);

  return (
    <DiarySet className={`book-con ${tclass}`} ref={bookCon}>
      <div className='book' ref={(elem) => (book.current[0] = elem)}>
        <div className={front} id={portada}></div>
        {/* 앞 표지 */}
        <div className={back} id={'trsf'}>
          <PageOne />
        </div>
      </div>

      {/* 내용물 */}
      <div className='book' ref={(elem) => (book.current[1] = elem)}>
        <PageFront front={front}>
          <PageTwo />
        </PageFront>
        <PageBack back={back}>
          <PageThree />
        </PageBack>
      </div>
      <div className='book' ref={(elem) => (book.current[2] = elem)}>
        <PageFront front={front}>
          <h1>하이</h1>
        </PageFront>
        <PageBack back={back}>
          <PageFour />
        </PageBack>
      </div>
      <div className='book' ref={(elem) => (book.current[3] = elem)}>
        <PageFront front={front}>
          <PageFive />
        </PageFront>
        <PageBack back={back}>
          <h1>하이</h1>
        </PageBack>
      </div>
      <div className='book' ref={(elem) => (book.current[4] = elem)}>
        <PageFront front={front}>
          <h1>리액트로 바꿈 ~</h1>
        </PageFront>
        <div className='face-back' id='porta-back'></div>
        {/* 뒷 표지 */}
      </div>
    </DiarySet>
  );
};

export default Diary;
