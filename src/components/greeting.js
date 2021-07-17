import React from 'react';

function Greeting (props) { // Stateless components or Dumb components
	return (<div>Hello there { props.name }</div>);
}

export default Greeting;