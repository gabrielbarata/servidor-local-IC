import React, { useEffect } from "react";
// import { promises as fs } from "fs";
import { start } from "./script";
import { exe, gbds } from "../../utils/paths";
// import { try_async } from "../../utils/try_async";
// import styled from "styled-components";
import cmd from "node-cmd";
// import pugm from "pug";
// import path from 'path'
import { read_pug } from "../../utils/read_pug";
import * as S from "./styles.js";

export default function Home({ db }) {
  useEffect(start);

  return (
    <S.Wrapper>
      <h1 id="titulo">praticando o exercício {db}</h1>
      <p id="emoji">&#128528;</p>
      <img id="image"/>
    </S.Wrapper>
  );
}

export const getServerSideProps = async ({ query: { db } }) => {
  var gbd = `"${gbds}${db}.gbd"`;

  cmd.runSync("taskkill /F /IM DiscreteGestureBasics-WPF.exe");
  cmd.run(`start "my_exe" ${exe} ${gbd}`);

  // var __html = await read_pug(__filename, { db });
  return { props: { db } };
};

// export async function getStaticProps( query ) {
//   return {
//     props: {
//       __html: `<h1>${new Date()}</h1>`
//     },
//     revalidate: 20
//   }
// }
