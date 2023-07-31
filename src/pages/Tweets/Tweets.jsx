import { Link } from "react-router-dom";
import { UserList } from "../../components/UserList/UserList";
import icon from "../../images/sprite.svg";

const Tweets = () => {
  return (
    <>
      <h1>Tweets</h1>
      <Link to="/">
        <svg width="40px" height="40px" style={{ marginLeft: "20px" }}>
          <use href={icon + "#back"}></use>
        </svg>
      </Link>

      <UserList />
    </>
  );
};

export default Tweets;
