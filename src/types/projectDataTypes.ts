// types/projectTypes.ts

export type D2Item = {
    title: string;
    desc: string;
  };
  
  export type D3Item = {
    title: string;
    desc: string;
  };
  
  export type ProjectDataType = {
    id: number;
    title: string;
    link:string;
    img: string;
    h1: string;
    d1: string;
    h2: string;
    d2: D2Item[];
    h3: string;
    d3: D3Item[];
    h4: string;
    d4: string;
    date: string;
    desc: string;
  };