<script lang="ts">
  interface Props {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    onclick?: () => void;
    children?: any;
  }

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    type = 'button',
    href,
    onclick,
    children,
    ...restProps
  }: Props = $props();

  const variantClasses = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    outline:
      'btn border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const computedClasses = $derived(
    `${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
  );
</script>

{#if href}
  <a {href} class={computedClasses} {...restProps}>
    {@render children?.()}
  </a>
{:else}
  <button {type} {disabled} class={computedClasses} {onclick} {...restProps}>
    {@render children?.()}
  </button>
{/if}
