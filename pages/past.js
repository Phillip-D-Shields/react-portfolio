import MainDisplayBox from "../components/MainDisplayBox"
import SectionDisplay from "../components/SectionDisplay"

export default function Past() {
  return (
    <MainDisplayBox headerText="past experience">
      <SectionDisplay title="UN Volunteer">
        <p>
          I volunteered with the UN helping with adjustments and upgrades to
          websites for non-profits that were partnered with the UN. Most of the
          work was fixing syntax errors in HTML or CSS, editing English
          mistakes, or occasionally adding a new section. It was a good
          experience and a good introduction to how small teams communicate and
          work together.
        </p>
        <p>
          One of my site redesign submissions was selected for consideration by
          a Nepalese non-profit, but ultimately was not chosen for the website
          upgrade.
        </p>
      </SectionDisplay>
      <SectionDisplay title="DecentraCorp">
        <p>
          DecentraCorp was a passion project by a blockchain developer that I
          met on Reddit. I worked with him to build and design three websites,
          the first two using mostly bootstrap and the third with react. While
          working on the react upgrade, my partner was headhunted by a
          blockchain team and DecentraCorp ceased further development.
        </p>
        <p>
          It was a really good experience that let me explore and better
          understand bootstrap and react. I really enjoyed the creative process
          of designing the logos and page layouts.
        </p>
      </SectionDisplay>
    </MainDisplayBox>
  );
}
