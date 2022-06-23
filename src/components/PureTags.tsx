import { FC } from 'react';

export const h1: FC<{ children: JSX.Element }> = (props) => <h1>{props.children}</h1>;
export const h2: FC<{ children: JSX.Element }> = (props) => <h2>{props.children}</h2>;
export const h3: FC<{ children: JSX.Element }> = (props) => <h3>{props.children}</h3>;
export const h4: FC<{ children: JSX.Element }> = (props) => <h4>{props.children}</h4>;
export const h5: FC<{ children: JSX.Element }> = (props) => <h5>{props.children}</h5>;
export const p: FC<{ children: JSX.Element }> = (props) => <p>{props.children}</p>;
export const ul: FC<{ children: JSX.Element }> = (props) => <ul>{props.children}</ul>;
