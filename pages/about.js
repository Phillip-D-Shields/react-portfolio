import MainDisplayBox from "../components/MainDisplayBox"
import SectionDisplay from "../components/SectionDisplay"
import LinkButton from "../components/LinkButton"

export default function About() {
  return (
    <MainDisplayBox headerBg="#fff" headerFg="#34fd" headerText="about page">
        <SectionDisplay title="goals" titleBg="#404040" titleFg="#f24f13">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio impedit perferendis illo quaerat debitis architecto accusantium, saepe error non sunt in ratione voluptates repellat?</p>
          <LinkButton url="#!" text="test button"  />
        </SectionDisplay>
    </MainDisplayBox>
  )
}

