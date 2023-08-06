import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  const [hello, setHello] = useState("Hello.");
  const [iAm, setIAm] = useState("I am");
  const [name, setName] = useState("Erioluwa");

  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : ""
  );
  const [tapAnywhere, setTapAnywhere] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth <= 768) {
      setTapAnywhere(true);
    } else {
      setTapAnywhere(false);
    }
  }, [screenWidth]);

  const handleToggleLinks = () => {
    setShowLinks((s) => !s);
    setDelay(0.5);

    if (!showLinks) {
      setHello("About");
      setIAm("Work");
      setName("Contact");
    } else {
      setHello("Hello.");
      setIAm("I am");
      setName("Erioluwa");
    }
  };

  const handleGotoAbout = (e) => {
    hello == "About" ? router.push("/about") : handleToggleLinks;
  };

  const handleGotoWork = (e) => {
    iAm == "Work" ? router.push("/work") : handleToggleLinks;
  };

  const handleGotoContact = (e) => {
    name == "Contact" ? router.push("/contact") : handleToggleLinks;
  };

  const [duration, setDuration] = useState(0.8);
  const [delay, setDelay] = useState(0.5);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDuration(0.5);
      setDelay(0);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [showLinks]);

  return (
    <div
      className={styles.container}
      onClick={tapAnywhere ? handleToggleLinks : undefined}
    >
      <Head>
        <title>Erioluwa Portfolio | Home</title>
        <meta name="description" content="Erioluwa portfolio's home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.containerTexts}>
        <div className={styles.col1}>
          <motion.div
            key={showLinks.toString()[0]}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration }}
            whileHover={{
              translateX: "10%",
              transition: { duration },
            }}
            onMouseOver={
              !tapAnywhere
                ? () => {
                    setHello("About");
                  }
                : undefined
            }
            onMouseOut={
              !tapAnywhere
                ? () => {
                    setHello("Hello.");
                  }
                : undefined
            }
            onClick={handleGotoAbout}
          >
            {hello}
          </motion.div>

          <motion.div
            className={styles.name}
            key={showLinks.toString()[1]}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration, delay }}
            whileHover={{
              translateX: "10%",
              transition: { duration },
            }}
            onMouseOver={
              !tapAnywhere
                ? () => {
                    setIAm("Work");
                  }
                : undefined
            }
            onMouseOut={
              !tapAnywhere
                ? () => {
                    setIAm("I am");
                  }
                : undefined
            }
            onClick={handleGotoWork}
          >
            {iAm}
          </motion.div>

          <motion.div
            className={styles.name}
            key={showLinks.toString()[2]}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration, delay: delay * 2 }}
            whileHover={{
              translateX: "10%",
              transition: { duration },
            }}
            onMouseOver={
              !tapAnywhere
                ? () => {
                    setName("Contact");
                  }
                : undefined
            }
            onMouseOut={
              !tapAnywhere
                ? () => {
                    setName("Erioluwa");
                  }
                : undefined
            }
            onClick={handleGotoContact}
          >
            {name}
          </motion.div>
        </div>

        <div className={styles.col2}></div>
      </div>

      {tapAnywhere && (
        <motion.div className={styles.tapAnywhere}>Tap Anywhere</motion.div>
      )}

      {/* <div className={styles.footer}>Made by ME with ❤️</div> */}
    </div>
  );
}
