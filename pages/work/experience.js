import React, { useState } from "react";
import styles from "./styles/Experience.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Experience = () => {
  const [goHomeText, setGoHomeText] = useState("erioluwa.");

  return (
    <div className={styles.container}>
      <Head>
        <title>Eriolwa's Portfolio | Experience</title>
        <meta name="description" content="Eriowa's portfolio experience page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.seeProjects}>
        <Link href={"/work"}>
          View personal projects
          <span>
            <Image
              src={"/icons/chevron-double-right.svg"}
              className={styles.chevron}
              width={20}
              height={20}
              alt="right arrow icon"
            />
          </span>
        </Link>
      </div>

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

      <section className={styles.experience}>
        <div className={styles.experienceHeading}>
          <h2 className={styles.firstHeading}>Experience</h2>
        </div>

        <motion.div
          className={styles.firstExperienceWrapper}
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.firstExperience}>
            <h3 className={styles.firstExperienceHeading}>
              Software Developer
            </h3>

            <div className={styles.individualExperienceBody}>
              <p className={styles.role}>Software Developer (Remote)</p>
              <p className={styles.organization}>iBCScorp</p>
              <p className={styles.date}>
                <span>06/2022 - Present</span> <span>Idaho, United States</span>
              </p>
              <p className={styles.organizationDetails}>
                iBCScorp is a company that empowers businesses by providing
                web-based tools and technologies.
              </p>
              <div className={styles.achievementsWrapper}>
                <p className={styles.achievementsHeading}>Achievements/Tasks</p>
                <p className={styles.achievements}>
                  <span className={styles.dash}> U </span> sed tools like React,
                  Gatsby and Graphql to implement new designs and
                  functionalities that improved administration and User
                  Experience on the admin software and customers web-based tool.
                </p>
                <p className={styles.achievements}>
                  <span className={styles.dash}> F </span> ixed lots of bugs.
                </p>
                <p className={styles.achievements}>
                  <span className={styles.dash}>L</span> earnt and used new
                  technologies to make the company's software scalable.
                </p>
                <p className={styles.achievements}>
                  <span className={styles.dash}> C </span> omposed articles
                  about technologies used in the company's software and also
                  touched other topics like performance and the likes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.firstExperienceWrapper}
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.firstExperience}>
            <h3 className={styles.secondExperienceHeading}>
              Frontend Developer
            </h3>

            <div className={styles.individualExperienceBody}>
              <p className={styles.role}>Frontend Developer, Intern (Remote)</p>
              <p className={styles.organization}>SideHustle</p>
              <p className={styles.date}>
                <span>10/2021 - 12/2021</span> <span>Lagos Sate, Nigeria</span>
              </p>
              <p className={styles.organizationDetails}>
                SideHustle is a skill management platform that is aimed at
                empowering youths with digital skills.
              </p>
              <div className={styles.achievementsWrapper}>
                <p className={styles.achievementsHeading}>Achievements/Tasks</p>
                <p className={styles.achievements}>
                  <span className={styles.dash}> S </span> tarted and completed
                  various personal projects putting functionality and
                  responsiveness paramount.
                </p>
                <p className={styles.achievements}>
                  <span className={styles.dash}> G </span> ood understanding and
                  usage of Git & GitHub because I worked remotely with my team
                  members.
                </p>
                <p className={styles.achievements}>
                  <span className={styles.dash}> C </span> onsuming of API using
                  the fetch method and manipulating the data gotten from the API
                  on the frontend.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Experience;
