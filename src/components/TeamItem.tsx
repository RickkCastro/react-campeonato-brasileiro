import React from 'react';

import Image from 'next/image';
import { ITeam } from '@/types/ITeam';

export default function TeamItem(props: ITeam) {
  const {
    colocacao,
    img,
    nome,
    total_pontos,
    total_vitorias,
    total_empates,
    total_derrotas,
    total_gols_marcados,
    total_gols_sofridos,
    saldo_gols,
  } = props;

  return (
    <tr>
      <td className="p-4 text-sm font-medium whitespace-nowrap">{colocacao}</td>
      <td className="p-4 text-sm font-medium whitespace-nowrap">
        <Image alt={img} src={`/img/${img}.png`} width={25} height={25} />
      </td>
      <td className="p-4 text-sm font-medium whitespace-nowrap">{nome}</td>
      <td className="p-4 text-sm font-medium whitespace-nowrap">{total_pontos}</td>
      <td className="p-4 text-sm font-medium whitespace-nowrap">{total_vitorias}</td>
      <td className="p-4 text-sm font-medium whitespace-nowrap">{total_empates}</td>
      <td className="p-4 text-sm font-medium whitespace-nowrap">{total_derrotas}</td>
      <td className="p-4 text-sm font-medium whitespace-nowrap">{total_gols_marcados}</td>
      <td className="p-4 text-sm font-medium whitespace-nowrap">{total_gols_sofridos}</td>
      <td className="p-4 text-sm font-medium whitespace-nowrap">{saldo_gols}</td>
    </tr>
  );
}
