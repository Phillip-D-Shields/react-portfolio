import styled from 'styled-components';

const HomeDisplay = styled.div`
  height: 900%;
  width: 90%;
  padding: 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: #025930;
  text-align: right;

  h2 {
    font-size: 1.75rem;
  }

  h1 {
    font-size: 5rem;
    margin: 2rem 0;
    padding: .5rem;
    background: #025930;
    color: #F2D8CE;
    letter-spacing: 0.25rem
  }

  p {
    text-indent: .75rem;
    font-size: 1.25rem;
    width: 50%;
  }

  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }
`;


export default function Home() {
  return (
   <HomeDisplay>
    <h2>Hi, this is a digital representation of</h2>
    <h1>Phillip David Shields</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure id tempora quos consequatur, dolor adipisci eius numquam laborum, distinctio neque eos in nobis aliquam?</p>
   </HomeDisplay>
  )
}
