import React, { useState } from "react";
import styles from "./styles/Project.module.css";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/Project/ProjectCard";
import { motion } from "framer-motion";
import Head from "next/head";

const Index = () => {
  const [goHomeText, setGoHomeText] = useState("erioluwa.");

  return (
    <div className={styles.container}>
      <Head>
        <title>Eriolwa's Portfolio | Projects</title>
        <meta name="description" content="Eriowa's portfolio projects page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.seeExperience}>
        <Link href={"/work/experience"}>
          View experience
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

      <section className={styles.project}>
        <div className={styles.projectHeadingWrapper}>
          <h2 className={styles.projectHeading}>Projects</h2>
        </div>

        <ProjectCard
          imageOne={"/static/movlix/movlix-loginscreen-desktop.png"}
          imageTwo={"/static/movlix/movlix-loginscreen-mobile.png"}
          imageThree={"/static/movlix/movlix-homescreen-desktop.png"}
          imageFour={"/static/movlix/movlix-homescreen-mobile.png"}
          imageFive={"/static/movlix/movlix-playscreen-desktop.png"}
          altText={"Movlix App"}
          projectTitle={"Movlix"}
          projectShortInfo={
            "Movlix is a web application with inspirations gotten from Netflix. The user interface was built with Next JS and styled with Modular CSS. It features a password-less login functionality, this was made possible through Magic Auth."
          }
          demolink={"https://movllix.netlify.app/"}
          githubLink={"https://github.com/Cold-Coldie/movlix"}
          key={1}
        />

        <ProjectCard
          imageOne={"/static/gadget/gadget-homescreen-desktop.png"}
          imageTwo={"/static/gadget/gadget-homescreen-mobile.png"}
          imageThree={"/static/gadget/gadget-individualscreen-desktop.png"}
          imageFour={"/static/gadget/gadget-individualscreen-mobile.png"}
          imageFive={"/static/gadget/gadget-displayscreen-desktop.png"}
          altText={"Gadget Connoisseur App"}
          projectTitle={"Gadget Connoisseur"}
          projectShortInfo={
            "This particular web application displays a list of gadget stores in Lagos, Nigeria. You can also check for available gadget stores in your vicinity by clicking the \"View stores nearby\" button which will then use your device's location to fetch gadget stores around. You have the ability to Up Vote for any store of your choice and the rating of the store will increase on every user's device. Airtable is the database tool I use to store informations like the rating and other things about the store. This project was built with Next JS and it was styled using Modular CSS."
          }
          demolink={"https://gadget-connoisseur.netlify.app/"}
          githubLink={"https://github.com/Cold-Coldie/gadget-stores-around"}
          key={2}
        />

        <ProjectCard
          imageOne={"/static/tour/tour-landingscreen-desktop.png"}
          imageTwo={"/static/tour/tour-landingscreen-mobile.png"}
          imageThree={"/static/tour/tour-emptyscreen-desktop.png"}
          imageFour={"/static/tour/tour-emptyscreen-mobile.png"}
          imageFive={"/static/tour/tour-randomscreen-desktop.png"}
          altText={"Tour App"}
          projectTitle={"Tour Display App"}
          projectShortInfo={
            "This web application was built using React JS and Tailwind CSS for its user interface. It displays details like image, price and little information about the various tour locations available. It provides the ability for the user to filter out any tour they are not interested in and also read more about a particular tour."
          }
          demolink={"https://erioluwa-tour-app.netlify.app/"}
          githubLink={"https://github.com/Cold-Coldie/react-tour-app"}
          key={3}
        />

        <ProjectCard
          imageOne={"/static/country/country-lightlanding-desktop.png"}
          imageTwo={"/static/country/country-lightlanding-mobile.png"}
          imageThree={"/static/country/country-darklanding-desktop.png"}
          imageFour={"/static/country/country-darklanding-mobile.png"}
          imageFive={"/static/country/country-individualscreen-desktop.png"}
          altText={"Country Info App"}
          projectTitle={"Country Info App"}
          projectShortInfo={
            "This web application displays the basic information of any country searched. You also have the option of filtering the countries to be displayed by selecting the region you are interested in. This application gives the opportunity of toggling between light mode and dark mode based on the user's preference. It was built using React JS, Tailwind CSS and all the data was gotten from a random API found on the internet. I used Context API to manage the states shared between the application."
          }
          demolink={"https://my-country-info.netlify.app/"}
          githubLink={"https://github.com/Cold-Coldie/country-info-app"}
          key={4}
        />

        <ProjectCard
          imageOne={"/static/quizster/quizster-homescreen-desktop.png"}
          imageTwo={"/static/quizster/quizster-homescreen-mobile.png"}
          imageThree={"/static/quizster/quizster-computerscreen-desktop.png"}
          imageFour={"/static/quizster/quizster-computerscreen-mobile.png"}
          imageFive={"/static/quizster/quizster-questionscreen-desktop.png"}
          altText={"Quizster App"}
          projectTitle={"Quizster"}
          projectShortInfo={
            "Quizster is a quiz web application I created as a personal project. The User Interface was built with React JS and the project was styled with Tailwind CSS. Users can select from any of the three subjects and three difficulty levels available. It has a score page that displays the rating of their performance in percentage."
          }
          demolink={"https://quizster-v1.netlify.app/"}
          githubLink={"https://github.com/Cold-Coldie/quizster-v1.0"}
          key={5}
        />

        <ProjectCard
          imageOne={"/static/cgpa/cgpa-landingscreen-desktop.png"}
          imageTwo={"/static/cgpa/cgpa-landingscreen-mobile.png"}
          imageThree={"/static/cgpa/cgpa-list-desktop.png"}
          imageFour={"/static/cgpa/cgpa-list-mobile.png"}
          imageFive={"/static/cgpa/cgpa-one-desktop.png"}
          altText={"CGPA Calculator"}
          projectTitle={"CGPA Calculator"}
          projectShortInfo={
            <span style={{ display: "grid" }}>
              <span>
                This is where my tech journey started. This was my very first
                project as a frontend developer. I can still feel the joy and
                feeling of accomplishment I felt after hosting this project. I
                had so many questions and uncertainty about if I could keep up
                with the numerous technologies I had to learn in order to remain
                relevant in the tech industry but I never let it overwhelm me. I
                must say I'm glad with what I've been able to learn so far and
                I'm super excited with the fact that I still have a lot to
                learn.
              </span>
              <br />
              <span>
                As a student, calculating my CGPA after each semester is usually
                confusing and likely prone to error. I decided to create a
                basic, simple-page web application to calculate my CGPA. The web
                application was created using HTML, CSS and vanilla Javascript.
                The web application can be used by only Nigerian schools whose
                maximum CGPA is 5.0.
              </span>
              <br />
              <span>
                The User Interface might not be the best but this project is
                still a solid 10 in my book. ❤️
              </span>
            </span>
          }
          demolink={"https://my-cgpa-calculator.netlify.app/"}
          githubLink={"https://github.com/Cold-Coldie/cgpa-calculator"}
          key={6}
        />
      </section>
    </div>
  );
};

export default Index;
