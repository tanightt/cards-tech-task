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

export const Item = ({ id, avatar, followers, tweets, handleFollow }) => {
  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem(`isFollowing_${id}`) === "true"
  );
  const [followerCount, setFollowerCount] = useState(followers);

  const handleFollowClick = () => {
    if (isFollowing) {
      setFollowerCount((prevCount) => prevCount - 1);
    } else {
      setFollowerCount((prevCount) => prevCount + 1);
    }

    const updatedFollowingStatus = !isFollowing;
    setIsFollowing(updatedFollowingStatus);
    localStorage.setItem(`isFollowing_${id}`, updatedFollowingStatus);
    handleFollow(isFollowing);
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
          style={{ backgroundColor: isFollowing ? "#5CD3A8" : "#EBD8FF" }}
        >
          {isFollowing ? "Following" : "Follow"}
        </FollowBtn>
      </div>
    </ItemContainer>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  handleFollow: PropTypes.func.isRequired,
};
