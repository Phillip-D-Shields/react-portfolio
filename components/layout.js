import LargeNavbar from "./largeNavbar";
import styled from 'styled-components'

const DisplayContainer = styled.div`
  padding: 0;
  margin: 0;
`;

export default function Layout({children}) {
    return (
        <DisplayContainer>
            <LargeNavbar />
            <main>
                {children}
            </main>
        </DisplayContainer>
    )
};
