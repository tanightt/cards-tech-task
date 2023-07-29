import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  BgImg,
  ItemContainer,
  LogoSvg,
  UserImg,
  FollowBtn,
  TweetTxt,
  Line,
  ListContainer,
} from "./UserList.styled";
import icon from "../../images/sprite.svg";
import chat from "../../images/chat.png";
// import boy from "../../images/boy.png";
import { fetchUsers } from "../../redux/operations,js";
import { selectUsers } from "../../redux/selectors";
import { editUser } from "../../redux/operations,js";

export const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);

  const handleFollow = (id) => {
    const userToUpdate = users.find((user) => user.id === id);

    if (userToUpdate) {
      const updatedFollowers = userToUpdate.followers + 1;
      const updatedUser = { ...userToUpdate, followers: updatedFollowers };
      console.log(updatedUser);
      dispatch(editUser(updatedUser));
    }
  };

  return (
    <ListContainer>
      {users.map(({ avatar, followers, tweets, id }) => (
        <ItemContainer key={id}>
          <LogoSvg width="76px" height="22px">
            <use href={icon + "#logo"}></use>
          </LogoSvg>
          <BgImg width="308px" height="168px" src={chat} alt="chat" />
          <div>
            <Line></Line>
            <UserImg width="80px" height="80px" src={avatar} alt="user" />
            <TweetTxt>{tweets} tweets</TweetTxt>
            <p>{followers} Followers</p>
            <FollowBtn onClick={() => handleFollow(id)}>Follow</FollowBtn>
          </div>
        </ItemContainer>
      ))}
    </ListContainer>
  );
};
