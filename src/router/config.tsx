import type { RouteObject } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/home/page";
import Demands from "@/pages/demands/page";
import DemandDetail from "@/pages/demand/page";
import PublishDemand from "@/pages/publishDemand/page";
import CoCreate from "@/pages/coCreate/page";
import ProjectDetail from "@/pages/project/page";
import Cases from "@/pages/cases/page";
import CaseDetail from "@/pages/case/page";
import IpDetail from "@/pages/ip/page";
import Profile from "@/pages/profile/page";
import Workbench from "@/pages/workbench/page";
import Messages from "@/pages/messages/page";
import Designer from "@/pages/designer/page";
import Login from "@/pages/login/page";
import About from "@/pages/about/page";
import Contact from "@/pages/contact/page";
import Agreement from "@/pages/agreement/page";
import WorkList from "@/pages/workList/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/demands",
    element: <Demands />,
  },
  {
    path: "/demand/publish",
    element: <PublishDemand />,
  },
  {
    path: "/demand/:id",
    element: <DemandDetail />,
  },
  {
    path: "/co-create",
    element: <CoCreate />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetail />,
  },
  {
    path: "/cases",
    element: <Cases />,
  },
  {
    path: "/case/:id",
    element: <CaseDetail />,
  },
  {
    path: "/ip/:id",
    element: <IpDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/workbench",
    element: <Workbench />,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
  {
    path: "/designer/:id",
    element: <Designer />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/agreement",
    element: <Agreement />,
  },
  {
    path: "/my-applications",
    element: <WorkList kind="application" />,
  },
  {
    path: "/my-works",
    element: <WorkList kind="work" />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
