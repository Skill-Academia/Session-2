import { signOut, auth } from "@/auth";
import axios from "axios";
import moment from "moment";

import React from "react";

const createPost = async (text?: string) => {
  const session = await auth();

  try {
    const { data } = await axios.post(
      "http://localhost:8090/posts",
      { text },
      {
        headers: {
          "X-EMAIL": session?.user?.email,
        },
      }
    );

    console.log(data.message);
  } catch (error: any) {
    console.log(error.response.data.message);
    console.log(error.response.data.originalError);
  }
};

const getPosts = async () => {
  try {
    const { data } = await axios.get("http://localhost:8090/posts");
    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
    console.log(error.response.data.originalError);
  }
};

const Home = async () => {
  const posts = await getPosts();

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center min-h-screen gap-5">
      <div className="flex flex-col gap-1">
        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            "use server";
            await createPost(formData.get("text")?.toString());
          }}
        >
          <textarea
            placeholder="What's on your mind?"
            className="border resize-none min-h-32"
            name="text"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Create
          </button>
        </form>
      </div>

      {/* Display posts */}
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">Feed</h2>

        <div className="flex flex-col gap-4">
          {!posts || posts?.length <= 0 ? (
            <p>No posts found.</p>
          ) : (
            posts?.map((el: Record<string, string>) => (
              <div className="flex items-center gap-4" key={el.id}>
                <p>{el.text}</p>
                <p>{moment(el.createdAt).fromNow()}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default Home;
