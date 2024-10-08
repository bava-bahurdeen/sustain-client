import Sidebar from '../components/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" ">
      <Sidebar />
      <main className="h-full bg-slate-300">{children}</main>
    </div>
  );
}
