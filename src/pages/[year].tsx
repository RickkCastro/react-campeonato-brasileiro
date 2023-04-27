import Header from '@/components/Header';
import Select from '@/components/Select';
import TeamItem from '@/components/TeamItem';
import TeamsTable from '@/components/TeamsTable';
import { removeAcento } from '@/helpers/removeAcentos';
import { getNewUUID } from '@/helpers/uuid';
import { ITeam } from '@/types/ITeam';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import path from 'path';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const FIRST_YEAR = 2003;
const FINAL_YEAR = 2015;

const years = Array.from({ length: FINAL_YEAR - FIRST_YEAR + 1 }).map((_, index) => {
  return (FIRST_YEAR + index).toString();
});

export async function getStaticProps(context: any) {
  const { params } = context;
  const BASE_URL = 'https://rickkcastro-campeonato-br-backend.glitch.me';

  const data = await fetch(`${BASE_URL}/${params.year}`).then(res => res.json());

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = years.map(y => ({ params: { year: y } }));

  return {
    paths,
    fallback: false,
  };
}

export default function TeamsTablePage(props: any) {
  const router = useRouter();
  const { year } = router.query;

  const { data } = props;

  function changeYear(year: string) {
    router.push(`/${year}`);
  }

  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    let newTeams: ITeam[] = [];

    if (data) {
      if (data.length > 0) {
        const partidas: any[] = data[data.length - 1].partidas;
        partidas.forEach(p => {
          const mandate = { nome: p.mandante, ...p.pontuacao_geral_mandante };
          const visitante = { nome: p.visitante, ...p.pontuacao_geral_visitante };

          if (!newTeams.includes(mandate)) {
            newTeams.push(mandate);
          }

          if (!newTeams.includes(visitante)) {
            newTeams.push(visitante);
          }
        });
      }
    }

    newTeams.sort((a, b) =>
      a.total_pontos > b.total_pontos ? -1 : a.total_pontos < b.total_pontos ? 1 : 0
    );

    newTeams = newTeams.map((item, index) => {
      const {
        nome,
        total_derrotas,
        total_empates,
        total_gols_marcados,
        total_gols_sofridos,
        total_pontos,
        total_vitorias,
      } = item;

      const newItem: ITeam = {
        id: getNewUUID(),
        nome: nome,
        img: removeAcento(nome).replace(' ', '_'),
        colocacao: (index + 1).toString(),
        total_pontos,
        saldo_gols: (Number(total_gols_marcados) - Number(total_gols_sofridos)).toString(),
        total_derrotas,
        total_empates,
        total_gols_marcados,
        total_gols_sofridos,
        total_vitorias,
      };

      return newItem;
    });

    setTeams(newTeams);
  }, [data]);

  return (
    <div>
      <Header>React-campeonato-brasileiro</Header>
      <Select
        selectText="Selecione um ano:"
        value={year}
        onChangeValue={changeYear}
        options={years}
      ></Select>
      {year && !Array.isArray(year) && years.includes(year) ? (
        <p className="text-lg text-center font-semibold uppercase m-2">
          Campeonato brasileiro de {year}
        </p>
      ) : (
        <p className="text-lg text-center font-semibold uppercase m-2">
          Não existe campeonato nesse ano, selecione outro!
        </p>
      )}
      <div className="flex justify-center items-center flex-col">
        <TeamsTable>
          {teams.map(team => {
            return (
              <TeamItem
                id={team.id}
                key={team.id}
                colocacao={team.colocacao}
                img={team.img}
                nome={team.nome}
                total_pontos={team.total_pontos}
                total_vitorias={team.total_vitorias}
                total_empates={team.total_empates}
                total_derrotas={team.total_derrotas}
                total_gols_marcados={team.total_gols_marcados}
                total_gols_sofridos={team.total_gols_sofridos}
                saldo_gols={team.saldo_gols}
              />
            );
          })}
        </TeamsTable>
      </div>
    </div>
  );
}
