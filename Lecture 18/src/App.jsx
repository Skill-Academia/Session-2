import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// const fetchPosts = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (response.ok) {
//     const data = await response.json();
//     return data;
//   } else {
//     return [];
//   }
// };

function App() {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: fetchPosts,
  // });

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setPosts(data);
  //       }
  //     } catch (error) {
  //       alert(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <div>
      <button onClick={fetchPosts}>Fetch Posts</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((item) => <p key={item.id}>{item.title}</p>)
      )}
    </div>
  );
}

export default App;
