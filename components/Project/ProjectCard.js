import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const ProjectCard = ({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  altText,
  projectTitle,
  projectShortInfo,
  demolink,
  githubLink,
}) => {
  var carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const borderColors = [
    "rgb(255, 120, 120)",
    "rgb(255, 255, 120)",
    "rgb(255, 120, 255)",
    "rgb(120, 120, 255)",
    "rgb(120, 255, 120)",
  ];
  let randomIndex = Math.floor(Math.random() * 5);

  return (
    <motion.div
      className={styles.individualProjectWrapper}
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className={styles.individualProject}
        style={{ border: `1px solid ${borderColors[randomIndex]}` }}
      >
        <div className={styles.carousel}>
          <Slider {...carouselSettings}>
            <div className={styles.carouselItem}>
              <Image
                src={imageOne}
                alt={altText}
                className={styles.carouselImage}
                height={250}
                width={500}
                priority
              />
            </div>
            <div className={styles.carouselItem}>
              <Image
                src={imageTwo}
                alt={altText}
                height={250}
                width={130}
                priority
              />
            </div>
            <div className={styles.carouselItem}>
              <Image
                src={imageThree}
                alt={altText}
                className={styles.carouselImage}
                height={250}
                width={500}
                priority
              />
            </div>
            <div className={styles.carouselItem}>
              <Image
                src={imageFour}
                alt={altText}
                height={250}
                width={130}
                priority
              />
            </div>
            <div className={styles.carouselItem}>
              <Image
                src={imageFive}
                alt={altText}
                className={styles.carouselImage}
                height={250}
                width={500}
                priority
              />
            </div>
          </Slider>
        </div>
        <div className={styles.individualProjectBody}>
          <div
            className={styles.projectTitle}
            style={{ color: borderColors[randomIndex] }}
          >
            {projectTitle}
          </div>
          <p className={styles.projectShortInfo}>{projectShortInfo}</p>

          <div className={styles.projectButtonWrapper}>
            <div className={styles.projectButtons}>
              <Link href={demolink} target="_blank">
                <span
                  style={{ background: borderColors[randomIndex] }}
                  className={styles.demoButton}
                >
                  Demo{" "}
                  <Image
                    src={"/icons/play.svg"}
                    width={25}
                    height={25}
                    alt="Demo icon"
                  />
                </span>
              </Link>

              <Link href={githubLink} target="_blank">
                <span
                  style={{ background: borderColors[randomIndex] }}
                  className={styles.githubButton}
                >
                  <Image
                    src={"/icons/github.svg"}
                    width={25}
                    height={25}
                    alt="GitHub icon"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
