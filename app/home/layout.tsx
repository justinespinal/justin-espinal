import SideNav from "../ui/components/SideNav";
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col lg:flex-row lg:overflow-hidden">
      <div className="">
        <SideNav />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}