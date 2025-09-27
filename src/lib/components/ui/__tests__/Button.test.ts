import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Button from '../Button.svelte';

describe('Button', () => {
  it('renders with default props', () => {
    render(Button, { children: () => 'Test Button' });
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('renders as link when href provided', () => {
    render(Button, {
      href: '/test',
      children: () => 'Test Link'
    });
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('applies variant classes correctly', () => {
    render(Button, {
      variant: 'secondary',
      children: () => 'Secondary Button'
    });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn', 'btn-secondary');
  });

  it('handles disabled state', () => {
    render(Button, {
      disabled: true,
      children: () => 'Disabled Button'
    });
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  });
});
