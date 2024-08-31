'use client';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { CgProfile } from 'react-icons/cg';
import { TiTicket } from 'react-icons/ti';
import { IoMdLogOut } from 'react-icons/io';
import { IconType } from 'react-icons';
import { MenuOutlined } from '@ant-design/icons';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  interface MenuItem {
    id: number;
    name: string;
    path: string;
    Icon: IconType;
  }
  const menuItems: MenuItem[] = [
    { id: 1, name: 'Profile', path: '/User/profile', Icon: CgProfile },
    { id: 2, name: 'Ticket Raise', path: '/User/ticket', Icon: TiTicket },
  ];
  if (!session) {
    redirect('/');
  }

  return (
    <div className=" flex relative">
      <div
        className={`fixed inset-y-0 left-0 w-64 transition-transform bg-gray-800 text-white p-5 z-50 space-y-5 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300"
        ></button>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold  ">Dashboard</span>
        </div>
        <nav className="space-y-10 mt-10">
          {menuItems.map(({ id, path, name, Icon }) => (
            <div key={id} className="flex items-center gap-x-1 ">
              <Icon className="text-2xl" />
              <Link href={path}>
                <span>{name}</span>
              </Link>
            </div>
          ))}
        </nav>
        <button
          className="fixed bottom-5 flex items-center gap-x-1"
          onClick={() => signOut()}
        >
          <IoMdLogOut className="!text-2xl" /> Logout
        </button>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
        ></div>
      )}

      <div className=" lg:hidden p-5 ml-0 transition-all lg:ml-64">
        <header className="flex justify-between items-center mb-5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 lg:hidden"
          >
            <MenuOutlined />
          </button>
        </header>
      </div>
    </div>
  );
};

export default Sidebar;
