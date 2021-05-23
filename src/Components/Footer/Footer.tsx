import React from 'react';
import css from './Footer.module.css';

const Footer:React.FC = () => (
  <footer className={css.footer}>
    <div className={css.footerContent}>
      <div className={css.footerBlock}>
        <div className={css.title}>My Links</div>
        <a href="https://github.com/maxkrasiloff">github</a>
        <a href="https://perm.hh.ru/resume/3854309cff08b835530039ed1f7a6754476945">hh.ru</a>
        <a href="https://career.habr.com/mark-zolotaryov">Хабр Карьера</a>
      </div>
    </div>
  </footer>
);

export default Footer;
