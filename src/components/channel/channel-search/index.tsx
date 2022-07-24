import React, { useState, useEffect } from 'react'

import { useChatContext } from "stream-chat-react";

import { GoSearch } from "react-icons/go";

const ChannelSearch = () => {

  const [query, setQuery] = useState("");

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  }

  return (
    <div className='channel-search__container'>
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <GoSearch />
        </div>
        <input type="text" 
               className="channel-search__input__text" 
               placeholder="Search" 
               />
      </div>
    </div>
  )
}

export default ChannelSearch