'use client';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
export default function Profile() {
  const { data: session } = useSession();

  const imageUrl = session?.user?.image || '/path/to/default/image.jpg';

  if (!session || !session.user) {
    return <p>Loading...</p>;
  }
  return (
    <div className="md:grid md:place-items-center mx-auto container p-5 overflow-hidden">
      <Image
        src={imageUrl}
        alt="Profile Image"
        width={100}
        height={100}
        className="!rounded-full"
      />
      <h2 className="md:text-3xl font-semibold text-center text-white uppercase">
        {session?.user?.name}
      </h2>
      <h2 className="md:text-3xl font-semibold text-white ">
        Email:<span>{session?.user?.email}</span>
      </h2>
    </div>
  );
}
