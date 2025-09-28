<script lang="ts">
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  let chartContainer: HTMLDivElement;

  // Sample data representing pipeline performance metrics
  const pipelineData = [
    { stage: 'Data Extraction', success: 98.5, latency: 45, volume: 12500 },
    { stage: 'Data Transformation', success: 97.2, latency: 120, volume: 12100 },
    { stage: 'Data Validation', success: 99.1, latency: 30, volume: 11850 },
    { stage: 'Data Loading', success: 98.8, latency: 75, volume: 11730 },
    { stage: 'CRM Sync', success: 99.3, latency: 25, volume: 11680 }
  ];

  onMount(() => {
    createVisualization();
  });

  function createVisualization() {
    // Clear any existing content
    d3.select(chartContainer).selectAll('*').remove();

    const margin = { top: 20, right: 80, bottom: 40, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(chartContainer)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .attr('class', 'max-w-full h-auto');

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3
      .scaleBand()
      .domain(pipelineData.map(d => d.stage))
      .range([0, width])
      .padding(0.2);

    const yScale = d3.scaleLinear().domain([95, 100]).range([height, 0]);

    const latencyScale = d3
      .scaleLinear()
      .domain(d3.extent(pipelineData, d => d.latency) as [number, number])
      .range([5, 20]);

    // Color scale for success rate
    const colorScale = d3
      .scaleSequential(d3.interpolateRdYlGn)
      .domain([95, 100]);

    // Create bars for success rate
    g.selectAll('.bar')
      .data(pipelineData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.stage)!)
      .attr('width', xScale.bandwidth())
      .attr('y', d => yScale(d.success))
      .attr('height', d => height - yScale(d.success))
      .attr('fill', d => colorScale(d.success))
      .attr('stroke', '#374151')
      .attr('stroke-width', 1)
      .style('cursor', 'pointer');

    // Add success rate labels
    g.selectAll('.success-label')
      .data(pipelineData)
      .enter()
      .append('text')
      .attr('class', 'success-label')
      .attr('x', d => xScale(d.stage)! + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.success) - 5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .attr('fill', '#374151')
      .text(d => `${d.success}%`);

    // Add latency circles
    g.selectAll('.latency-circle')
      .data(pipelineData)
      .enter()
      .append('circle')
      .attr('class', 'latency-circle')
      .attr('cx', d => xScale(d.stage)! + xScale.bandwidth() / 2)
      .attr('cy', d => yScale(d.success) + (height - yScale(d.success)) / 2)
      .attr('r', d => latencyScale(d.latency))
      .attr('fill', 'rgba(59, 130, 246, 0.7)')
      .attr('stroke', '#2563eb')
      .attr('stroke-width', 2);

    // Add latency labels
    g.selectAll('.latency-label')
      .data(pipelineData)
      .enter()
      .append('text')
      .attr('class', 'latency-label')
      .attr('x', d => xScale(d.stage)! + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.success) + (height - yScale(d.success)) / 2 + 4)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('font-weight', 'bold')
      .attr('fill', 'white')
      .text(d => `${d.latency}ms`);

    // X-axis
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .attr('font-size', '12px')
      .attr('fill', '#6b7280');

    // Y-axis
    g.append('g')
      .call(d3.axisLeft(yScale).tickFormat(d => `${d}%`))
      .selectAll('text')
      .attr('font-size', '12px')
      .attr('fill', '#6b7280');

    // Y-axis label
    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', 'bold')
      .attr('fill', '#374151')
      .text('Success Rate (%)');

    // Legend
    const legend = svg.append('g').attr('transform', `translate(${width - 60}, 30)`);

    legend
      .append('rect')
      .attr('width', 15)
      .attr('height', 15)
      .attr('fill', 'rgba(59, 130, 246, 0.7)')
      .attr('stroke', '#2563eb');

    legend
      .append('text')
      .attr('x', 20)
      .attr('y', 12)
      .attr('font-size', '12px')
      .attr('fill', '#374151')
      .text('Latency (circle size)');

    // Title
    svg
      .append('text')
      .attr('x', (width + margin.left + margin.right) / 2)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '16px')
      .attr('font-weight', 'bold')
      .attr('fill', '#111827')
      .text('Data Pipeline Performance Metrics');
  }
</script>

<div class="card">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
    Pipeline Success Rate & Latency Analysis
  </h3>
  <p class="text-sm text-muted mb-4">
    Real-time monitoring visualization showing success rates (bar height), latency (circle size),
    and data volume across pipeline stages. Based on patterns from production CRM data pipelines.
  </p>
  <div bind:this={chartContainer} class="w-full overflow-x-auto"></div>
  <div class="mt-4 text-xs text-muted">
    <p><strong>Key Insights:</strong></p>
    <ul class="list-disc list-inside space-y-1 mt-2">
      <li>Data Transformation shows highest latency but maintains good success rate</li>
      <li>CRM Sync achieves optimal performance with low latency and high success</li>
      <li>Data Validation provides quality gate with minimal performance impact</li>
    </ul>
  </div>
</div>