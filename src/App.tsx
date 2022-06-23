import './App.css';

import parth, { Element } from 'html-react-parser';
import { jsxElementGenerator } from './lib/jsxElementGenerator';
import React from 'react';

// const sampleHtml: string =
//   '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉<br></p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。<br>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。<br><br>👇まずはここをクリックします。<br><img src="https://images.microcms-assets.io/assets/157404dc1ca1414195671e7b5ffd8c86/a646785aae4a41f581712bd01111bcd2/blog-template-description1.png" alt=""><br><br>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。<br><img src="https://images.microcms-assets.io/assets/157404dc1ca1414195671e7b5ffd8c86/4e0f1da46745436abf90df0c47ac07f0/blog-template-description2.png" alt=""><br><br>この記事の内容がAPIで取得できていることがわかります。<br><img src="https://images.microcms-assets.io/assets/157404dc1ca1414195671e7b5ffd8c86/1b6940bff275439686132bb38da936bb/blog-template-description3.png" alt=""></p><h2 id="h4c50a0f1e5"><br>次にやること🏃‍♂️</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。<br></p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer">JavaScript SDK</a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer">Nuxt SDK</a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer">Gatsby SDK</a></li></ul><p><br>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer">サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</a>もございます。<br><br>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br><br>サポート窓口：<a href="mailto:support@microcms.io" target="_blank" rel="noopener noreferrer">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge" target="_blank" rel="noopener noreferrer">https://help.microcms.io/ja/knowledge</a></p>';

const sampleHtml: string = '<h2>テスト</h2><h2>テスト</h2>  ';
function App() {
  let index: number = 0;
  const a = parth(sampleHtml, {
    replace: (domNode) => {
      if (!(domNode instanceof Element)) return null;
      if (!(domNode.parent === null)) return null;

      const resultElements: Array<JSX.Element> = [];

      resultElements.push(...jsxElementGenerator(domNode));
      index++;
      return <React.Fragment key={index}>{resultElements.map((result) => result)}</React.Fragment>;
    },
  });

  return <React.Fragment>{a}</React.Fragment>;
}

export default App;
