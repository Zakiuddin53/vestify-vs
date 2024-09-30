export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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