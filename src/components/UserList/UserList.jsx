import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ListContainer, LoadMore } from "./UserList.styled";
import { fetchUsers, editUser } from "../../redux/operations,js";
import { selectUsers } from "../../redux/selectors";
import { Item } from "../Item/Item";

export const UserList = () => {
  const [next, setNext] = useState(3);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);

  const handleFollow = (id, isFollowing) => {
    const userToUpdate = users.find((user) => user.id === id);

    if (userToUpdate) {
      const updatedFollowers = isFollowing
        ? userToUpdate.followers
        : userToUpdate.followers + 1;
      const updatedUser = { ...userToUpdate, followers: updatedFollowers };
      dispatch(editUser(updatedUser));
    }
  };

  const sliceList = users.slice(0, next);

  const handleLoadMore = () => {
    setNext(next + 3);
  };

  return (
    <>
      <ListContainer>
        {sliceList.map(({ avatar, followers, tweets, id }) => (
          <Item
            key={id}
            avatar={avatar}
            followers={followers}
            tweets={tweets}
            handleFollow={(isFollowing) => handleFollow(id, isFollowing)}
          />
        ))}
      </ListContainer>

      {next !== users.length && (
        <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
      )}
    </>
  );
};
