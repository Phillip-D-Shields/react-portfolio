import MainDisplayBox from "../components/MainDisplayBox"
import SectionDisplay from "../components/SectionDisplay"
import LinkButton from "../components/LinkButton"

export default function Live() {
  return (
    <MainDisplayBox headerText="live examples">

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
          This is a travel guru that shows the most popular places to eat, sleep, and visit in an area. This app uses a google maps api, travel advisor api, react, and material-ui. This app is a prototype to help me develop another app that will provide similar functionality.
        </p>

        <LinkButton
          url="https://github.com/Phillip-D-Shields/react-travel-advisor"
          text="GitHub repo"
        />
      </SectionDisplay>
    </MainDisplayBox>
  );
}
