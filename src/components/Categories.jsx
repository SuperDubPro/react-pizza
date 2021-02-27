import React from 'react';

function Categories({ items, onClick }) {
	const [activeItem, setActiveItem] = React.useState(null)

	const onSelectItem = (index) => {
		setActiveItem(index)
	}

	return (
		<div className="categories">
			<ul>
				<li
					className={`${activeItem === null ? 'active' : ''}`}
					onClick={() => { onSelectItem(null) }}
				>
					Все
				</li>
				{items && items.map((name, i) => <li
					key={`${name}_${i}_category`}
					className={`${i === activeItem ? 'active' : ''}`}
					onClick={() => { onSelectItem(i) }}
				>
					{name}
				</li>)}
			</ul>
		</div>
	)
}

export default  Categories