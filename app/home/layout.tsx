import SideNav from "../ui/components/SideNav";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="">
        <SideNav />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}