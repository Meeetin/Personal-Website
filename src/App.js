import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//TODO: Fixa n�tverk l�nkar
// fixa portfolio CSS.


class Menu extends Component{
	render(){
		return(
		<div className="Menu">
		<br></br>		

		<span id="title">Edvin Christenson - Personal Website</span>
		<div className="Navigation">

		<span id="nav">About Me</span>
		<span id="nav">Portfolio</span>
		</div>

		</div>
		);
	}
}
class AboutMe extends Component{
	render(){
		return(
		
		<div className="aboutMe">

		<br></br>
		<br></br>
		<br></br>
		<span id="aboutMeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu pellentesque, tristique nibh id, lacinia enim. Nulla eu sem pretium, imperdiet nisl quis, rutrum tortor. Nunc placerat convallis quam ac tempor. Pellentesque nec rutrum sem. Mauris eget aliquam felis.<br></br> Sed id odio consequat, semper nibh tincidunt, convallis urna. Vivamus a blandit orci, vitae pharetra tellus. Praesent sed condimentum enim. Proin id vehicula ex. Proin fringilla eros facilisis odio ornare vulputate. Nam nec tortor eu urna venenatis aliquet a id risus. Donec accumsan vel ante non consequat. Aenean nec imperdiet lectus.

		<br></br>Mauris finibus molestie ex, ac faucibus quam euismod sed. Duis tincidunt faucibus ullamcorper. Duis cursus dolor a hendrerit facilisis. Duis ullamcorper sit amet lacus et laoreet. Proin semper eros libero, vitae lacinia ligula bibendum bibendum. Donec finibus quam sit amet tincidunt aliquet. Sed vitae pretium velit. Etiam quis ligula eget tortor condimentum lacinia. Donec a accumsan est. Morbi eget nulla eget massa facilisis egestas sit amet non metus. Etiam condimentum bibendum libero quis mollis. Quisque volutpat venenatis maximus.

		<br></br>Aliquam ut elit in odio bibendum efficitur vitae varius dui. Curabitur suscipit elit risus. Vivamus at ornare sapien. Nullam aliquam sit amet turpis eget commodo. Nunc vehicula semper leo vitae mattis. Pellentesque in dictum nisi. Suspendisse faucibus ex quis ante iaculis viverra. Nulla facilisi. Nunc mattis ultricies lectus, sit amet rutrum urna posuere et. Proin nibh ipsum, dignissim et erat eu, sollicitudin elementum nunc. Vestibulum sit amet suscipit metus, vitae pellentesque arcu. Phasellus id finibus leo, non dapibus arcu. Nullam condimentum pretium tortor, quis pellentesque ex.</span>
		</div>
		

		);
	}
}
class AboutMeTitle extends Component{
	render(){
		return(
			<div className="aboutMeTitle">
			<span id="aboutMeTitle">About Me</span>
			</div>
		)
	}
}
class Portfolio extends Component{
render(){
	return(
		<div className="Portfolio">
		<span id="PortfolioTitle">Portfolio</span>
		<br></br>
		<table>


		</table>


		</div>
	)
}

}
class App extends Component {
  render() {
    return (
      <div className="App">
		<Menu/>

		<AboutMeTitle/>

		<AboutMe/>
		<Portfolio/>


      </div>
    );
  }
}

export default App;
