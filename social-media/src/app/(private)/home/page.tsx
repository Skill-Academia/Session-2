import PageLayout from "@/_components/page-layout";
import { auth } from "@/auth";
import React from "react";
import axios from "axios";
import Image from "next/image";
import Client from "./Client";

const getPosts = async () => {
  try {
    const { data } = await axios.get("http://localhost:8090/posts");

    return data;
  } catch (error: any) {
    console.log(error?.message);
  }
};

const Home = async () => {
  const session = await auth();
  const posts = await getPosts();

  return (
    <PageLayout title="Home">
      <Client email={session?.user?.email || ""} />
      <div className="grid grid-cols-1 divide-y">
        {posts?.map((post: Record<string, any>) => (
          <div className="flex flex-col gap-1 py-8" key={post.id}>
            <div className="w-full aspect-[4/3] bg-white border rounded-md overflow-hidden relative">
              <Image
                src={`http://localhost:8090/files/${post.id}/${post.image}`}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            {post.text ? (
              <p className="text-sm text-zinc-700">{post.text}</p>
            ) : null}
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
