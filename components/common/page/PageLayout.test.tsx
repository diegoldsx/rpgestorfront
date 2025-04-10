import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageLayout } from './PageLayout';

describe('1# PageLayout componente', () => {
  it('renders title and children correctly', () => {
    const title = 'Test Title';
    const content = 'Test Content';

    render(
      <PageLayout title={title}>
        <p>{content}</p>
      </PageLayout>
    );

    expect(screen.getAllByText(title)[0]).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
