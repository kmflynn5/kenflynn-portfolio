<script lang="ts">
  interface Props {
    padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
    background?: 'white' | 'gray' | 'transparent';
    children?: any;
  }

  let { padding = 'lg', background = 'transparent', children, ...restProps }: Props = $props();

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  const backgroundClasses = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    transparent: ''
  };

  const sectionClasses = $derived(`${paddingClasses[padding]} ${backgroundClasses[background]}`);
</script>

<section class={sectionClasses} {...restProps}>
  {@render children?.()}
</section>
