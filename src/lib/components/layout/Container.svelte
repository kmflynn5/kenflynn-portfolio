<script lang="ts">
  interface Props {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    padding?: boolean;
    children?: any;
  }

  let { size = 'lg', padding = true, children, ...restProps }: Props = $props();

  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  const paddingClass = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  const containerClasses = $derived(`mx-auto ${sizeClasses[size]} ${paddingClass}`);
</script>

<div class={containerClasses} {...restProps}>
  {@render children?.()}
</div>
