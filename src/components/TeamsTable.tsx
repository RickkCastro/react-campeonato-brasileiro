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
          <th className="text-left text-xs font-medium uppercase w-10 py-4"></th>
          <th className="text-left text-xs font-medium uppercase w-10"></th>
          <th className="text-left text-xs font-medium uppercase w-24"></th>
          <th className="text-left text-xs font-medium uppercase w-10">P</th>
          <th className="text-left text-xs font-medium uppercase w-10">V</th>
          <th className="text-left text-xs font-medium uppercase w-10">E</th>
          <th className="text-left text-xs font-medium uppercase w-10">D</th>
          <th className="text-left text-xs font-medium uppercase w-10">GP</th>
          <th className="text-left text-xs font-medium uppercase w-10">GC</th>
          <th className="text-left text-xs font-medium uppercase w-10">S</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
