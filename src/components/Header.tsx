import React from 'react';

export default function Header(props: { children: string }) {
  return (
    <h1 className="text-center text-3xl bg-green-500 p-3 font-semibold w-full">{props.children}</h1>
  );
}
