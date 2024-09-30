import "../globals.css";
import { ReactNode } from "react";
import { SideNavbar } from "@/components/ui/SideNavbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <SideNavbar />
        <main className="flex flex-row overflow-auto bg-gray-50 w-full">
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
