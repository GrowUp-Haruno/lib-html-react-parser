import { Element } from 'html-react-parser';
import { Text, Node } from 'domhandler';
import { FC } from 'react';

import { h2 } from '../components/PureTags';
// import { a, h1, h2, h3, h4, h5, img, li, p, strong, ul } from '../components/PureTags';

export const jsxElementGenerator = (domNode: Element) => {
  const resultElements: Array<JSX.Element> = [];
  switch (domNode.name) {
    // case 'h1':
    //   innerJsxElementGenerator(domNode, resultElements, h1);
    //   break;
    case 'h2':
      innerJsxElementGenerator(domNode, resultElements, h2);
      break;
    // case 'h3':
    //   innerJsxElementGenerator(domNode, resultElements, h3);
    //   break;
    // case 'h4':
    //   innerJsxElementGenerator(domNode, resultElements, h4);
    //   break;
    // case 'h5':
    //   innerJsxElementGenerator(domNode, resultElements, h5);
    //   break;
    // case 'p':
    //   innerJsxElementGenerator(domNode, resultElements, p);
    //   break;
    // case 'ul':
    //   innerJsxElementGenerator(domNode, resultElements, ul);
    //   break;
    // case 'li':
    //   innerJsxElementGenerator(domNode, resultElements, li);
    //   break;
    // case 'strong':
    //   innerJsxElementGenerator(domNode, resultElements, strong);
    //   break;
    // case 'a':
    //   innerJsxElementGenerator(domNode, resultElements, a);
    //   break;
    // case 'img':
    //   innerJsxElementGenerator(domNode, resultElements, img);
    //   break;
    default:
      console.log(`${domNode.name}が未定義です`);
      break;
  }
  return resultElements;
};

const innerJsxElementGenerator = (
  domNode: Element,
  resultElements: Array<JSX.Element>,
  Component: FC<{
    children?: JSX.Element;
    key: number;
    anchorAttr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    imgAttr?: React.ImgHTMLAttributes<HTMLImageElement>;
  }>
) => {
  const list = domNode.children.map((child) => {
    if (child instanceof Element) {
      return { child: child, name: child.name, data: '' };
    } else if (child instanceof Text) {
      return { child: child, name: '', data: child.data };
    }
    return { child: child, name: '', data: '' };
  });

  // if (domNode.name === 'img') {
  //   resultElements.push(<Component imgAttr={domNode.attribs} />);
  // }

  while (list.length) {
    let listCount = 1;

    if (list[0].name !== 'br') {
      // 次のbrタグまでの配列の長さを測定
      while (list[0].name !== 'img' && list.length > listCount && list[listCount].name !== 'br') {
        listCount++;
      }
      // 0番地からbrタグ手前までを抜き出す
      const results = list.splice(0, listCount);
      // 内容をセットする
      resultElements.push(
        <Component key={resultElements.length}>
          <>
            {results.map((result) => {
              return resultsMap(result);
            })}
          </>
        </Component>
      );
    } else {
      // 主にbrなど不要なタグを削除
      list.splice(0, 1);
    }
  }
};

const resultsMap = (result: { child: Node; name: string; data: string }) => {
  if (result.child instanceof Element) {
    const innerResultElements: Array<JSX.Element> = [];
    innerResultElements.push(...jsxElementGenerator(result.child));
    return <>{innerResultElements.map((result) => result)}</>;
  } else if (result.child instanceof Text) {
    return result.child.data;
  } else {
    return <></>;
  }
};
