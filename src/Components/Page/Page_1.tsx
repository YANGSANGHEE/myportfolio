import styled, { keyframes } from 'styled-components';
import { Pagewraps } from '@/common/Page';
import { useCallback } from 'react';

const ani = keyframes`
  0%{transform:rotate(-3deg)}
  25%{transform:rotate(3deg)}
  50%{transform:rotate(3deg)}
  100%{transform:rotate(-3deg)}
`;

const SetPage = styled.div`
  ${({ theme }) => theme.flexSet.flexColumnCenter};
  & > img {
    width: 45.8rem;
    height: 64.3rem;
    margin-bottom: 3rem;
  }
  & > h1 {
    font-size: 3rem;
    font-family: 'Londrina Shadow', cursive;
    letter-spacing: 0.43em;
    font-weight: 400;
    ${({ theme }) => theme.color.text};
    animation: ${ani} infinite 0.7s;
    cursor: pointer;
  }
`;

const PageOne = () => {
  const downloadPdf = () => {
    window.location.href =
      'https://drive.google.com/uc?export=download&id=1acNAU4zc66SJthVNrWFTTmM8Xz4vn44z';
  };

  return (
    <Pagewraps>
      <SetPage>
        <img src='/img/collage.png' alt='collage'></img>
        <h1 onClick={downloadPdf}>Download Resume !</h1>
      </SetPage>
    </Pagewraps>
  );
};

export default PageOne;
