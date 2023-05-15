import React, { useLayoutEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Waves } from "../Waves";
import styles from "./Layout.module.css";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const appHeight = (): void => {
    if (typeof document !== `undefined`) {
      document.documentElement.style.setProperty(
        `--app-height`,
        `${window.innerHeight}px`
      );
    }
  };

  useLayoutEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener(`resize`, appHeight);
    }
    appHeight();

    return () => {
      if (typeof window !== `undefined`) {
        window.removeEventListener(`resize`, appHeight);
      }
    };
  });

  return (
    <>
      <Waves />
      <main className={styles.container}>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={(): void => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>
      </main>
    </>
  );
};
