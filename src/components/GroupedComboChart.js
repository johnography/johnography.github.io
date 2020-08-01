import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import * as d3 from 'd3';

const columns = ['Year', 'AMERICAS', 'APAC', 'EMEA', 'Capex'];

const GroupedComboChart = ({ data, dimensions }) => {
  const margin = {
    top: dimensions.height / 10,
    right: dimensions.width / 10,
    bottom: dimensions.height / 10,
    left: dimensions.width / 10,
  };
  // hover group selector
  const [hovered, setHovered] = useState(null);
  // define the keys for the grouped bars
  const keys = columns.slice(1, columns.length - 1);
  // define the x scale for the groups
  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.Year))
    .rangeRound([margin.left, dimensions.width - margin.right])
    .paddingInner(0.1);
  // define the seconardary x scale for the bars
  const x1 = d3.scaleBand().domain(keys).rangeRound([0, x.bandwidth()]).padding(0.05);
  // define the y scale for the bars
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d3.max(keys, (key) => d[key]))])
    .nice()
    .rangeRound([dimensions.height - margin.bottom, margin.top]);
  // define the secondary y scale for the line
  const y2 = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.Capex)])
    .nice()
    .rangeRound([dimensions.height - margin.bottom, margin.top]);
  // define the ticks
  const yTicks = y.ticks();
  const y2Ticks = y2.ticks();
  // define the color scale
  const color = d3.scaleOrdinal().range(['#00467F', '#6583A7', '#98AAC3', '#CCD3E0']);
  // define the line function
  const line = d3
    .line()
    .defined((d) => !isNaN(d.Capex))
    .x((d) => x(d.Year) + x.bandwidth() / 2)
    .y((d) => y2(d.Capex));
  return (
    <svg width={dimensions.width} height={dimensions.height}>
      <g className="title">
        <text
          x={dimensions.width / 2}
          y={margin.top / 2}
          textAnchor="middle"
          fontSize={margin.top / 3}
          fontWeight="bold">
          ANNUAL COST BY REGION
        </text>
      </g>
      <g className="bars">
        {data.map((d, index) => {
          return (
            <g key={index} transform={`translate(${x(d.Year)},0)`}>
              {keys.map((k, index) => {
                return (
                  <Tooltip key={index} title={`Annual Cost: $${d[k]}MM`} placement="top">
                    <rect
                      className={hovered === k ? 'hoverBar' : 'bar'}
                      x={x1(k)}
                      y={y(d[k])}
                      width={x1.bandwidth()}
                      height={y(0) - y(d[k])}
                      fill={color(k)}
                      onMouseEnter={() => setHovered(k)}
                      onMouseLeave={() => setHovered(null)}
                    />
                  </Tooltip>
                );
              })}
            </g>
          );
        })}
      </g>
      <g className="line">
        <path d={line(data)} fill="none" stroke="#0093D0" strokeWidth={2} />
        {data.map((d, index) => {
          return (
            <Tooltip key={index} title={`Capex: $${d.Capex}MM`} placement="top">
              <circle cx={x(d['Year']) + x.bandwidth() / 2} cy={y2(d.Capex)} r="4" fill="#0093D0" />
            </Tooltip>
          );
        })}
      </g>
      <g className="legend" transform={`translate(${0},0)`} textAnchor="end">
        {color
          .domain()
          .slice()
          .map((key, index) => {
            return (
              <g
                key={index}
                transform={`translate(${
                  (index + 0.75) * ((dimensions.width - margin.left - margin.right) / color.domain().slice().length) +
                  margin.left
                },${margin.top * (2 / 3)})`}>
                <rect
                  x={-margin.top / 4}
                  y={0}
                  width={margin.top / 4}
                  height={margin.top / 4}
                  fill={hovered === key ? '#0093d0' : color(key)}
                />
                <text x={-margin.top / 3} y={margin.top / 8} dy={margin.top / 10} fontSize={margin.top / 4}>
                  {key}
                </text>
              </g>
            );
          })}
      </g>
      <g className="x-axis">
        <line
          x1={margin.left}
          y1={dimensions.height - margin.bottom}
          x2={dimensions.width - margin.right}
          y2={dimensions.height - margin.bottom}
          style={{ stroke: 'black', strokeWidth: '1' }}
        />
        {x
          .domain()
          .slice()
          .map((key, index) => {
            const xPos = x(key) + x.bandwidth() / 2;
            return (
              <g key={index}>
                <line
                  x1={xPos}
                  y1={dimensions.height - margin.bottom}
                  x2={xPos}
                  y2={dimensions.height - margin.bottom + 5}
                  style={{ stroke: 'black', strokeWidth: '1' }}
                />
                <text x={xPos} y={dimensions.height - margin.bottom / 2} textAnchor="middle" fontSize={margin.top / 4}>
                  {key}
                </text>
              </g>
            );
          })}
        <text
          x={dimensions.width / 2}
          y={dimensions.height - margin.bottom / 8}
          textAnchor="middle"
          fontSize={margin.bottom / 4}
          fontWeight="bold">
          YEAR
        </text>
      </g>
      <g className="y-axis">
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={dimensions.height - margin.bottom}
          style={{ stroke: 'black', strokeWidth: '1' }}
        />
        {yTicks.map((tick, index) => {
          return (
            <g key={index}>
              <line
                x1={margin.left}
                y1={y(tick)}
                x2={margin.left - margin.left / 20}
                y2={y(tick)}
                style={{ stroke: 'black', strokeWidth: '1' }}
              />
              <text x={margin.left / (3 / 2)} y={y(tick)} dy="0.35em" fontSize={margin.left / 8} textAnchor="middle">
                ${tick}MM
              </text>
            </g>
          );
        })}
        <text
          x={-dimensions.height / 2 - margin.top / 2 + margin.bottom / 2}
          y={margin.left / 6}
          textAnchor="middle"
          fontSize={margin.left / 6}
          fontWeight="bold"
          transform={`rotate(-90 0 0 )`}>
          AMERICAS, APAC, EMEA
        </text>
      </g>
      <g className="y-axis-secondary">
        <line
          x1={dimensions.width - margin.right}
          y1={margin.top}
          x2={dimensions.width - margin.right}
          y2={dimensions.height - margin.bottom}
          style={{ stroke: 'black', strokeWidth: '1' }}
        />
        {y2Ticks.map((tick, index) => {
          return (
            <g key={index}>
              <line
                x1={dimensions.width - margin.right}
                y1={y2(tick)}
                x2={dimensions.width - margin.right + margin.right / 20}
                y2={y2(tick)}
                style={{ stroke: 'black', strokeWidth: '1' }}
              />
              <text
                x={dimensions.width - margin.right * (2 / 3)}
                y={y2(tick)}
                dy="0.35em"
                fontSize={margin.right / 8}
                textAnchor="middle">
                ${tick}MM
              </text>
            </g>
          );
        })}
        <text
          x={dimensions.height / 2 + margin.top / 2 - margin.bottom / 2}
          y={-dimensions.width + margin.right / 6}
          textAnchor="middle"
          fontSize={margin.right / 6}
          fontWeight="bold"
          transform={`rotate(90 0 0 )`}>
          Capex
        </text>
      </g>
    </svg>
  );
};

export default GroupedComboChart;
