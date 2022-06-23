import './App.css';

import parth, { Element } from 'html-react-parser';
import { Text, Node } from 'domhandler';
import { FC } from 'react';
import { h1, h2, h3, h4, h5, p, ul } from './components/PureTags';

const sampleHtml: string =
  '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉<br></p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。<br>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。<br><br>👇まずはここをクリックします。<br><img src="https://images.microcms-assets.io/assets/157404dc1ca1414195671e7b5ffd8c86/a646785aae4a41f581712bd01111bcd2/blog-template-description1.png" alt=""><br><br>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。<br><img src="https://images.microcms-assets.io/assets/157404dc1ca1414195671e7b5ffd8c86/4e0f1da46745436abf90df0c47ac07f0/blog-template-description2.png" alt=""><br><br>この記事の内容がAPIで取得できていることがわかります。<br><img src="https://images.microcms-assets.io/assets/157404dc1ca1414195671e7b5ffd8c86/1b6940bff275439686132bb38da936bb/blog-template-description3.png" alt=""></p><h2 id="h4c50a0f1e5"><br>次にやること🏃‍♂️</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。<br></p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer">JavaScript SDK</a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer">Nuxt SDK</a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer">Gatsby SDK</a></li></ul><p><br>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer">サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</a>もございます。<br><br>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br><br>サポート窓口：<a href="mailto:support@microcms.io" target="_blank" rel="noopener noreferrer">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge" target="_blank" rel="noopener noreferrer">https://help.microcms.io/ja/knowledge</a></p>';

const loop = (domNode: Element) => {
  const resultElements: Array<JSX.Element> = [];
  switch (domNode.name) {
    case 'h1':
      jsxElementGenerator(domNode, resultElements, h1);
      break;
    case 'h2':
      jsxElementGenerator(domNode, resultElements, h2);
      break;
    case 'h3':
      jsxElementGenerator(domNode, resultElements, h3);
      break;
    case 'h4':
      jsxElementGenerator(domNode, resultElements, h4);
      break;
    case 'h5':
      jsxElementGenerator(domNode, resultElements, h5);
      break;
    case 'p':
      jsxElementGenerator(domNode, resultElements, p);
      break;
    case 'ul':
      jsxElementGenerator(domNode, resultElements, ul);
      break;
    default:
      console.log(`${domNode.name}が未定義です`);
      break;
  }
  return resultElements;
};

const resultsMap = (result: { child: Node; name: string; data: string }) => {
  if (result.child instanceof Element) {
    switch (result.name) {
      case 'strong':
        return (
          <strong>
            {result.child.children.map((child) => {
              if (child instanceof Text) return <>{child.data}</>;
              return null;
            })}
          </strong>
        );
      case 'li':
        return (
          <li>
            {result.child.children.map((child) => {
              console.log(child);
              if (child instanceof Text) return <>{child.data}</>;
              return null;
            })}
          </li>
        );
      default:
        result.name && console.log(`${result.name}が未定義です`);
        return result.data;
    }
  } else if (result.child instanceof Text) {
    return result.child.data;
  } else {
    return <></>;
  }
};

const jsxElementGenerator = (
  domNode: Element,
  resultElements: Array<JSX.Element>,
  Component: FC<{
    children: JSX.Element;
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

  while (list.length) {
    let listCount = 1;
    if (list[0].name !== 'br' && list[0].name !== 'img') {
      // 次のbrタグまでの配列の長さを測定
      while (list.length > listCount && list[listCount].name !== 'br') {
        listCount++;
      }
      // 0番地からbrタグ手前までを抜き出す
      const results = list.splice(0, listCount);
      // 内容をセットする
      resultElements.push(
        <Component>
          <>
            {results.map((result) => {
              return resultsMap(result);
            })}
          </>
        </Component>
      );
    } else if (list[0].name === 'img') {
      // imgの貼り直し
      const result = list.splice(0, 1);
      result[0].child instanceof Element && resultElements.push(<img src={result[0].child.attribs.src} alt="" />);
    } else {
      // 主にbrなど不要なタグを削除
      list.splice(0, 1);
    }
  }
};

function App() {
  const a = parth(sampleHtml, {
    replace: (domNode) => {
      if (!(domNode instanceof Element)) return null;
      if (!(domNode.parent === null)) return null;

      const resultElements: Array<JSX.Element> = [];

      resultElements.push(...loop(domNode))
      // switch (domNode.name) {
      //   case 'h1':
      //     jsxElementGenerator(domNode, resultElements, h1);
      //     break;
      //   case 'h2':
      //     jsxElementGenerator(domNode, resultElements, h2);
      //     break;
      //   case 'h3':
      //     jsxElementGenerator(domNode, resultElements, h3);
      //     break;
      //   case 'h4':
      //     jsxElementGenerator(domNode, resultElements, h4);
      //     break;
      //   case 'h5':
      //     jsxElementGenerator(domNode, resultElements, h5);
      //     break;
      //   case 'p':
      //     jsxElementGenerator(domNode, resultElements, p);
      //     break;
      //   case 'ul':
      //     jsxElementGenerator(domNode, resultElements, ul);
      //     break;
      //   default:
      //     console.log(`${domNode.name}が未定義です`);
      //     break;
      // }

      // console.log(resultElements);
      return <>{resultElements.map((result) => result)}</>;
    },
  });

  return <>{a}</>;
}

export default App;
