import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard.jsx/ProfileCard";
import { Link } from "react-router-dom";

import "./ProfileSide.css";
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <Link to="/profile">
        <ProfileCard />
      </Link>
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
