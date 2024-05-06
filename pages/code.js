import MainDisplayBox from "../components/MainDisplayBox";
import SectionDisplay from "../components/SectionDisplay";
import LinkButton from "../components/LinkButton";

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
      <SectionDisplay title="Digiwha">
        <p>
          Digiwha is a new project I am working on with a friend. Digiwha
          gamifies learning Te Reo Māori. This is a MVP and still under
          development, but the landing page is pretty neat. It is a passion
          project that we are developing in our spare time.
        </p>
        <LinkButton
          url="https://sprightly-sherbet-08bec4.netlify.app/"
          text="Digiwha prototype"
        />
      </SectionDisplay>
      <SectionDisplay title="some random js projects">
        <p>
          Some random javascript projects to help me learn and practice some
          JavaScript and CSS stuff. Mostly hosted via GitHub pages.
        </p>
        <LinkButton
          url="https://phillip-d-shields.github.io/js-pip/"
          text="picture in picture (needs some permissions to use)"
        />
        <LinkButton
          url="https://github.com/Phillip-D-Shields/js-jokes"
          text="jokes app (just the repo, no live example)"
        />
        <LinkButton
          url="https://phillip-d-shields.github.io/js-theme-toggle/"
          text="theme toggler"
        />
        <LinkButton
          url="https://phillip-d-shields.github.io/ye-old-quote-generator/"
          text="a good ol' quote generator"
        />
        <LinkButton
          url="https://phillip-d-shields.github.io/infinite-scrolls/"
          text="unsplash infinite scrolls"
        />
        <LinkButton
          url="https://phillip-d-shields.github.io/js-animation-template/"
          text="an animation extravaganza"
        />
        <LinkButton
          url="https://phillip-d-shields.github.io/js-nifty-navigator/"
          text="some lovely navigation, click around"
        />
      </SectionDisplay>
      <SectionDisplay title="Nari Sewa Kendra">
        <p>
          My website redesign submission for a Nepalese non-profit. Just plain
          old html and css.
        </p>

        <LinkButton
          url="https://phillip-d-shields.github.io/Nari-Sewa-Kendra/"
          text="Nari Sewa Kendra"
        />
      </SectionDisplay>
      <SectionDisplay title="DecentraCorp">
        <p>
          The react upgrade that was being developed when the DecentraCorp
          project ended. Built with react and tachyons css framework.
        </p>
        <LinkButton
          url="https://elastic-almeida-ef8aa4.netlify.app/"
          text="DecentraCorp"
        />
      </SectionDisplay>
      <SectionDisplay title="NISA Quiz Bowl App">
        <p>
          During my second semester at NMIT I helped found NISA (Nelson IT
          Student Association) and made this quiz app for the first meet up. The
          app is built with react, typescript, and tachyons css framework.
        </p>

        <LinkButton
          url="https://goofy-kilby-4b8a86.netlify.app/"
          text="quiz bowl app"
        />
        <LinkButton
          url="https://github.com/Phillip-D-Shields/tsx-quiz-app"
          text="GitHub repo"
        />
      </SectionDisplay>
      <SectionDisplay title="Ethereum NFT market">
        <p>
          For the third assessment of my WEB601 class at NMIT, I made an NFT
          market for the Ethereum blockchain. In order to interact with the live
          example you need{" "}
          <a href="https://metamask.io/" className="text-link">
            metamask browser wallet
          </a>{" "}
          connected to the Rinkeby test network. And you will need{" "}
          <a href="https://faucets.chain.link/rinkeby" className="text-link">
            some rinkeby test net eth
          </a>{" "}
          to create or purchase NFTs. Not to worry, test net eth is free. The
          market is built with react, nextjs, hardhat, and tailwind css
          framework.
        </p>

        <LinkButton
          url="https://next-evm-nft-market-v2.vercel.app/"
          text="NFT market"
        />
        <LinkButton
          url="https://github.com/Phillip-D-Shields/next-evm-nft-market"
          text="GitHub repo"
        />
      </SectionDisplay>
      <SectionDisplay title="This digital CV">
        <p>
          This digital portfolio is made with react, nextjs, and
          styled-components.
        </p>

        <LinkButton
          url="https://github.com/Phillip-D-Shields/react-portfolio"
          text="GitHub repo"
        />
      </SectionDisplay>
      <SectionDisplay title="travel guru app">
        <p>
          This is a travel guru that shows the most popular places to eat,
          sleep, and visit in an area. This app uses a google maps api, travel
          advisor api, react, and material-ui. This app is a prototype to help
          me develop another app that will provide similar functionality.
        </p>
        <LinkButton
          url="https://travel-guru-demo-v1.netlify.app/"
          text="travel guru live"
        />
        <LinkButton
          url="https://github.com/Phillip-D-Shields/react-travel-advisor"
          text="GitHub repo"
        />
      </SectionDisplay>
    </MainDisplayBox>
  );
}
