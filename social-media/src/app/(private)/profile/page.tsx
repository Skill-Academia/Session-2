import { auth } from "@/auth";
import axios from "axios";
import React from "react";

const getUser = async () => {
  try {
    const { data } = await axios.get("http://localhost:8090/users/38");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Profile = async () => {
  // const session = await auth();
  const user = await getUser();

  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <p>{user?.name}</p>
      <p className="text-sm">{user?.email}</p>
      <div className="flex items-center divide-x">
        <div className="flex flex-col px-4 text-center text-sm">
          <p>Followers</p>
          <p>{user?.followers?.length ?? 0}</p>
        </div>

        <div className="flex flex-col px-4 text-center text-sm">
          <p>Following</p>
          <p>{user?.following?.length ?? 0}</p>
        </div>
      </div>
      <p>{user?.bio || "No info available."}</p>
    </div>
  );
};

export default Profile;
