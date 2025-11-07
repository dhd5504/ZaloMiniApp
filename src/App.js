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

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Zalo Mini App SDK Demo</h1>
      {user ? (
        <div className="bg-blue-100 rounded-xl p-4 inline-block">
          <p>👤 {user.name}</p>
          <p>🆔 {user.id}</p>
          <img
            src={user.avatar}
            alt="avatar"
            className="w-20 h-20 rounded-full mx-auto mt-2"
          />
        </div>
      ) : (
        <p>Đang lấy thông tin người dùng...</p>
      )}
    </div>
  );
}

export default App;
