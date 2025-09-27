<script lang="ts">
  interface Props {
    placeholder?: string;
    value?: string;
    name?: string;
    id?: string;
    rows?: number;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    label?: string;
    oninput?: (event: Event) => void;
  }

  let {
    placeholder = '',
    value = $bindable(''),
    name,
    id,
    rows = 4,
    required = false,
    disabled = false,
    error,
    label,
    oninput,
    ...restProps
  }: Props = $props();

  const baseClasses =
    'w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors resize-vertical';
  const normalClasses =
    'border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white';
  const errorClasses = 'border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-600';
  const disabledClasses = 'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-800';

  const textareaClasses = $derived(
    `${baseClasses} ${error ? errorClasses : normalClasses} ${disabled ? disabledClasses : ''}`
  );
</script>

<div class="space-y-1">
  {#if label}
    <label for={id} class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
      {#if required}<span class="text-red-500">*</span>{/if}
    </label>
  {/if}

  <textarea
    {placeholder}
    bind:value
    {name}
    {id}
    {rows}
    {required}
    {disabled}
    class={textareaClasses}
    {oninput}
    {...restProps}
  ></textarea>

  {#if error}
    <p class="text-sm text-red-600 dark:text-red-400">{error}</p>
  {/if}
</div>
