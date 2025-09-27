<script lang="ts">
  interface Props {
    padding?: 'sm' | 'md' | 'lg';
    shadow?: 'sm' | 'md' | 'lg' | 'none';
    border?: boolean;
    hover?: boolean;
    children?: any;
  }

  let {
    padding = 'md',
    shadow = 'md',
    border = true,
    hover = false,
    children,
    ...restProps
  }: Props = $props();

  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg';

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };

  const borderClass = border ? 'border border-gray-200 dark:border-gray-700' : '';
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';

  const computedClasses = $derived(`${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${borderClass} ${hoverClass}`);
</script>

<div class={computedClasses} {...restProps}>
  {@render children?.()}
</div>
