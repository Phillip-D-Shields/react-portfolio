import styled from 'styled-components';

const PastDisplay = styled.div`
  width: 100%;
  padding: 2rem;
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

  h3 {
    width: 60%;
    font-size: 3rem;
    margin: 5rem 0 .5rem 0;
    padding: .5rem;
    background: #F24F13;
    color: #404040;
    letter-spacing: 0.25rem
  }
  p {
    text-indent: .75rem;
    font-size: 1.25rem;
    width: 50%;
    text-align: left;
  }

  

`;


export default function Past() {
  return (
   <PastDisplay>
    <h2>I have some</h2>
    <h1>past dev experience</h1>

    <h3>UN Volunteer</h3>
    <p>I volunteered with the UN helping with adjustments and upgrades to websites for non-profits that were partnered with the UN. Most of the work was fixing syntax errors in HTML or CSS, editing English mistakes, or occasionally adding a new section. It was a good experience and a good introduction to how small teams communicate and work together</p>
    <p>One of my site redesign submissions was selected for consideration by a Nepalese non-profit, but ultimately was not selected for the website upgrade.</p> 


    <h3>DecentraCorp</h3>
    <p>DecentraCorp was a passion project by a blockchain developer that I met on Reddit. I worked with him to build and design three websites, the first two using mostly bootstrap and the third with react. While working on the react upgrade, my partner was headhunted by a blockchain team and DecentraCorp ceased further development.</p>
    <p>It was a really good experience that let me explore and better understand bootstrap and react. I really enjoyed the creative process of designing the logos and page layouts.</p>


    <h3>NuiBits</h3>
    <p>I briefly worked as a freelance developer with NuiBits, mostly helping to create the design system used for their suite of Saas applications. 
    </p>
    <p>
    I found it too difficult to attend classes full time and take on an entirely new technology stack. I resigned from the position earlier than expected, but on good terms. My experience with NuiBits was short but impactful, the most valuable aspect was gaining advice and insight from the founder. It was a good overall experience and essential lesson in communication and expectations.</p>
    
    
    
   </PastDisplay>
  )
}
