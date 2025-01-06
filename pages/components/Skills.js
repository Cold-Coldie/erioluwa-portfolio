import Image from "next/image";
import React from "react";

const Skills = ({ title, specificStyle, imgSrc, imgAlt }) => {
  return (
    <div
      style={{
        ...specificStyle,
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Image src={imgSrc} width={33} height={33} alt={imgAlt} />
      {title}
    </div>
  );
};

export default Skills;
