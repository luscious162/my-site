"use client";

import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';
import useTranslation from '@/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {/* space */}
          <span>{t("footer.inspired")}</span> Studio Lumio
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>{t("footer.typography")}</span> Inter
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>{t("footer.images")}</span> Unsplash
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {t("nav.blog")}
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {t("nav.newsletter")}
        </motion.li>
      </ul>
    </div>
  );
}
