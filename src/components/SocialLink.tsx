import React, { useCallback, useRef } from "react";
import type { SiteConfig } from "../types";
import styles from "../styles/link.module.css";

export const SocialLink: React.FC<SiteConfig["links"][number]> = ({
  Icon,
  url,
  label
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const handleMove: React.PointerEventHandler = useCallback((ev) => {
    const rect = ev.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    if (ref.current) {
      ref.current.style.setProperty(`--mouse-x`, `${ev.clientX - centerX}`);
      ref.current.style.setProperty(`--mouse-y`, `${centerY - ev.clientY}`);
    }
  }, []);
  const handleLeave: React.PointerEventHandler = useCallback(() => {
    if (ref.current) {
      ref.current.style.removeProperty(`--mouse-x`);
      ref.current.style.removeProperty(`--mouse-y`);
    }
  }, []);
  return (
    <li key={url} className={styles.frame}>
      <a
        ref={ref}
        className={styles.link}
        href={url}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        <div className={styles.inner}>
          <Icon />
          {label}
        </div>
      </a>
    </li>
  );
};
