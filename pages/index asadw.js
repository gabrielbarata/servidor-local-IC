import React from "react";
import Home, {getServerSideProps} from './index asadw'

export default Home;
export {getServerSideProps};

// import { promises as fs } from "fs";
// import { gbds } from "../utils/paths";
// import pugm from "pug";
// import { clear_dir } from "../utils/clear_dir";
// import { try_async } from "../utils/try_async";
// import { read_pug } from "../utils/read_pug";
// import styled from "styled-components";

// export default function Home({ __html }) {
//   // return <div dangerouslySetInnerHTML={{ __html }}></div>;
//   return <div></div>
// }



// export async function getServerSideProps() {
//   var files = await fs.readdir(gbds);
//   var exercises_names = files.map((v) => v.split(".")[0]);
//   exercises_names = Array.from(new Set(exercises_names));

//   var exercises = exercises_names.map(async (name) => {
//     var description = await fs.readFile(`${gbds}${name}.txt`, "utf8");
//     return { name, description };
//   });

//   exercises = await Promise.all(exercises);
//   exercises = [...exercises, ...exercises, ...exercises, ...exercises];
//   exercises = [...exercises, ...exercises, ...exercises, ...exercises];
//   exercises = [...exercises, ...exercises, ...exercises, ...exercises];

//   var __html = await read_pug(__filename, { exercises });

//   return { props: { __html } };
// }


// export async function getStaticProps(a) {
//   console.log(a)
//   return {
//     props: {
//       __html: `<h1>${new Date()}</h1>`
//     },
//     revalidate: 5
//   }
// }