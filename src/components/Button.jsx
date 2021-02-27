import React from 'react';

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

export default Button
