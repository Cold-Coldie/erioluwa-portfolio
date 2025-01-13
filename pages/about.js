import React, { useState } from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Skills from "./components/Skills";

const skils = [
  {
    title: "HTML",
    specificStyle: {
      border: " 1px solid rgb(204, 85, 52)",
      color: "rgb(204, 85, 52)",
    },
    imgSrc: "/icons/html-5.svg",
    imgAlt: "HTML 5 icon",
  },
  {
    title: "CSS",
    specificStyle: {
      border: "1px solid rgb(46, 74, 213)",
      color: "rgb(46, 74, 213)",
    },
    imgSrc: "/icons/css.svg",
    imgAlt: "CSS icon",
  },
  {
    title: "JavaScript",
    specificStyle: {
      border: "1px solid rgb(235, 217, 77)",
      color: "rgb(235, 217, 77)",
    },
    imgSrc: "/icons/javascript.svg",
    imgAlt: "JavaScript icon",
  },
  {
    title: "Tailwind CSS",
    specificStyle: {
      border: "1px solid rgb(73, 157, 201)",
      color: "rgb(73, 157, 201)",
    },
    imgSrc: "/icons/tailwind.svg",
    imgAlt: "Tailwind CSS icon",
  },
  {
    title: "React JS",
    specificStyle: {
      border: "1px solid rgb(73, 157, 201)",
      color: "rgb(73, 157, 201)",
    },
    imgSrc: "/icons/react.svg",
    imgAlt: "React JS icon",
  },
  {
    title: "Next JS",
    specificStyle: {
      border: "1px solid white",
      color: "white",
    },
    imgSrc: "/icons/next-js.svg",
    imgAlt: "Next JS icon",
  },
  {
    title: "Angular",
    specificStyle: {
      border: "1px solid rgb(119, 28, 233)",
      color: "rgb(119, 28, 233)",
    },
    imgSrc: "/icons/angular.svg",
    imgAlt: "Angular icon",
  },
  {
    title: "Jest",
    specificStyle: {
      border: "1px solid rgb(142, 71, 91)",
      color: "rgb(142, 71, 91)",
    },
    imgSrc: "/icons/jest.svg",
    imgAlt: "Jest icon",
  },
  {
    title: "Java",
    specificStyle: {
      border: "1px solid rgb(49, 114, 183)",
      color: "rgb(49, 114, 183)",
    },
    imgSrc: "/icons/java.svg",
    imgAlt: "Java icon",
  },
  {
    title: "Springboot",
    specificStyle: {
      border: "1px solid black",
      color: "black",
      background: "white",
    },
    imgSrc: "/icons/springboot.svg",
    imgAlt: "Springboot icon",
  },
];

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
            priority
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
            {skils?.map((item, index) => (
              <Skills
                key={index}
                title={item?.title}
                specificStyle={item?.specificStyle}
                imgSrc={item?.imgSrc}
                imgAlt={item?.imgAlt}
              />
            ))}
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
              My resume (PDF 58kb)
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
