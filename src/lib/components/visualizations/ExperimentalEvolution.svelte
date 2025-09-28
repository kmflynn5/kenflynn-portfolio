<script lang="ts">
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  let chartContainer: HTMLDivElement;

  // Sample data representing experimental evolution over generations
  const evolutionData = Array.from({ length: 50 }, (_, i) => {
    const generation = i + 1;
    const fitnessBase = 0.5 + (generation * 0.01) + Math.sin(generation * 0.1) * 0.05;
    const diversityBase = 0.8 - (generation * 0.01) + Math.cos(generation * 0.15) * 0.1;

    return {
      generation,
      fitness: Math.max(0.1, Math.min(1, fitnessBase + (Math.random() - 0.5) * 0.05)),
      diversity: Math.max(0.1, Math.min(1, diversityBase + (Math.random() - 0.5) * 0.08)),
      mutations: Math.floor(Math.random() * 5) + 1,
      populationSize: 1000 + Math.floor(Math.random() * 500)
    };
  });

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
      .scaleLinear()
      .domain(d3.extent(evolutionData, d => d.generation) as [number, number])
      .range([0, width]);

    const yScale = d3.scaleLinear().domain([0, 1]).range([height, 0]);

    const mutationScale = d3
      .scaleLinear()
      .domain(d3.extent(evolutionData, d => d.mutations) as [number, number])
      .range([3, 8]);

    // Line generators
    const fitnessLine = d3
      .line<(typeof evolutionData)[0]>()
      .x(d => xScale(d.generation))
      .y(d => yScale(d.fitness))
      .curve(d3.curveMonotoneX);

    const diversityLine = d3
      .line<(typeof evolutionData)[0]>()
      .x(d => xScale(d.generation))
      .y(d => yScale(d.diversity))
      .curve(d3.curveMonotoneX);

    // Add gradient definitions
    const defs = svg.append('defs');

    const fitnessGradient = defs.append('linearGradient')
      .attr('id', 'fitnessGradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0).attr('y1', height)
      .attr('x2', 0).attr('y2', 0);

    fitnessGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#10b981')
      .attr('stop-opacity', 0.1);

    fitnessGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#10b981')
      .attr('stop-opacity', 0.8);

    // Add fitness area
    const fitnessArea = d3
      .area<(typeof evolutionData)[0]>()
      .x(d => xScale(d.generation))
      .y0(height)
      .y1(d => yScale(d.fitness))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(evolutionData)
      .attr('fill', 'url(#fitnessGradient)')
      .attr('d', fitnessArea);

    // Add fitness line
    g.append('path')
      .datum(evolutionData)
      .attr('fill', 'none')
      .attr('stroke', '#10b981')
      .attr('stroke-width', 3)
      .attr('d', fitnessLine);

    // Add diversity line
    g.append('path')
      .datum(evolutionData)
      .attr('fill', 'none')
      .attr('stroke', '#f59e0b')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '5,5')
      .attr('d', diversityLine);

    // Add mutation points
    g.selectAll('.mutation-point')
      .data(evolutionData.filter((_, i) => i % 5 === 0)) // Show every 5th generation
      .enter()
      .append('circle')
      .attr('class', 'mutation-point')
      .attr('cx', d => xScale(d.generation))
      .attr('cy', d => yScale(d.fitness))
      .attr('r', d => mutationScale(d.mutations))
      .attr('fill', 'rgba(239, 68, 68, 0.6)')
      .attr('stroke', '#dc2626')
      .attr('stroke-width', 1)
      .style('cursor', 'pointer');

    // X-axis
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickFormat(d => `Gen ${d}`))
      .selectAll('text')
      .attr('font-size', '12px')
      .attr('fill', '#6b7280');

    // Y-axis
    g.append('g')
      .call(d3.axisLeft(yScale).tickFormat(d3.format('.1%')))
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
      .text('Relative Fitness / Diversity');

    // Legend
    const legend = svg.append('g').attr('transform', `translate(${width - 120}, 30)`);

    // Fitness legend
    legend.append('line')
      .attr('x1', 0).attr('x2', 20)
      .attr('y1', 0).attr('y2', 0)
      .attr('stroke', '#10b981')
      .attr('stroke-width', 3);

    legend.append('text')
      .attr('x', 25)
      .attr('y', 4)
      .attr('font-size', '12px')
      .attr('fill', '#374151')
      .text('Fitness');

    // Diversity legend
    legend.append('line')
      .attr('x1', 0).attr('x2', 20)
      .attr('y1', 20).attr('y2', 20)
      .attr('stroke', '#f59e0b')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '5,5');

    legend.append('text')
      .attr('x', 25)
      .attr('y', 24)
      .attr('font-size', '12px')
      .attr('fill', '#374151')
      .text('Diversity');

    // Mutations legend
    legend.append('circle')
      .attr('cx', 10)
      .attr('cy', 40)
      .attr('r', 5)
      .attr('fill', 'rgba(239, 68, 68, 0.6)')
      .attr('stroke', '#dc2626');

    legend.append('text')
      .attr('x', 25)
      .attr('y', 44)
      .attr('font-size', '12px')
      .attr('fill', '#374151')
      .text('Mutations');

    // Title
    svg
      .append('text')
      .attr('x', (width + margin.left + margin.right) / 2)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '16px')
      .attr('font-weight', 'bold')
      .attr('fill', '#111827')
      .text('Experimental Evolution: Fitness vs Diversity Trade-offs');
  }
</script>

<div class="card">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
    Evolutionary Dynamics Modeling
  </h3>
  <p class="text-sm text-muted mb-4">
    Visualization inspired by experimental evolution research, showing the relationship between
    population fitness (green), genetic diversity (yellow), and mutation events (red circles) over
    generations. Demonstrates data analysis techniques from genomics research.
  </p>
  <div bind:this={chartContainer} class="w-full overflow-x-auto"></div>
  <div class="mt-4 text-xs text-muted">
    <p><strong>Research Insights:</strong></p>
    <ul class="list-disc list-inside space-y-1 mt-2">
      <li>Fitness generally increases over time with selection pressure</li>
      <li>Genetic diversity shows inverse relationship to fitness optimization</li>
      <li>Mutation events (circle size) drive evolutionary exploration</li>
    </ul>
  </div>
</div>