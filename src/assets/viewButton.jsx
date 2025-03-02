import React from 'react';
import styled from 'styled-components';

const Button = ({ sourceLink }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={() => window.open(sourceLink, "_blank")}>
        <p className="button__text">
          <span style={{ '--index': 0 }}>V</span>
          <span style={{ '--index': 1 }}>I</span>
          <span style={{ '--index': 2 }}>E</span>
          <span style={{ '--index': 3 }}>W</span>
          <span style={{ '--index': 4 }} />
          <span style={{ '--index': 5 }}>S</span>
          <span style={{ '--index': 6 }}>O</span>
          <span style={{ '--index': 7 }}>U</span>
          <span style={{ '--index': 8 }}>R</span>
          <span style={{ '--index': 9 }}>C</span>
          <span style={{ '--index': 10 }}>E</span>
        </p>
        <div className="button__circle">
          <svg width={12} className="button__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
          </svg>
          <svg className="button__icon button__icon--copy" xmlns="http://www.w3.org/2000/svg" width={14} fill="none" viewBox="0 0 14 15">
            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    border: none;
    background: #fef6f7;
    color: #7A2A3D;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition:
      background 300ms,
      transform 200ms;
    font-weight: 600;
  }

  .button__text {
    font-size: 12px;

    position: absolute;
    inset: 0;
    animation: text-rotation 6s linear infinite;

    > span {
      position: absolute;
      transform: rotate(calc(25deg * var(--index)));
      inset: 4px;
      transform-origin: center;
    }
  }

  .button__circle {
    position: relative;
    width: 30px;
    height: 30px;
    overflow: hidden;
    background: #fff;
    color: #7A2A3D;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover {
    background: #7A2A3D;
    transform: scale(1.05);
    color: #F7F2E7;
  }

  .button:hover .button__icon {
    color: #000;
  }

  .button:hover .button__icon:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }
`;

export {Button};
