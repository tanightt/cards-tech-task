import { styled } from "styled-components";

export const ListContainer = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ItemContainer = styled.li`
  position: relative;
  height: 460px;
  width: 380px;
  border-radius: 20px;
  box-shadow: -2.58px 6.87px 20.62px;
  background: linear-gradient(
    128deg,
    rgba(71, 28, 169, 1) 3%,
    rgba(87, 54, 163, 1) 59%,
    rgba(75, 42, 153, 1) 97%
  );

  div {
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    color: #ebd8ff;
  }
`;

export const LogoSvg = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BgImg = styled.img`
  margin: 28px auto 0;
`;

export const Line = styled.span`
  position: absolute;
  top: 214px;
  left: 0;
  width: 380px;
  height: 8px;
  background: linear-gradient(
    180deg,
    rgba(251, 248, 255, 1) 36%,
    rgba(174, 123, 227, 1) 100%
  );
  box-shadow: #0000002b 0 3.44px 3.44px;
`;

export const UserImg = styled.img`
  position: absolute;
  top: 170px;
  left: 150px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
`;

export const TweetTxt = styled.p`
  margin-top: 88px;
  margin-bottom: 16px;
`;

export const FollowBtn = styled.button`
  margin-top: 26px;
  border-radius: 10px;
  padding: 14px 56px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #ebd8ff;
  color: #373737;
  cursor: pointer;
`;
