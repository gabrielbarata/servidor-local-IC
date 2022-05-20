import React, { useEffect } from "react";
import { promises as fs } from "fs";
import { gbds } from "../utils/paths";
// import pugm from "pug";
// import { clear_dir } from "../utils/clear_dir";
// import { try_async } from "../utils/try_async";
// import { read_pug } from "../utils/read_pug";
// import styled from "styled-components";
import * as S from "./styles.js";
import { darken, rgba, parseToRgb, rgb } from "polished";
// console.log(rgba('#8a7e84', 1));
// console.log(rgb({ red: 234, green: 210, blue: 172 }));

const func = (hex1, hex2) => {
  const [rgb1, rgb2] = [parseToRgb(hex1), parseToRgb(hex2)];
  const { sqrt, pow } = Math;
  const a = (v1, v2) => parseInt(sqrt((pow(v1, 2) + pow(v2, 2)) / 2));
  const res = {};
  Object.keys(rgb1).map((k) => {
    res[k] = a(rgb1[k], rgb2[k]);
  });
  return rgb(res);
};
// console.log(func("#AA5042", "#6d1a36"));

export default function Home({ exercises }) {
  useEffect(() => {
    $(".item").hover(
      function () {
        $(this).children().addClass("in").removeClass("out");
      },
      function () {
        $(this).children().addClass("out").removeClass("in");
      }
    );

    function reduce(pai,filho){
      $(pai).each(function () {
        const el = $(this).find(filho);
        while (el.height() >= $(this).height()) {
          el.css("font-size", parseFloat(el.css("font-size")) - 1);
        }
      });
    }

    reduce(".back","pre")
    reduce(".ribbon","span")
  });
  return (
    <S.Wrapper>
      {exercises.map((val) => (
        <S.Item className="item" href={`/exercise?db=${val.name}`}>
          <div className="mycard front">
            {/* <S.Background /> */}
            <img src={`/images/${val.name}.jpg`} />
            <S.Ribbon className="ribbon">
              <div className="ap" />
              <div className="all">
                <span>{val.name}</span>
              </div>
            </S.Ribbon>
          </div>
          <div className="mycard back">
            {/* <S.Background> */}
            <S.White />
            <pre>{val.description}</pre>
            {/* </S.Background> */}
          </div>
        </S.Item>
      ))}
    </S.Wrapper>
  );
}

{
  /* <div classNameName="col">
<div className="card h-100" style={{ "background-color": "#bebebe" }}>
  <img
    className="card-img-top"
    style={{ width: "100%", height: "15vw", "object-fit": "cover" }}
    // style="width:100%; height:15vw; object-fit:cover;"
  />
  <div className="card-body">
    <a className="stretched-link"></a>
    <h5 className="card-title">{val.name}</h5>
    <pre className="card-text">{val.description}</pre>
  </div>
</div>
</div> */
}

export async function getServerSideProps() {
  var files = await fs.readdir(gbds);
  var exercises_names = files.map((v) => v.split(".")[0]);
  exercises_names = Array.from(new Set(exercises_names));

  var exercises = exercises_names.map(async (name) => {
    var description = await fs.readFile(`${gbds}${name}.txt`, "utf8");
    return { name, description };
  });

  exercises = await Promise.all(exercises);
  // exercises = [exercises[0]]
  // exercises = [...exercises, ...exercises, ...exercises, ...exercises];
  // exercises = [...exercises, ...exercises, ...exercises, ...exercises];
  // exercises = [...exercises, ...exercises, ...exercises, ...exercises];

  // exercises[0] = {
  //   name: "um nome de testeee muito maioooooor kapakapa",
  //   description:
  //     "um texto mt grande de testeeee sggwgwe egsgs waafdfberg fqefwrgwrgw eegwefgw eefgfwew wegwegwg wgwgwg wgwgwg wgewgwgw weegwgwgwg wgwgwgw wgwggwgwg wgwgw wgwggwge wgewegwe wegwgwgwe wewweew eweeew eessgesegse esseg gwegwegwe wegwegwgewgweg wegwgwe wegwegewg ew ewg ewew ewg  wegegwegew",
  // };
  // var __html = await read_pug(__filename, { exercises });

  return { props: { exercises } };
}
