import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import Head from "next/head";

const Contact = () => {
  const [goHomeText, setGoHomeText] = useState("erioluwa.");
  const [copyToClipboard, setCopyToClipboard] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : ""
  );
  const [allowMouseOver, setAllowMouseOver] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

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
      setAllowMouseOver(false);
    } else {
      setAllowMouseOver(true);
    }
  }, [screenWidth]);

  const copyText = () => {
    var textField = document.createElement("textarea");
    textField.innerText = "ogedengbeoluwasemilogo@gmail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    toast("Email copied!", { icon: "✅" });
  };

  const sendEmail = async () => {
    console.log(
      nameRef.current.value,
      emailRef.current.value,
      subjectRef.current.value,
      messageRef.current.value
    );

    const data = {
      fullName: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast("Message sent!", { icon: "✅" });
      } else {
        toast("Ooops! An error occured. Please try again", { icon: "🥺" });
      }
    } catch (error) {
      toast("Ooops! An error occured. Please try again", { icon: "🥺" });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Eriolwa's Portfolio | Contact</title>
        <meta name="description" content="Eriowa's portfolio contact page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.containerInner}>
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
          className={styles.blackPart}
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <div className={styles.contactHeading}>
              <div>
                We can do so much together. <div>Let's talk!</div>
              </div>
            </div>

            <div className={styles.contactBody}>
              <section className={styles.column1}>
                <div className={styles.column1Content}>
                  I am seeking out opportunities to collaborate with companies /
                  agencies / individuals, not just to work for them. I want to
                  bring my creativity and experience to the table where we can
                  work as a team to <strong>CREATE</strong> scalable products
                  and <strong>SOLVE</strong> practical problems
                  <p>
                    <strong>Let's make something GREAT!</strong>
                  </p>
                  <div className={styles.socials}>
                    <Link
                      href={"https://linkedin.com/in/erioluwa-ogedengbe"}
                      target="_blank"
                    >
                      <Image
                        className={styles.linkedin}
                        src={"/icons/linkedin-icon.svg"}
                        width={33}
                        height={33}
                        alt="LinkedIn icon"
                      />
                    </Link>

                    <div
                      onMouseOver={
                        allowMouseOver
                          ? () => {
                              setCopyToClipboard(true);
                            }
                          : undefined
                      }
                      onMouseLeave={
                        allowMouseOver
                          ? () => {
                              setCopyToClipboard(false);
                            }
                          : undefined
                      }
                      onClick={
                        allowMouseOver
                          ? copyText
                          : () => {
                              setCopyToClipboard((s) => !s);
                              copyText();
                            }
                      }
                      className={styles.copyToClipboard}
                    >
                      <Toaster />
                      {copyToClipboard ? (
                        <div
                          style={{
                            background: "white",
                            borderRadius: "5px",
                            padding: "7px",
                            color: "black",
                            fontWeight: "500",
                          }}
                        >
                          Copy Email
                        </div>
                      ) : (
                        <Image
                          className={styles.linkedinn}
                          src={"/icons/gmail-icon.svg"}
                          width={33}
                          height={33}
                          alt="Gmail icon"
                        />
                      )}
                    </div>

                    <Link
                      href={"https://twitter.com/cold_coldie"}
                      target="_blank"
                    >
                      <Image
                        className={styles.linkedinn}
                        src={"/icons/twitter-icon.svg"}
                        width={33}
                        height={33}
                        alt="Twitter icon"
                      />{" "}
                    </Link>

                    <span className={styles.phone}>
                      <Link href={"tel:+2348120304226"}>
                        <Image
                          className={styles.linkedinn}
                          src={"/icons/phone-icon.svg"}
                          width={33}
                          height={33}
                          alt="Phone icon"
                        />
                        <span>+234 81 2030 4226 </span>
                      </Link>
                    </span>
                  </div>
                </div>
              </section>

              <section className={styles.column2}>
                <div className={styles.contactCard}>
                  <h2>Send a Message</h2>

                  <div className={styles.cardBody}>
                    <div className={styles.inputWrapper}>
                      <span>
                        Full Name <span className={styles.astericks}>*</span>
                      </span>
                      <input
                        type="text"
                        placeholder="Full Name"
                        ref={nameRef}
                      />
                    </div>

                    <div className={styles.inputWrapper}>
                      <span>
                        Email <span className={styles.astericks}>*</span>
                      </span>
                      <input type="email" placeholder="Email" ref={emailRef} />
                    </div>

                    <div className={styles.inputWrapper}>
                      <span>
                        Subject <span className={styles.astericks}>*</span>
                      </span>
                      <input
                        type="text"
                        placeholder="Subject"
                        ref={subjectRef}
                      />
                    </div>

                    <div className={styles.inputWrapper}>
                      <span>
                        Your message here{" "}
                        <span className={styles.astericks}>*</span>
                      </span>
                      <textarea ref={messageRef} />
                    </div>

                    <button onClick={sendEmail}>
                      Send
                      <Image
                        className={styles.sendIcon}
                        src={"/icons/send-icon.svg"}
                        height={20}
                        width={20}
                        alt="Send icon"
                      />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>

        <div className={styles.grayPart}></div>
      </div>
    </div>
  );
};

export default Contact;
