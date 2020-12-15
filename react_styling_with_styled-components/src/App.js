import React from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import Button from './components/Button'

// const Circle = styled.div`
// width: 5rem;
// height: 5rem;
// background: ${props => props.color || 'black'};
// border-radius: 50%;
// ${props=>
//   props.huge &&
//   css`
//   width:10rem;
//   height:10rem;
//   `
// }
// `;

const AppBlock = styled.div`
width:512px
margin: 0 auto;
margin-top: 4rem;
border: 1px solid black;
padding: 1rem;
`;

const ButtonGroup = styled.div`
 &+&{
   margin-top:1rem;
 }
`


function App() {
  return (
    <ThemeProvider 
    theme={{
      palette:{
        blue: '#228be6',
        gray: '#495057',
        pink: '#f06595'
      }
    }}
    >
    {/* <Circle color = 'red' huge /> */}
    <AppBlock>
      <ButtonGroup>
        <Button size='large'>Button</Button>
        <Button>Button</Button>
        <Button size='small'>Button</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button color='gray' size='large'>Button</Button>
        <Button color='gray'>Button</Button>
        <Button color='gray' size='small'>Button</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button color='pink' size='large'>Button</Button>
        <Button color='pink' >Button</Button>
        <Button color='pink' size='small'>Button</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size='large' outline>Button</Button>
        <Button outline color='gray'>Button</Button>
        <Button size='small' color='pink' outline>Button</Button>
      </ButtonGroup>
      <ButtonGroup>
          <Button size="large" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="gray" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="pink" fullWidth>
            BUTTON
          </Button>
        </ButtonGroup>
    </AppBlock>
    </ThemeProvider>
  );
}

export default App;
