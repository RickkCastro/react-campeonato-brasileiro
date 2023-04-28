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
      <td className="text-sm font-medium w-10 py-4">{colocacao}</td>
      <td className="text-sm font-medium">
        <Image alt={img} src={`/img/${img}.png`} width={25} height={25} />
      </td>
      <td className="text-sm font-medium w-20">{nome}</td>
      <td className="text-sm font-medium w-10">{total_pontos}</td>
      <td className="text-sm font-medium w-10">{total_vitorias}</td>
      <td className="text-sm font-medium w-10">{total_empates}</td>
      <td className="text-sm font-medium w-10">{total_derrotas}</td>
      <td className="text-sm font-medium w-10">{total_gols_marcados}</td>
      <td className="text-sm font-medium w-10">{total_gols_sofridos}</td>
      <td className="text-sm font-medium w-10">{saldo_gols}</td>
    </tr>
  );
}
