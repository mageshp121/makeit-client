import  { useEffect, useState } from "react";
import { getPost } from "../../api/methods/get";
import Comments from "./Comments";

const ViewPost = () => {
  const [post, setPost] = useState() as any;
  useEffect(() => {
    getPost().then((post: any) => {
      setPost(post.data);
    });
  }, []);
  console.log(">>>>>>>>>>>>",post);

  return (
    <div className="">
      {post && (
        <div className="bg-white w-full text-black mb-9 px-1/2 absolute top-0 p-5 h-screen  ">
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
                <h2 className="text-base">{post.user[0].firstName} </h2>
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
              </div>
              <p className=" text-xs text-slate-400">{post.dateString}</p>
            </div>
          </div>
          {/* <!--content--> */}
          <div>
            <h1 className="text-sm flex mt-10 leading-6 text-black">{post.data}</h1>
          </div>
          <div className="w-2/4 container mt-10 max-w-screen-lg mx-auto pb-10">
            <img className="mx-auto" src={post.image} alt="" />
          </div>

          {/* <!-- comments--> */}

          <div className=" pt-5 text-slate-800">
            <h1>{post.likes} Likes</h1>

            <div className=" text-sm ">
              {/* <Link to={'/viewpost'}><p>{post.comments.length} Comments</p></Link> */}
              {post.comments.map((comment: any) => {
                const user =  post.c_user.filter((u:any)=>  u._id==comment.userId)
                console.log(user)
                return <Comments key={comment._id} info={comment} users={user}/>
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPost;
