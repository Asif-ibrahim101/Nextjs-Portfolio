/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/About.module.css";
import { BsFolderFill, BsMarkdownFill } from "react-icons/bs";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const About = () => {
  const [showReact, setShowReact] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [showHtml, setShowHtml] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className={style.about}>
      <div className={style.skill_menu} onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <AiOutlineClose /> : <HiOutlineMenu />}
      </div>

      <div className={style.left}>
        <motion.div
          className={style.left_number}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { y: "100px", opacity: 0 },
            visible: {
              y: "-370px",
              opacity: 1,
              transition: { type: "spring", delay: 0.2, duration: 2 },
            },
          }}
        >
          {Array.from({ length: 36 }, (_, i) => (
            <span
              key={i}
              className={
                i < 16
                  ? style[`text_fade_0${Math.floor(i / 8) + 1}`]
                  : undefined
              }
            >
              {15 + i}
            </span>
          ))}
        </motion.div>
        <div className={style.left_line}></div>
        <div className={style.left_line2}></div>
        <motion.div
          className={style.left_about}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { y: "300px", opacity: 0 },
            visible: {
              y: "0px",
              opacity: 1,
              transition: { type: "spring", delay: 0.2, duration: 3 },
            },
          }}
        >
          <span className={style.ml_2}> /**</span>
          <span style={{ fontWeight: "bold" }}>* About me</span>
          <span>* Creative and self-starting Front-End Developer</span>
          <span>* with 2 years experience and maintaining</span>
          <span>* responsive websites.</span>
          <span>* Proficient in HTML, CSS, JavaScript</span>
          <span>* and React plus modern libraries and frameworks.</span>
          <span className={style.ml_2}>*/</span>
        </motion.div>
      </div>
      {showMenu && (
        <motion.div
          className={style.right}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { x: "100px", opacity: 0 },
            visible: {
              x: "0",
              opacity: 1,
              transition: { type: "spring", delay: 2 },
            },
          }}
        >
          <div className={style.right_container}>
            <h3>Explorer</h3>
            <div className={style.right_interest}>
              <span>
                <FiChevronDown />
              </span>
              <span style={{ marginLeft: "5px" }}>MY INTERESTS</span>
              {[
                { label: "React", color: "rgb(235,203,139)", state: showReact, setState: setShowReact, items: ["reusable components.md", "routing.md", "fetching api.md", "context api.md", "redux.md"] },
                { label: "Next", color: "rgb(136,192,208)", state: showNext, setState: setShowNext, items: ["reusable components.md", "routing.md", "fetching api.md", "SSR.md"] },
                { label: "Library", color: "rgb(191,97,106)", state: showLibrary, setState: setShowLibrary, items: ["material ui.md", "bootstrap.md", "tailwind css.md", "framer motion.md"] },
                { label: "Html & CSS", color: "rgb(163,190,140)", state: showHtml, setState: setShowHtml, items: ["responsive website.md", "grid flexbox.md"] },
                { label: "Free Time", color: "whitesmoke", state: showFree, setState: setShowFree, items: ["read quran.md", "play video games.md", "hang out with friends.md", "learn new things.md", "building side project.md"] },
              ].map(({ label, color, state, setState, items }, index) => (
                <div className={style.skill} key={index}>
                  <div onClick={() => setState(!state)} className={style.dropdownSkill}>
                    <span>{state ? <FiChevronDown /> : <FiChevronRight />}</span>
                    <span style={{ color }}>{<BsFolderFill />}</span>
                    <span> {label}</span>
                  </div>
                  <AnimatePresence>
                    {state && (
                      <motion.div
                        className={style.showSkill}
                        initial="hidden"
                        animate="visible"
                        exit="go"
                        variants={{
                          hidden: { y: "-20px", opacity: 0 },
                          visible: {
                            y: "0",
                            opacity: 1,
                            transition: { type: "spring", delay: 0.2, duration: 0.5 },
                          },
                          go: {
                            y: "-20px",
                            opacity: 0,
                            transition: { type: "spring", delay: 0.2, duration: 0.3 },
                          },
                        }}
                      >
                        {items.map((item, i) => (
                          <p key={i}>
                            <BsMarkdownFill /> {item}
                          </p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
