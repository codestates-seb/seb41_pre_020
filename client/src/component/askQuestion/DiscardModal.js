import { useState } from 'react';
import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: hsla(358, 67%, 6%, 0.5);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  display: inline-block;
  margin-left: 8px;
`;

export const ModalBtn = styled.button`
  color: #c22e32;
  padding: 10.5px;
  background-color: transparent;
  cursor: pointer;
  border: 0;
  outline: 0;
  border-radius: 3px;

  &:hover {
    background-color: #fdf2f2;
  }
`;

const DiscardButton = styled.button`
  background-color: #d0393e;
  color: white;
  border: 1px solid #d0393e;
  padding: 10.5px;
  cursor: pointer;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;

  &:hover {
    background-color: #c22e32;
    border-color: #c22e32;
  }
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',
}))`
  position: relative;
  border-radius: 7px;
  background-color: white;
  padding: 24px;
  max-width: 600px;
  max-height: 100%;
  box-shadow: 0 1px 4px hsla(0, 0%, 0%, 0.09), 0 3px 8px hsla(0, 0%, 0%, 0.09),
    0 4px 13px hsla(0, 0%, 0%, 0.13);
  cursor: default;

  & h1 {
    color: #c22e32;
    font-size: 27px;
    line-height: 31px;
    margin-bottom: 16px;
  }

  & p {
    color: #3b4045;
    margin-bottom: 24px;
  }

  & span {
    display: inline-block;
    padding: 10.5px;
    margin-left: 8px;
    background-color: transparent;
    color: #6a737c;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      color: #525960;
      background-color: #f8f9f9;
    }
  }

  & .modal--close-button {
    padding: 12px;
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
    background-color: transparent;
    border-radius: 3px;
    height: 38px;

    &:hover {
      background-color: #f8f9f9;
    }
  }
`;

export const DiscardModal = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>Discard draft</ModalBtn>
        {isOpen === true ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <div className='desc'>
                <h1>Discard {type}</h1>
                <p>
                  Are you sure you want to discard{' '}
                  {type === 'edits' ? 'these' : 'this'} {type}? This cannot be
                  undone.
                </p>
                <div>
                  <DiscardButton>Discard {type}</DiscardButton>
                  <span onClick={setIsOpen}>Cancel</span>
                </div>
                <div onClick={setIsOpen} className='modal--close-button'>
                  <svg
                    xlink='http://www.w3.org/1999/xlink'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    className='svg-icon iconClearSm'
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                  >
                    <path
                      d='M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z'
                      fill='#6A737C'
                    ></path>
                  </svg>
                </div>
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
