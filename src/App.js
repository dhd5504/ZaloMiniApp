import React, { useEffect, useState } from "react";
import { getUserInfo } from "zmp-sdk";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const info = await getUserInfo();
        console.log("User info:", info);
        setUser(info.userInfo);
      } catch (error) {
        console.error("Không lấy được thông tin người dùng:", error);
      }
    }

    fetchUser();
  }, []);

  return <div>There Is No Limit To What You Can Accomplish Using Zalo!</div>;
}

export default App;
