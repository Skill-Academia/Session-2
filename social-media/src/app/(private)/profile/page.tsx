import PageLayout from "@/_components/page-layout";
import { auth } from "@/auth";
import axios from "axios";
import Image from "next/image";
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
    <PageLayout title="Profile">
      <div className="flex items-start gap-10">
        <label
          htmlFor="upload-dp"
          className="group ring-1 ring-zinc-300 ring-offset-2 relative w-16 aspect-square rounded-full overflow-hidden flex justify-center items-center"
        >
          {user?.image ? (
            <Image src={user?.image} alt="" fill className="object-cover" />
          ) : (
            <p className="text-xs underline text-center group-hover:no-underline">
              add
              <br />
              photo
            </p>
          )}
          <input
            className="sr-only"
            id="upload-dp"
            type="file"
            accept="image/*"
            max={1}
          />
        </label>

        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-semibold">{user?.name}</h1>
              <p className="text-xs text-zinc-700">{user?.email}</p>
            </div>
            <button className="px-3 py-1.5 text-sm bg-zinc-100 hover:bg-zinc-100/60 rounded-md">
              Edit profile
            </button>
          </div>
          <div className="mt-2 flex items-center divide-x">
            <div className="flex flex-col pr-6 text-center text-sm">
              <p className="text-xs font-medium text-zinc-700">Posts</p>
              <p>0</p>
            </div>

            <div className="flex flex-col px-6 text-center text-sm">
              <p className="text-xs font-medium text-zinc-700">Followers</p>
              <p>{user?.followers?.length ?? 0}</p>
            </div>

            <div className="flex flex-col px-6 text-center text-sm">
              <p className="text-xs font-medium text-zinc-700">Following</p>
              <p>{user?.following?.length ?? 0}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-xs font-medium">Bio</h2>
        <p className="text-sm text-zinc-700">
          {user?.bio || "No info available."}
        </p>
      </div>
      <hr className="my-6" />
    </PageLayout>
  );
};

export default Profile;
