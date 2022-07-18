import styled from "styled-components";
import { LinkButton } from "../components/linkButton";

const LiveDisplay = styled.div`
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

  .text-link {
    color: #049dd9;
    text-decoration: underline;
  }
`;

export default function Live() {
  return (
    <LiveDisplay>
      <h1>live examples</h1>
      <h2>here are some of my finished or mostly-finished projects.</h2>

      <h3>Nari Sewa Kendra</h3>
      <p>
        My website redesign submission for a Nepalese non-profit. Just plain old
        html and css.
      </p>

      <LinkButton
        url="https://phillip-d-shields.github.io/Nari-Sewa-Kendra/"
        text="Nari Sewa Kendra"
      />

      <h3>DecentraCorp</h3>
      <p>
        The react upgrade that was being developed when the DecentraCorp project
        ended. Built with react and tachyons css framework.
      </p>
      <LinkButton
        url="https://elastic-almeida-ef8aa4.netlify.app/"
        text="DecentraCorp"
      />

      <h3>NISA Quiz Bowl App</h3>
      <p>
        During my second semester at NMIT I helped found NISA (Nelson IT Student
        Association) and made this quiz app for the first meet up. The app is
        built with react, typescript, and tachyons css framework.
      </p>

      <LinkButton
        url="https://goofy-kilby-4b8a86.netlify.app/"
        text="quiz bowl app"
      />
      <LinkButton
        url="https://github.com/Phillip-D-Shields/tsx-quiz-app"
        text="GitHub repo"
      />

      <h3>NFT market place</h3>
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
        market is built with react, nextjs, hardhat, and tailwind css framework.
      </p>

      <LinkButton
        url="https://next-evm-nft-market-v2.vercel.app/"
        text="NFT market"
      />
      <LinkButton
        url="https://github.com/Phillip-D-Shields/next-evm-nft-market"
        text="GitHub repo"
      />

      <h3>This digital portfolio</h3>
      <p>
        This digital portfolio is made with react, nextjs, and
        styled-components.
      </p>

      <LinkButton
        url="https://github.com/Phillip-D-Shields/react-portfolio"
        text="GitHub repo"
      />
    </LiveDisplay>
  );
}
