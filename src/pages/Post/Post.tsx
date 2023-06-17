import { useEffect, useState } from "react";
import { getAllPost } from "../../utils/api/methods/get";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPost()
      .then((res: any) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);

  return (
    <>
      <div className="main overflow-auto max-h-between mt-4 pl-5 w-[42rem]">
        {posts.map((post: any) => {
          return (
            <div className="bg-white text-black mb-9  rounded-lg  w-[34rem] space-y-6 p-10  ">
              {/* <!-- header --> */}
              <div className="flex space-x-4 items-center ">
                <div className="w-12 h-12">
                  <img
                    alt="avatar"
                    src=""
                    className="rounded-full w-full h-full object-cover "
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex space-x-2 items-center">
                    <h2 className="text-base"> {post.user[0].firstName} </h2>
                    <svg
                      className="h-4 w-4 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="  text-xs text-slate-400">
                      posted an update
                    </div>
                  </div>
                  <p className=" text-xs text-slate-400">{post.dateString}</p>
                </div>
              </div>
              {/* <!--content--> */}
              <div>
                <p className="text-sm leading-6 text-black">{post.data}</p>
              </div>
              <div className="image">
                <img src={post.image} alt="" />
              </div>

              {/* <!-- comments--> */}

              <div className="flex justify-between pt-5 text-slate-400">
                <h1>{post.likes} Likes</h1>

                <div className="text-slate-400 text-sm">
                  <Link to={"/viewpost"}>
                    <p>{post.comments.length} Comments</p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Post;
