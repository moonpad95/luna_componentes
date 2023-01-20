import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
function openFacebook(){
  window.open("https://utd.edu.mx");
}
function openGit(){
  window.open("https://github.com/moonpad95");
}
function openFace(){
  window.open("https://www.facebook.com/luis.hernandezluna.2");
}


export default function App() {
  return (
    <div className="App">
      <h1>Como</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button secondary as="a"  onClick={openFacebook}>Pagina oficial de la UTD</Button>
      <Button secondary as="a"  onClick={openGit}>Mi GitHub</Button>
      <Button secondary as="a"  onClick={openFace}>Mi facebook</Button>




    </div>
  );
}
