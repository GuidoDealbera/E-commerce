import Sidebar from "./AdminComponents/Sidebar";
import Header from "./AdminComponents/Header";
import { useEffect, useState } from "react";
import Profile from "./AdminComponents/Tabs/Profile";
import Products from "./AdminComponents/Tabs/Products";
import Sales from "./AdminComponents/Tabs/Sales";
import Transactions from "./AdminComponents/Tabs/Transactions";
import Users from "./AdminComponents/Tabs/Users";
import Settings from "./AdminComponents/Tabs/Settings";
import Support from "./AdminComponents/Tabs/Support";
import Deliveries from "./AdminComponents/Tabs/Deliveries";

const AdminProfile = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("profile");
  
  useEffect(() => {
    console.log(showSidebar);
    
  }, [showSidebar])

  const renderTabs = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "products":
        return <Products />;
      case "orders":
        return <Sales />;
      case "transactions":
        return <Transactions />;
      case "users":
        return <Users />;
      case "settings":
        return <Settings />;
      case "support":
        return <Support />;
      case "truck":
        return <Deliveries />;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          activeTab={activeTab}
          showSidebar={showSidebar}
          setActiveTab={setActiveTab}
          setShowSidebar={setShowSidebar}
        />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header
            activeTab={activeTab}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {renderTabs()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
