import { Outlet } from "../../../../../node_modules/react-router-dom/dist/index";
import Header from "./Header";

function Dashboard() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Dashboard;