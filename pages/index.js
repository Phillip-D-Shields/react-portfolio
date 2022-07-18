import styled from 'styled-components';

const HomeDisplay = styled.div`
  height: 100%;
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
    padding: .5rem;
    background: #049DD9;
    color: #D9CCCC;
    letter-spacing: 0.25rem
  }

  p {
    text-indent: .75rem;
    font-size: 1.25rem;
    width: 50%;
  }

`;


export default function Home() {
  return (
   <HomeDisplay>
    <h2>Hi, this is the digital cv of</h2>
    <h1>Phillip David Shields</h1>
    <p>I threw this together to show off some of my noob skills. I am planning on adding some mobile responsiveness, but for now everything is best viewed on a tablet or bigger.</p>
    <p>click on one of the sections listed in the bottom left to have a look around.</p>
   </HomeDisplay>
  )
}
