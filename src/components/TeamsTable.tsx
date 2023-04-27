import React, { Children } from 'react';
``;

interface ITeamsTableProps {
  children: string | JSX.Element | JSX.Element[];
}

export default function TeamsTable(props: ITeamsTableProps) {
  return (
    <table className="divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="text-left text-xs font-medium uppercase -tracking-wider p-4"></th>
          <th className="text-left text-xs font-medium uppercase -tracking-wider p-4"></th>
          <th className="text-left text-xs font-medium uppercase -tracking-wider p-4"></th>
          <th className="text-left text-xs font-medium uppercase -tracking-wider p-4">P</th>
          <th className="text-left text-xs font-medium uppercase -tracking-wider p-4">V</th>
          <th className="text-left text-xs font-medium uppercase -tracking-wider p-4">E</th>
          <th className="text-left text-xs font-medium uppercase -tracking-wider p-4">D</th>
          <th className="text-left text-xs font-medium uppercase -tracking-wider p-4">GP</th>
          <th className="text-left text-xs font-medium uppercase -tracking-wider p-4">GC</th>
          <th className="text-left text-xs font-medium uppercase -tracking-wider p-4">S</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
