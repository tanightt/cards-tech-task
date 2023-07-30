import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ListContainer, LoadMore } from "./UserList.styled";
import { fetchUsers, editUser } from "../../redux/operations.js";
import { selectUsers } from "../../redux/selectors";
import { Item } from "../Item/Item";

export const UserList = () => {
  const [limit, setLimit] = useState(3);

  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ limit }));
  }, [dispatch, limit]);

  const handleFollow = (id, isFollowing) => {
    const userToUpdate = users.find((user) => user.id === id);

    if (userToUpdate) {
      const updatedFollowers = isFollowing
        ? userToUpdate.followers - 1
        : userToUpdate.followers + 1;
      const updatedUser = { ...userToUpdate, followers: updatedFollowers };
      dispatch(editUser(updatedUser, isFollowing));
    }
  };

  const handleLoadMore = () => {
    setLimit((prev) => prev + 3);
  };

  return (
    <>
      <ListContainer>
        {users.map(({ avatar, followers, tweets, id }) => (
          <Item
            key={id}
            id={id}
            avatar={avatar}
            followers={followers}
            tweets={tweets}
            handleFollow={(isFollowing) => handleFollow(id, isFollowing)}
          />
        ))}
      </ListContainer>
      {limit !== 12 && <LoadMore onClick={handleLoadMore}>Load More</LoadMore>}
    </>
  );
};
