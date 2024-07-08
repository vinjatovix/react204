import PropTypes from "prop-types";
import TwitterFollowCard from "./TwitterFollowCard";

const FollowCardsContainer = ({ users }) => (
  <section className="tw-follow-cards">
    {users.map((user) => (
      <TwitterFollowCard
        key={user.id}
        username={user.username}
        name={user.name}
        initialIsFollowing={user.isFollowing}
      />
    ))}
  </section>
);

FollowCardsContainer.propTypes = {
  users: PropTypes.array.isRequired,
};

export default FollowCardsContainer;
