import InvitationBar from "../../components/InvitationBar";
import Sidebar from "../../components/sideDashBoard";
import UserName from "../../components/userName";


function LeftPage() {
  return (
    <div className="flex flex-wrap flex-col">
      <div className="">
        <UserName/>
      </div>
      <div className="mb-4 ">
        <Sidebar/>
      </div>
      <div>
       <InvitationBar/>
      </div>
    </div>
  );
}

export default LeftPage;
