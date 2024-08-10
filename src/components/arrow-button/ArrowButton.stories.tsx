import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';
import { useState } from 'react';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
	argTypes: {
		isOpen: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	args: {
		isOpen: false,
	},
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isOpen, setIsOpen] = useState(false);

		const handleClick = () => {
			setIsOpen(!isOpen);
			// alert('Button clicked!');
		};
		return (
			<>
				<ArrowButton onClick={handleClick} isOpen={isOpen} />
			</>
		);
	},
};
