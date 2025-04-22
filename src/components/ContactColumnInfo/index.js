"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ContactColumnInfo() {
  return (
    <>
      <div className={styles.contactcontainer}>
        <p className={`typography-Ag-camino-2-P  ${styles.title}`}>
         Contactanos
        </p>
        <div className={styles.linkcontainer}>
          <Image
            src={`/icons/whatsapp.png`}
            alt="more"
            width={20}
            height={20}
          />
          <p className={`typography-Ag-camino-2-P  `}>
            WhatsApp:{" "}
            <Link
              href="https://api.whatsapp.com/send/?phone=543446584076"
              target="_blank"
            >
              +54 3446 584076
            </Link>
          </p>
        </div>

        <div className={styles.linkcontainer}>
          <Image
            src={`/icons/insta.png`}
            alt="more"
            width={20}
            height={20}
          />
          <p className={`typography-Ag-camino-2-P  `}>
            Instagram:{" "}
            <Link
              href="https://api.whatsapp.com/send/?phone=543446584076"
              target="_blank"
            >
             @coenergysa
            </Link>
          </p>
        </div>

        <div className={styles.linkcontainer}>
          <Image
            src={`/icons/plane.png`}
            alt="more"
            width={15}
            height={15}
          />
          <Link href="mailto:info@coenergysa.com">
            <p className={`typography-Ag-camino-2-P `}>info@coenergysa.com</p>
          </Link>
        </div>

        <div className={styles.linkcontainer}>
          <Image
               src={`/icons/linkedin100.png`}
            alt="more"
            width={35}
            height={35}
            className={styles.linkedin}
          />
                    <Link href="https://www.linkedin.com/company/105452034/admin/page-posts/published/">

          <p className={`typography-Ag-camino-2-P  `}>
           Linkedin
          </p>
          </Link>
        </div>
      </div>
    </>
  );
}