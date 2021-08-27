import React from 'react'
import './topbar.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SweetyAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src="https://1.bp.blogspot.com/-ixv-S7IUpX4/XsPDCqRXC6I/AAAAAAAAD5w/t25IK2izMLQUahMpVj4W0ZxVeY86D8OnACLcBGAsYHQ/s1600/%255BNew%255D%2BLetter%2BS%2BName%2BDp%2BPic%252C%2BImages%252C%2BWallpaper%252C%2BPhotos%2B%255B2020%255D%2B%252814%2529.jpg" alt="" className="topAvatar"></img>
        </div>
      </div>
    </div>
  )
}
