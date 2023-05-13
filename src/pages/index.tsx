import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { config } from "../config";
import avatar from "../../public/avatar.png";
import styles from "../styles/page.module.css";
import { SocialLink, Waves } from "../components";

const Home: NextPage = () => (
  <>
    <Waves />
    <main className={styles.container}>
      <article className={styles.frame}>
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
      <ul className={styles.links}>{config.links.map(SocialLink)}</ul>
    </main>
  </>
);

export default Home;
