import "../globals.css";

// export default function HomeLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang='en'>
//       <body className='flex'>
//         <main className='flex flex-row overflow-auto bg-gray-50 w-full'>
//           <SideNavbar />
//           <div className='flex-1'>{children}</div>
//         </main>
//       </body>
//     </html>
//   )
// }

import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <main className="flex flex-row overflow-auto bg-gray-50 w-full">
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
