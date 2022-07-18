import styled from "styled-components";
import { LinkButton } from "../components/linkButton";

const CodeDisplay = styled.div`
  /* height: 100%; */
  width: 90%;
  padding: 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: #404040;
  text-align: right;

  h2 {
    font-size: 1.75rem;
  }

  h1 {
    font-size: 5rem;
    margin: 2rem 0;
    padding: 0.5rem;
    background: #049dd9;
    color: #d9cccc;
    letter-spacing: 0.25rem;
  }

  p {
    text-indent: 0.75rem;
    font-size: 1.25rem;
    width: 50%;
    text-align: left;
  }

  h3 {
    width: 60%;
    font-size: 3rem;
    margin: 5rem 0 0.5rem 0;
    padding: 0.5rem;
    background: #f24f13;
    color: #404040;
    letter-spacing: 0.25rem;
  }
`;

export default function Code() {
  return (
    <CodeDisplay>
      <h2>I have lots of</h2>
      <h1>code</h1>
      <h2>here are some places you can view my js code.</h2>

      <h3>GitHub</h3>
      <p>
        lots of code and unfinished projects, and most of my best stuff is
        private, but feel free to roam around.
      </p>

      <LinkButton
        url="https://github.com/Phillip-D-Shields"
        text="check out my repos"
      />

      <h3>FreeCodeCamp</h3>
      <p>
        I had a proper go at FCC about two years ago. I even forgot to claim one
        of my certificates! FCC was essential in helping me understand some
        fundamentals of web dev and javascript.
      </p>
      <LinkButton
        url="https://www.freecodecamp.org/certification/phillip-d-shields/javascript-algorithms-and-data-structures"
        text="js certificate"
      />

      <LinkButton
        url="https://www.freecodecamp.org/certification/phillip-d-shields/responsive-web-design"
        text="responsive web certificate"
      />

      <h3>Exercism</h3>
      <p>
        This website saved my sanity during lockdown and really helped me
        develop my js knowledge. I had almost forgotten about this website,
        compiling material for this helped remind me. Time to start on some more
        exercises! Maybe add in a dash of typescript!
      </p>

      <LinkButton
        url="https://exercism.org/profiles/Phillip-D-Shields/solutions"
        text="my solutions"
      />
    </CodeDisplay>
  );
}
