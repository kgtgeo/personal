import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI Research',
    Svg: '',
    image: '/personal/img/jaist-logo.jpg',
    description: (
      <>
        Developed a novel continual learning framework for speech recognition system
      </>
    ),
  },
  {
    title: 'Software Engineer',
    Svg: '',
    image: '/personal/img/ruangguru-logo.svg',
    description: (
      <>
        Managed multiple K-12 educational products across different initiatives and projects in South East Asia region
      </>
    ),
  },
  {
    title: 'AI Engineer',
    Svg: '',
    image: '/personal/img/ristek-logo.svg',
    description: (
      <>
        Launched the first university-wide application for students-based class reviews
      </>
    ),
  },
];

function Feature({ Svg, image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {
          Svg == '' ?
            <img className={styles.featureSvg} src={image} />
            :
            <Svg className={styles.featureSvg} role="img" />
        }
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
