import MainDisplayBox from "../components/MainDisplayBox"
import SectionDisplay from "../components/SectionDisplay"

export default function Home() {
  return (
    <MainDisplayBox headerText="phillip david shields">
      <SectionDisplay title="kia ora! welcome to my digital cv" titleFg="">
        <p>
          I threw this together to show off some of my noob skills. I am
          planning on adding some mobile responsiveness, but for now, everything
          is best viewed on a tablet or bigger. For this digital cv, I am using react, nextjs, and styled components. 
        </p>
        <p>
          click on one of the sections listed in the bottom left to have a look
          around. If you want to contact me, feel free to{" "}
          <a
            href="https://www.linkedin.com/in/phillip-d-shields/"
            className="text-link"
          >
            send me a message on linkedin
          </a>
          .
        </p>
      </SectionDisplay>
    </MainDisplayBox>
  );
}