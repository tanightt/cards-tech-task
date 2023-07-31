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
import { useState } from "react";

export const Item = ({
  avatar,
  followers,
  tweets,
  isFollowing,
  handleFollow,
}) => {
  const [followerCount, setFollowerCount] = useState(followers);
  const [localIsFollowing, setLocalIsFollowing] = useState(isFollowing);

  const handleFollowClick = () => {
    setLocalIsFollowing((prevIsFollowing) => !prevIsFollowing);
    if (localIsFollowing) {
      setFollowerCount((prevCount) => prevCount - 1);
    } else {
      setFollowerCount((prevCount) => prevCount + 1);
    }

    handleFollow(localIsFollowing);
  };

  return (
    <ItemContainer>
      <LogoSvg width="76px" height="22px">
        <use href={icon + "#logo"}></use>
      </LogoSvg>
      <BgImg width="308px" height="168px" src={chat} alt="chat" />
      <div>
        <Line></Line>
        <UserImg width="80px" height="80px" src={avatar} alt="user" />
        <TweetTxt>{tweets.toLocaleString("en-US")} tweets</TweetTxt>
        <p>{followerCount.toLocaleString("en-US")} Followers</p>
        <FollowBtn
          onClick={handleFollowClick}
          style={{ backgroundColor: localIsFollowing ? "#5CD3A8" : "#EBD8FF" }}
        >
          {localIsFollowing ? "Following" : "Follow"}
        </FollowBtn>
      </div>
    </ItemContainer>
  );
};

Item.propTypes = {
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  handleFollow: PropTypes.func.isRequired,
};
