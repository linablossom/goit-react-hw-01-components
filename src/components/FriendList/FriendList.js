import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map((friend) => (
      <FriendListItem {...friend} key={friend.id} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
