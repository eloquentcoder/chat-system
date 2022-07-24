import React from 'react'
import { ChannelList as List, useChatContext } from 'stream-chat-react'
import Cookies  from 'universal-cookie'
import CompanyHeader from '../../company/company-header';

import { ChannelSidebar, ChannelSearch, ChannelTeam, ChannelTeamPreview } from "../index";

const ChannelList: React.FC = () => {
  return (
    <>
      <ChannelSidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
      </div>
    </>
  )
}

export default ChannelList