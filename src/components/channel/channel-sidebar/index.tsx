import React, { ReactNode } from 'react'
import LogoIcon from "../../../assets/logo.png";
import LogoutIcon from "../../../assets/logout.png";

const ChannelSidebar = () => {
    return <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={LogoIcon} alt="Logo" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>

    

}

export default ChannelSidebar