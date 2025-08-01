import styled from 'styled-components';

export const MainBackground = styled.div`
 background-image: url('/images/mainpage/MainBack.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;  
  display: flex;
   
  flex-direction: column;
  align-items: center;

`;
 
export const TitleText = styled.h1`
   font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: white;
  margin: ${(props) => props.margin || '0'};
`;


export const TitleText2 = styled.h1`
  font-family: "CAFE24";
  font-weight: 200; /* Weight */
  font-size: 1.2rem;
  color: white;
  
`;

export const MiniText = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 400px;
  font-size: 12px;
  color: #184E40;
  display: flex;
  align-items: center;
  justify-content: center;
   
`;
export const TitleText3 = styled.h1`
  font-family: "SUITE", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: white;
  margin-top: 10%;
 
  margin-bottom: 10%;
`;
export const EmptyContainer = styled.div`
  width: 320px;
  height: 420px;
  background-color: rgba(255, 255, 255, 0.0); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.0); /* 반투명한 테두리 */
  border-radius: 8px;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
 
`;

export const MiniContainer = styled.div`
  width: 80px;
  height: 30px;
  background-color: rgba(255, 253, 253, 0.8); /* 반투명한 배경색 */
  display: flex;
  border-radius: 19px;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
 
 
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
  justify-content: space-between;
`;

export const RowContainer2 = styled.div`
  display: flex;
  gap: 1rem; /* 텍스트 간격 */
  justify-content: center;
  align-items: center;
  
`;

export const CenteredImage = styled.img`
  width: 190px; /* 필요한 크기로 조정 */
  height: 60px;
  margin-left: -8%;
 
`;

export const LeftImage = styled.img`
  width: 50px; /* 필요한 크기로 조정 */
  height: 60px;
  
 
`;

export const Image2 = styled.img`
  width: 50px; /* 이미지 크기 조절 */
  height: 50px;
`;

export const RightImage = styled.img`
  width: 30px; /* 필요한 크기로 조정 */
  height: 30px;
  color: #184E40;
  
 
`;

export const SantaContainer = styled.div`
  width: 320px;
  height: 190px;
  background-color: rgba(255, 255, 255, 0.1); /* 반투명한 배경색 */
  border: 2px solid rgba(204, 204, 204, 0.5); /* 반투명한 테두리 */
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin-top: 5%;
  width: 90%;
  opacity: 0.3;
`;

export const Container = styled.div`
  width: ${(props) => props.width || '318px'};
  height: ${(props) => props.height || '70px'};
  background-color: rgba(255, 253, 253, 0.8); /* 배경색과 투명도 설정 */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  margin: ${(props) => (typeof props.margin === 'number' ? `${props.margin}px` : props.margin || '0')}; /* 숫자일 경우 px 추가 */
`;

// 텍스트 스타일 (윗줄, 아랫줄 동일 스타일)
export const Text = styled.p`
  font-family: 'SUITE', sans-serif;
  font-size: 13px;
  color: #000;
  margin: 0.2rem 0;
  white-space: pre-line;
`;



export const Container2 = styled.div`
  width: ${(props) => props.width || '320px'};
  height: ${(props) => props.height || '200px'};
  background-color: rgba(255, 253, 253, 0.8); /* 배경색과 투명도 설정 */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  margin-top: 10%; /* 숫자일 경우 px 추가 */
`;

export const ContainerText = styled.p`
  font-family: 'SUITE', sans-serif;
  font-size: 20px;
  color: #254434;
  font-weight: bold;
   
`;

export const ContainerImage = styled.img`
  width: 72px; /* 원하는 이미지 크기 */
  height: 72px;
  margin-bottom: -55px;
  z-index: 1;
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

export const BottomContainer = styled.div`
  width: ${(props) => props.width || '320px'};
  height: ${(props) => props.height || '140px'};
  background-color: rgba(255, 253, 253, 0.8); /* 배경색과 투명도 설정 */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   
  box-sizing: border-box;
   
`;


export const BadgeContainer = styled.div`
  width: 160px;
  height: 27px;
  background: rgba(143, 20, 38, 0.80);
  border-radius: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const BadgeText = styled.div`
  color: white;
  font-size: 12px;
  font-family: 'SUITE';
  font-weight: 600;
  text-align: center;
`;

// 팝업 컨테이너 스타일
export const PopupContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;  
  top: 0;
  left:0;
  z-index: 100;
  overflow-y: auto;
`;

// 팝업 이미지 스타일
export const PopupImage = styled.img`
  width: 100%;
`;

// 닫기 버튼(X 아이콘) 스타일
export const CloseIcon = styled.img`
  position: absolute;
  top: 50px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;