import { Link } from "react-router-dom";
import { UserList } from "../../components/UserList/UserList";

export const Tweets = () => {
  return (
    <>
      <h1>Tweets</h1>
      <Link to="/">back</Link>
      <UserList />
    </>
  );
};
