import Header from "./Header"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { useInfo } from "../../core/context-provider/info-context"

interface layoutProps {
  className?: string;
}

const Layout: React.FC<layoutProps> = (props) => {
  const className = props.className ? props.className : "";
  const { message } = useInfo();

  return (
    <div id="layout" className="layout">
      <Header title="Next.js + TailwindCSS Skeleton" description="Next.js + TailwindCSS Skeleton site" />
      <Navbar str={message}></Navbar>
      <div className={className}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
