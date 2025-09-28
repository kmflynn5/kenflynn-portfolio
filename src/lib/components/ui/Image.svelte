<script lang="ts">
  import { onMount } from 'svelte';

  interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    loading?: 'lazy' | 'eager';
    class?: string;
    placeholder?: string;
  }

  let {
    src,
    alt,
    width,
    height,
    loading = 'lazy',
    class: className = '',
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWkiIGZvbnQtc2l6ZT0iMTRweCIgZmlsbD0iIzllYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+'
  }: ImageProps = $props();

  let imageElement: HTMLImageElement;
  let isLoaded = false;
  let hasError = false;

  onMount(() => {
    if (imageElement && loading === 'lazy') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage();
              observer.unobserve(imageElement);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(imageElement);

      return () => observer.disconnect();
    } else {
      loadImage();
    }
  });

  function loadImage() {
    if (imageElement) {
      imageElement.src = src;
    }
  }

  function handleLoad() {
    isLoaded = true;
  }

  function handleError() {
    hasError = true;
    console.warn(`Failed to load image: ${src}`);
  }
</script>

<img
  bind:this={imageElement}
  {alt}
  {width}
  {height}
  src={loading === 'eager' ? src : placeholder}
  class={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-50'} ${className}`}
  on:load={handleLoad}
  on:error={handleError}
  loading={loading}
/>

{#if hasError}
  <div class="flex items-center justify-center bg-gray-100 dark:bg-gray-800 {className}">
    <span class="text-gray-500 text-sm">Failed to load image</span>
  </div>
{/if}