import { FC } from 'react';

export const h1: FC<{ children?: JSX.Element; key: string;id:string }> = (props) => <h1 id={props.id}>{props.children}</h1>;
export const h2: FC<{ children?: JSX.Element; key: string;id:string }> = (props) => <h2 id={props.id}>{props.children}</h2>;
export const h3: FC<{ children?: JSX.Element; key: string;id:string }> = (props) => <h3 id={props.id}>{props.children}</h3>;
export const h4: FC<{ children?: JSX.Element; key: string;id:string }> = (props) => <h4 id={props.id}>{props.children}</h4>;
export const h5: FC<{ children?: JSX.Element; key: string;id:string }> = (props) => <h5 id={props.id}>{props.children}</h5>;
export const p: FC<{ children?: JSX.Element; key: string;id:string }> = (props) => <p id={props.id}>{props.children}</p>;
export const ul: FC<{ children?: JSX.Element; key: string;id:string }> = (props) => <ul id={props.id}>{props.children}</ul>;
export const li: FC<{ children?: JSX.Element; key: string;id:string }> = (props) => <li id={props.id}>{props.children}</li>;
export const strong: FC<{ children?: JSX.Element; key: string;id:string }> = (props) => <strong id={props.id}>{props.children}</strong>;
export const a: FC<{
  children?: JSX.Element;
  key: string;id:string;
  anchorAttr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}> = (props) => <a href={props.anchorAttr?.href}>{props.children}</a>;
export const img: FC<{ imgAttr?: React.ImgHTMLAttributes<HTMLImageElement>; key: string;id:string }> = (props) => {
  return <img src={props.imgAttr?.src} alt="" />;
};
