
function InvitationBar() {
  const generateInvitations = () => {
    const invitations = [];

    for (let i = 0; i <100; i++) {
      invitations.push(
        <div
          className="w-72 cols-4  overflow-hidden   flex-shrink-0 "
          key={i}
        >
          <div className="flex items-start p-4 rounded-xl  bg-white ">
            <div className="flex mt-3 items-center rounded-3xl overflow-hidden justify-center bg-indigo-50 h-12 w-12 border border-indigo-100">
              <img src="src/images/Max-R_Headshot (1).jpg" alt="" />
            </div>
            <div className="ml-2">
              <p className="mt-2 pb-3 text-sm text-black">
                Invitation from @Zaya_amrtine
              </p>
              <div className="flex flex-row gap-6">
                <span className="inline-flex hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer justify-center items-center py-1 px-5 border-none rounded-full bg-indigo-100 text-sm text-indigo-800 font-medium">
                  Accept
                </span>
                <span className="inline-flex hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer justify-center items-center py-1 px-5 border-none rounded-full bg-gray-200 text-sm text-gray-800 font-medium">
                  Decline
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return invitations;
  };
  return (
   
    <div className="flex w-80 h-80 flex-col rounded-lg gap-2 overflow-x-auto">
      {generateInvitations()}
    </div>
  );
}

export default InvitationBar;
