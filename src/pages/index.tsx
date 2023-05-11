import React from "react";
import Image from "next/image";
import * as icons from "react-icons/si";
import { config } from "../config";
import avatar from "../../public/avatar.png";
import styles from "../theme.module.css";

const Home: React.FC = () => (
  <main className={styles.container}>
    <article className={styles.cell}>
      <figure className={styles.profile}>
        <div className={styles.avatar}>
          <Image alt={config.name} src={avatar} />
        </div>
        <figcaption className={styles.about}>
          <h1 className={styles.name}>{config.name}</h1>
          <h2 className={styles.title}>{config.title}</h2>
        </figcaption>
      </figure>
    </article>
    <ul className={styles.links}>
      {config.links.map(({ platform, url, label }) => {
        // eslint-disable-next-line import/namespace
        const Icon = icons[`Si${platform}`];
        if (!url.length) {
          return null;
        }
        return (
          <li key={platform} className={styles.cell}>
            <a className={styles.socialLink} href={url}>
              <Icon />
              {label ?? platform}
            </a>
          </li>
        );
      })}
    </ul>
  </main>
);

export default Home;
