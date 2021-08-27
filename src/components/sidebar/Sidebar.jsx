import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonIcon from '@material-ui/icons/Person';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FeedbackIcon from '@material-ui/icons/Feedback';
import MessageIcon from '@material-ui/icons/Message';
import WorkIcon from '@material-ui/icons/Work';
import ReportIcon from '@material-ui/icons/Report';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyleIcon className="sidebarIcon" />Home
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcon" />Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon" />Sales
                    </li>
                </ul>   
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PersonIcon className="sidebarIcon" />Users
                    </li>
                    <li className="sidebarListItem">
                        <StorefrontIcon className="sidebarIcon" />Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoneyIcon className="sidebarIcon" />Transactions
                    </li>
                </ul>   
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutlineIcon className="sidebarIcon" />Mail
                    </li>
                    <li className="sidebarListItem">
                        <FeedbackIcon className="sidebarIcon" />Feedback
                    </li>
                    <li className="sidebarListItem">
                        <MessageIcon className="sidebarIcon" />Messages
                    </li>
                </ul>   
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkIcon className="sidebarIcon" />Manage
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcon" />Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportIcon className="sidebarIcon" />Reports
                    </li>
                </ul>   
            </div>

        </div>
      
    </div>
  )
}
