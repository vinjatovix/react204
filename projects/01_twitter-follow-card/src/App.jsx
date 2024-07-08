import "./App.css";
import users from "./mocks/users.json";
import FollowCardsContainer from "./FollowCardsContainer";

export const App = () => <FollowCardsContainer users={users} />;
