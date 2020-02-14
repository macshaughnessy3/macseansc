import React from 'react';
import './JobListElement.css';
import { useHistory } from 'react-router-dom';

export const JobListElementMetaItem =({
	emoji,
	emoji_name,
	metaItem,
}) => 
	<span role="img" aria-label={emoji_name}>{emoji} {metaItem} </span>;

export const JobListElementMeta = ({location, company, salary}) =>
	<p className='job_info'>
		<JobListElementMetaItem
			emoji="🏢"
			emoji_name="company"
			metaItem={company}
		/>
		{' | '}
		<JobListElementMetaItem
			emoji="🌎"
			emoji_name="location"
			metaItem={location}
		/>
		{' | '}
		<JobListElementMetaItem
			emoji="💰"
			emoji_name="salary"
			metaItem={salary}
		/>
	</p>;

export default function JobListElement ({title, location, company, salary, images}) {
	let history = useHistory();

	function handleClick(){
		console.log(history)
	}
	return (
		<div onClick={handleClick} className='job-item'>
			<div>
				<h2 className='job-item_title'>
					{title}
				</h2>
				<JobListElementMeta
					company={company}
					location={location}
					salary={salary}
				/>
				<img src={images[0]} alt="id" />
			</div>
		</div>
	);
}
