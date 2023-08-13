import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  file: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Timesyでつぶやく',
    file: '/img/edit.svg',
    description: (
      <>
        技術ブログのアイデア出しや、個人開発の分報として使ってもいいですし、日常のことだってもちろんつぶやけます。 Markdownなので普段使っているSNSよりも表現の幅が広がります。
      </>
    ),
  },
  {
    title: 'Timesyでリアクションする',
    file: '/img/good.svg',
    description: (
      <>
        ためになったことや、面白かったことにはリアクションを送ってみましょう。絵文字で気軽にリアクションするのもよし、Markdownで詳しくコメントするのもよしです。
      </>
    ),
  },
  {
    title: 'Timesyに貢献する',
    file: '/img/commit.svg',
    description: (
      <>
        TimesyはOSS（オープンソース・ソフトウェア）です。皆さんの考えをどんどんプロダクトに反映させていきたいと思っていますので、ぜひお気軽にコントリビュートしてみてください。
      </>
    ),
  },
];

function Feature({title, file, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={file} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
