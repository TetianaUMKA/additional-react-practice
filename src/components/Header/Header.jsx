import style from "./Header.module.css";

export const Header = ({ children }) => {
  return (
    <>
      <div className={style.decor}>&thinsp;</div>
      <div className={style.nav_decor}>{children}</div>
    </>
  );
};
