import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, className, outline, children }) {
	return <button
		onClick={onClick}
		className={`button 
			${outline ? 'button--outline' : ''} 
			${className || ''}
		`}
	>
		{children}
	</button>
}

// Button.propTypes = {
// 	onClick: PropTypes.function
// }
//
// Button.defaultProps = {
// 	onClick: () => {}
// }

export default Button
