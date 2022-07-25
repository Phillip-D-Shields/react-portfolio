import MainDisplayBox from "../components/MainDisplayBox"
import SectionDisplay from "../components/SectionDisplay"
import LinkButton from "../components/LinkButton"

export default function Code() {
  return (
    <MainDisplayBox headerText="code">
      <SectionDisplay title="GitHub">
        <p>
          I have lots of code and unfinished projects on GitHub. Some of my best
          stuff is private, but feel free to roam around.
        </p>

        <LinkButton
          url="https://github.com/Phillip-D-Shields"
          text="check out my repos"
        />
      </SectionDisplay>
      <SectionDisplay title="FreeCodeCamp">
        <p>
          I had a proper go at FCC about two years ago. The coursework helped me
          cement the fundamentals of web development and js.
        </p>
        <LinkButton
          url="https://www.freecodecamp.org/certification/phillip-d-shields/javascript-algorithms-and-data-structures"
          text="js certificate"
        />

        <LinkButton
          url="https://www.freecodecamp.org/certification/phillip-d-shields/responsive-web-design"
          text="responsive web certificate"
        />
      </SectionDisplay>
      <SectionDisplay title="Exercism">
        <p>
          This website saved my sanity during the pandemic lockdown and helped
          me expand my js knowledge. Now that I have some free time again, I am
          planning on trying to finish the js track.
        </p>

        <LinkButton
          url="https://exercism.org/profiles/Phillip-D-Shields/solutions"
          text="my solutions"
        />
      </SectionDisplay>
    </MainDisplayBox>
  );
}
