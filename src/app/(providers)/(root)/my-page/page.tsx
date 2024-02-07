"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNickname } from "../../_store/_reducers/nick.reducer";

const MyPage = () => {
  const dispatch = useDispatch();
  const nickname = useSelector((state: any) => state.user.nickname);
  const [newNickname, setNewNickname] = useState("");

  const handleNicknameChange = () => {
    dispatch(changeNickname({ nickname: newNickname }));
    setNewNickname("");
  };

  return (
    <div>
      <h1>My Page</h1>
      <p>Current Nickname: {nickname}</p>
      <input
        type="text"
        placeholder="Enter new nickname"
        value={newNickname}
        onChange={(e) => setNewNickname(e.target.value)}
      />
      <button onClick={handleNicknameChange}>Change Nickname</button>
    </div>
  );
};

export default MyPage;
