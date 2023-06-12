import React from "react";

const Comments = (props: any) => {
  const { info , users} = props;
//   console.log(props)
  return (
    <div>
      <div className="bg-white w-full rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
        <div className="flex flex-row justify-center mr-2">
          <img
            alt="avatar"
            width="48"
            height="48"
            className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
            src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"
          />
          <div className="flex-col">
          <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">
            @{users[0]?.firstName}
          </h3>
          <p>{info.data}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
