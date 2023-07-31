import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ListContainer, LoadMore } from "./UserList.styled";
import { fetchUsers, editUser } from "../../redux/operations.js";
import { selectUsers } from "../../redux/selectors";
import { Item } from "../Item/Item";
import { Filter } from "../Filter/Filter";

export const UserList = () => {
  const [limit, setLimit] = useState(3);
  const [currentFilter, setCurrentFilter] = useState(null);

  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ limit, filter: currentFilter }));
  }, [dispatch, limit, currentFilter]);

  const handleFollow = (id, isFollowing) => {
    const userToUpdate = users.find((user) => user.id === id);

    if (userToUpdate) {
      const updatedFollowers = isFollowing
        ? userToUpdate.followers - 1
        : userToUpdate.followers + 1;

      const updatedUser = {
        ...userToUpdate,
        followers: updatedFollowers,
        isFollowing: !isFollowing,
      };

      dispatch(editUser(updatedUser));
    }
  };

  const handleLoadMore = () => {
    setLimit((prev) => prev + 3);
  };

  const handleFilterChange = (filterValue) => {
    setCurrentFilter(filterValue);
  };

  const showLoadMoreBtn =
    users.length >= limit && users.length !== 0 && limit !== 12;

  return (
    <>
      <Filter onFilterChange={handleFilterChange} />
      <ListContainer>
        {users.map(({ avatar, followers, tweets, id, isFollowing }) => (
          <Item
            key={id}
            id={id}
            avatar={avatar}
            followers={followers}
            tweets={tweets}
            isFollowing={isFollowing}
            handleFollow={(isFollowing) => handleFollow(id, isFollowing)}
          />
        ))}
      </ListContainer>
      {showLoadMoreBtn && (
        <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
      )}
    </>
  );
};
