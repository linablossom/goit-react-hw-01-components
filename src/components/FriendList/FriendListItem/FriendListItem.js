import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Item = styled.li`
  background-color: #fff;
  box-shadow: 1px 1px 3px #000;
  padding: 5px 16px;
  display: flex;
  align-items: center;
  margin: 0 0 12px;
`;

const Status = styled.span(
  (props) => `
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props.isOnline ? "green" : "red"};
`
);

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: aqua;
  padding: 4px;
  margin: 0 12px;
`;

const Name = styled.p`
  color: #000;
  font-size: 20px;
`;

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status isOnline={isOnline} />
    <Avatar src={avatar} alt={name} width="48" />
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

FriendListItem.defaultProps = {
  isOnline: false,
};

export default FriendListItem;
