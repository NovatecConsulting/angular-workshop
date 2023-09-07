import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Deep dive with experts',
    Svg: require('@site/static/img/undraw_teaching_re_g7e3.svg').default,
    description: (
      <>
          Unlock the full potential of <b>Angular</b> with our immersive workshop!
          Dive deep into cutting-edge techniques and elevate your web development skills to create seamless, dynamic applications.
      </>
    ),
  },
  {
    title: 'Hands on',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
          Experience a tailored Angular workshop that places a sharp focus on individual exercises.
          Hone your skills through hands-on activities designed to empower you with the expertise needed to build powerful, interactive web applications.
      </>
    ),
  },
  {
    title: 'Powered by inspiration',
    Svg: require('@site/static/img/undraw_team_collaboration_re_ow29.svg').default,
    description: (
      <>
          Join our collaborative Angular workshop, where you'll not only engage in hands-on exercises but also have ample opportunities to ask questions.
          Elevate your skills with a supportive learning environment, ensuring you leave with a deep understanding of Angular development.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
