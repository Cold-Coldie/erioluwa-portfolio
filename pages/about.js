import React, { useState } from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const About = () => {
  const [goHomeText, setGoHomeText] = useState("erioluwa.");

  return (
    <div className={styles.container}>
      <Head>
        <title>Eriolwa's Portfolio | About</title>
        <meta name="description" content="Eriowa's portfolio about page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.headingContainer}>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            translateX: "30%",
            transition: { duration: 0.5 },
          }}
          className={styles.goHome}
          onMouseOver={() => {
            setGoHomeText("erioluwa.home");
          }}
          onMouseLeave={() => {
            setGoHomeText("erioluwa.");
          }}
        >
          <Link href={"/"}>{goHomeText}</Link>
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div>I build </div>digital products
        </motion.div>
      </div>

      <motion.div
        className={styles.pictureContainer}
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.pictureWrapper}>
          <Image
            className={styles.image}
            src={"/static/about-erioluwa.jpg"}
            width={600}
            height={700}
            alt="about erioluwa image"
          />
        </div>
      </motion.div>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <h2>About</h2>

          <p className={styles.firstParagraph}>
            Hi, I am an experienced and highly skilled software developer with a
            passion for crafting scalable softwares and providing efficient
            solutions.
          </p>
          <p>
            With my years of experience in the industry, I have honed my
            experience in Frontend Development, delivering softwares that are
            user-friendly and efficient accross diverse domains.
          </p>
          <p>
            I don't like to define myself by the work l've done. I define myself
            by the work I want to do. Skills can be taught, personality is
            inherent. I prefer to keep learning, continue challenging myself,
            and do interesting things that matter.
          </p>
          <p>
            My commitment to excellence drives me to continuously explore
            emerging technologies, staying at the forefront of the ever-evolving
            software landscape.
          </p>
          <p>
            Also, my abundant energy fuels me in the pursuit of many interests,
            hobbies and areas of study. I'm a fast learner, and I'm able to pick
            up new skills with ease.
          </p>

          <p>Below are some of my favourite technologies.</p>

          <div>
            <div
              style={{
                border: " 1px solid rgb(204, 85, 52)",
                color: "rgb(204, 85, 52)",
              }}
            >
              HTML
            </div>
            <div
              style={{
                border: "1px solid rgb(46, 74, 213)",
                color: "rgb(46, 74, 213)",
              }}
            >
              CSS
            </div>
            <div
              style={{
                border: "1px solid rgb(235, 217, 77)",
                color: "rgb(235, 217, 77)",
              }}
            >
              JavaScript
            </div>
            <div
              style={{
                border: "1px solid rgb(98, 186, 243)",
                color: "rgb(98, 186, 243)",
              }}
            >
              Tailwind CSS
            </div>
            <div
              style={{
                border: "1px solid rgb(73, 157, 201)",
                color: "rgb(73, 157, 201)",
              }}
            >
              React JS
            </div>
            <div style={{ border: "1px solid white", color: "white" }}>
              Next JS
            </div>
            <div
              style={{
                border: "1px solid rgb(103, 160, 80)",
                color: "rgb(103, 160, 80)",
              }}
            >
              Node JS
            </div>
            <div style={{ border: "1px solid white", color: "white" }}>
              Express JS
            </div>
          </div>

          <p>Below is a PDF format of my resume </p>

          <motion.div
            whileHover={{
              translateX: "5%",
              transition: { duration: 0.5 },
            }}
            className={styles.resume}
          >
            <Link href={"/uploads/erioluwa-resume.pdf"}>
              My resume (pdf 56kb)
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
