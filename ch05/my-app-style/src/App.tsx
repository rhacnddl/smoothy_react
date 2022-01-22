import React from 'react';
import logo from './logo.svg';
import Styled from 'styled-components';

const Container = Styled.div`
	text-align: center;
`;

const Header = Styled.header`
	background-color: #282c34 !important;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const AppLogo = Styled.img`
	height: 40vmin;
	pointer-events: none;

	@media (prefers-reduced-motion: no-preference) {
    	animation: App-logo-spin infinite 20s linear;
	}

	@keyframes App-logo-spin {
  		from {
    		transform: rotate(0deg);
  		}
  		to {
		    transform: rotate(360deg);
	  	}
	}
`;

const AppLink = Styled.a`
	color: #61dafb;
`;

function App() {
  return (
   //<div className="App">
	<Container>
		<Header>
     { /*<header className="App-header">*/ }
       { /* <img src={logo} className="App-logo" alt="logo" />*/ }
			<AppLogo src={logo} alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
		<AppLink
			href="https://reactjs.org" 
			target="_blank" 
			rel="noopener noreferrer"
		>
			Learn React
		</AppLink>
     { /*</header>*/ }
		</Header>
	</Container>
    //</div>
  );
}

export default App;
