import { ReactNode } from "react";
import NavBar from "../components/navBar";
import LeftPage from "../pages/LeftSideBar/Leftpage";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="h-screen bg-slate-500 bg-gradient-to-br from-blue-300 to-white">
   <div className="pt-5">
   <NavBar/>
   </div>
    <div className="flex  justify-between">
      <div className=' w-80 ml-6 mb-3'>
        <LeftPage />
      </div>
      <div className="mr-32">{children}</div>
      <div className="bg-black mr-6 w-80">
        <h1>Right Page</h1>
      </div>
    </div>
  </div>
);

