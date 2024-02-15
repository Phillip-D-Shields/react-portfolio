import MainDisplayBox from "../components/MainDisplayBox";
import SectionDisplay from "../components/SectionDisplay";

export default function Past() {
  return (
    <MainDisplayBox headerText="experience">
      <SectionDisplay title="Genia">
        <p>
          In my current role as the lead developer at Genia, I have been
          entrusted with the comprehensive maintenance and enhancement of our
          bespoke factory management system, with a keen focus on maximizing
          system uptime and implementing strategic improvements. My
          responsibilities encompass the meticulous management of our GitHub
          repositories, ensuring timely resolution of bugs and seamless
          introduction of new features. Leveraging a sophisticated technology
          stack that includes React, JavaScript, GraphQL, C#, and SQL, I have
          contributed extensively to the development and optimization of our
          core codebase. Additionally, my versatility has allowed me to
          undertake diverse projects utilizing C++, Python, and Go, further
          broadening our technological footprint. Recently, I have extended my
          expertise to support our marketing team, addressing critical bugs in
          their Angular and Strapi-based website, thereby enhancing our digital
          presence and operational efficiency.
        </p>
      </SectionDisplay>
      <SectionDisplay title="UN Volunteer">
        <p>
          As a former volunteer with the United Nations, I contributed to the
          technological empowerment of non-profits through the enhancement and
          adjustment of their online platforms. My role primarily involved
          rectifying syntax errors in HTML and CSS, refining content for clarity
          in English, and innovatively adding new sections to enrich user
          engagement. This opportunity not only honed my technical skills but
          also provided valuable insights into the dynamics of small team
          collaboration and effective communication. Notably, one of my website
          redesign proposals was shortlisted for implementation by a Nepalese
          non-profit, marking a significant recognition of my contribution,
          albeit it was not selected for final execution.
        </p>
      </SectionDisplay>
      <SectionDisplay title="DecentraCorp">
        <p>
          At DecentraCorp, a venture initiated by an enterprising blockchain
          developer I encountered on Reddit, I played a pivotal role in
          conceptualizing and executing the design and development of three
          distinct websites. Our initial projects were crafted using Bootstrap,
          setting a solid foundation for the advanced React-based redesign that
          marked our third collaboration. This partnership was a profound
          learning experience, deepening my understanding of Bootstrap and
          React, and fostering a creative exploration in logo and webpage
          design. Although the project was discontinued due to my partner
          starting a new professional engagement, the journey was immensely
          enriching, blending technical skill development with artistic
          expression.
        </p>
      </SectionDisplay>
    </MainDisplayBox>
  );
}
