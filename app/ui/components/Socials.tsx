import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";

export type SizeProp =
  | "2xs"
  | "xs"
  | "sm"
  | "lg"
  | "xl"
  | "2xl"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x";

export default function Socials(size: SizeProp){
    return (
        <div className="flex items-center gap-[15px]">
            <a href="https://www.linkedin.com/in/justinespinal/">
            <FontAwesomeIcon
                icon={faLinkedin}
                size={size}
                style={{ color: "#ffffff" }}
            />
            </a>
            <a href="https://www.instagram.com/espicodes/">
            <FontAwesomeIcon
                icon={faInstagram}
                size={size}
                style={{ color: "#ffffff" }}
            />
            </a>
            <a href="mailto:espinaljustin03@gmail.com">
                <FontAwesomeIcon
                    icon={faEnvelope}
                    size={size}
                    style={{ color: "#ffffff" }}
                />
            </a>
            <a
              href="/assets/Justin_Espinal_2024.pdf"
              download
              target="_blank"
            >
                <FontAwesomeIcon
                    icon={faFile}
                    size={size}
                    style={{ color: "#ffffff" }}
                />
            </a>
        </div>
        );
}