import MainDisplayBox from "../components/MainDisplayBox";
import SectionDisplay from "../components/SectionDisplay";

export default function Home() {
  return (
    <MainDisplayBox headerText="phillip david shields">
      <SectionDisplay title="kia ora! welcome to my digital resume" titleFg="">
        <p>
          I threw this together to show off some of my noob skills. I am still
          working on making things mobile responsive, so apologies if you tried
          viewing this on a phone 😬.
        </p>
        <p>
          This digital resume was built using react, nextjs, and styled
          components.I have some planned additions when I get some time.
        </p>
        <p>
          Have a look around. If you want to contact me, feel free to{" "}
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
