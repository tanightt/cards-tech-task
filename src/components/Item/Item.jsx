import PropTypes from "prop-types";
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

export const Item = ({ avatar, followers, tweets, handleFollow }) => {
  return (
    <ItemContainer>
      <LogoSvg width="76px" height="22px">
        <use href={icon + "#logo"}></use>
      </LogoSvg>
      <BgImg width="308px" height="168px" src={chat} alt="chat" />
      <div>
        <Line></Line>
        <UserImg width="80px" height="80px" src={avatar} alt="user" />
        <TweetTxt>{tweets} tweets</TweetTxt>
        <p>{followers} Followers</p>
        <FollowBtn onClick={handleFollow}>Follow</FollowBtn>
      </div>
    </ItemContainer>
  );
};

Item.propTypes = {
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  handleFollow: PropTypes.func.isRequired,
};
