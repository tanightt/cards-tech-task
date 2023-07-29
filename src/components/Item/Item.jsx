import {
  BgImg,
  ItemContainer,
  LogoSvg,
  UserImg,
  FollowBtn,
  TweetTxt,
  Line,
} from "./Item.styled";
import icon from "../../images/sprite.svg";
import chat from "../../images/chat.png";
import boy from "../../images/boy.png";

export const Item = () => {
  return (
    <ItemContainer>
      <LogoSvg width="76px" height="22px">
        <use href={icon + "#logo"}></use>
      </LogoSvg>
      <BgImg width="308px" height="168px" src={chat} alt="chat" />
      <div>
        <Line></Line>
        <UserImg width="80px" height="80px" src={boy} alt="user" />
        <TweetTxt> 777 tweets</TweetTxt>
        <p>100,500 Followers</p>
        <FollowBtn>Follow</FollowBtn>
      </div>
    </ItemContainer>
  );
};
