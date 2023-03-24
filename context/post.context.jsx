"use client";

import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext(null);

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
