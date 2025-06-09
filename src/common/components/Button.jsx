// 1. 남색 버튼
// 로그인 / 회원가입 버튼
// 프로세스 시작하기, 불러오기, 저장

// 2. 회색 버튼
// 취소

import { styled, StyleSheetManager } from 'styled-components';

import './Components.scss';

const CommonButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 7px 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: ${(props) => props.fontSize || '14px'};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

function Button({ className, onClick, children, type, width, height, fontSize }) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => !['width', 'height'].includes(prop)}>
      <CommonButton
        className={className}
        onClick={onClick}
        width={width}
        height={height}
        type={type}
        fontSize={fontSize}
      >
        {children}
      </CommonButton>
    </StyleSheetManager>
  );
}

export default Button;
