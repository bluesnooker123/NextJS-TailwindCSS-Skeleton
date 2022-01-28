import { PureComponent } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface layoutProps {
  className?: string;
}

export default class Layout extends PureComponent<layoutProps> {
  render() {
    const className = this.props.className ? this.props.className : "";
    return (
      <div id="layout" className="layout">
        <Header title="Next.js + TailwindCSS Skeleton" description="Next.js + TailwindCSS Skeleton site"/>
        <div className={"main " + className}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
