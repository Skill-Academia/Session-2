"use client";

import axios from "axios";
import React, { FormEvent } from "react";

const Client = ({ email }: { email: string }) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await axios.post(`http://localhost:8090/posts`, formData, {
        headers: {
          "x-email": email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="image" type="file" />
      <button>Post</button>
    </form>
  );
};

export default Client;
