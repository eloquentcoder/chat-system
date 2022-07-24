import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie';
import { apiKey } from '../../config/stream_api_key';

import { ChannelContainer, ChannelList } from '../../components/channel';

const client = StreamChat.getInstance(apiKey);

export const Home: React.FC = () => {
  return (
    <div className="app__wrapper">
        <Chat client={client} theme="team light">
            <ChannelList />
            <ChannelContainer />
        </Chat>
    </div>
  )
}
