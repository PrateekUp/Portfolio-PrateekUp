import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
// import { services } from "../data/info";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading -[30px]"
      >
        An enthusiastic student who is passionate to learn anything new he
        encounters. Worked in various clubs of my college acquiring real
        experience of working as a team and also enhancing my communication
        skills. Solved plenty of Data Structure and Algorithm problems and have
        hands-on experience in the field of Web Development. Looking forward to
        Software Developer roles to further add up to my skills and contribute
        to the real industry. Strong community and social services professional
        with a Bachelor of Technology - BTech focused in Mechanical Engineering
        from Indian Institute of Technology(IIT), Patna.
      </motion.p>
    </>
  );
};

export default About;
