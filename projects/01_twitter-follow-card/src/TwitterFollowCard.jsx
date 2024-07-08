import PropTypes from "prop-types";
import { useState } from "react";

const TwitterFollowCard = ({ username, name, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const imageSrc = `https://unavatar.io/x/${username}`;
  const text = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt={`Avatar of ${name}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleButtonClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
};

TwitterFollowCard.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired,
};

export default TwitterFollowCard;
