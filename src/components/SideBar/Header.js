import React from 'react';
import { Link } from 'gatsby';
import Avatar from 'react-avatar';

export default function Footer({ title, heading, avatar }) {
  return (
    <div id="logo">
      <Link to="/">
        <Avatar src={avatar} alt="" round={true} size="130" className="myAvatar"/>

        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}
