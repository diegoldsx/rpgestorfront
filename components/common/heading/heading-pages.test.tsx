import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeadingPages } from './heading-pages';

describe('<HeadingPages />', () => {
	it('renders the title and breadcrumbs', () => {
		render(
			<HeadingPages
				title="Test Page"
				breadcrumbs={{ title: 'Test Breadcrumb', href: '/test' }}
			/>
		);

		expect(screen.getByRole('heading', { name: 'Test Page' })).toBeInTheDocument();
		expect(screen.getByText('Dashboard')).toBeInTheDocument();
		expect(screen.getByText('Test Breadcrumb')).toBeInTheDocument();
	});

	it('renders action buttons', () => {
		render(
			<HeadingPages
				title="Test Page"
				breadcrumbs={{ title: 'Test Breadcrumb', href: '/test' }}
				actions={{
					primary: {
						text: 'Importar',
						href: '/importar',
					},
					secondary: {
						text: 'Adicionar',
						href: '/adicionar',
					},
				}}
			/>
		);

		expect(screen.getByText('Importar')).toBeInTheDocument();
		expect(screen.getByText('Adicionar')).toBeInTheDocument();
	});
});
