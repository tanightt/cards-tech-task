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

export const Item = () => {
  return (
    <ItemContainer>
      <LogoSvg width="76px" height="22px">
        <use href={icon + "#logo"}></use>
      </LogoSvg>
      <BgImg src="/src/images/chat@1x.png" />
      <div>
        <Line></Line>
        <UserImg width="80px" height="80px" src="/src/images/Boy.svg" />
        <TweetTxt> 777 tweets</TweetTxt>
        <p>100,500 Followers</p>
        <FollowBtn>Follow</FollowBtn>
      </div>
    </ItemContainer>
  );
};
