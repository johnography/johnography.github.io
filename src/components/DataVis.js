import React, { useRef, useState } from 'react';
import useComponentSize from '../utils/useComponentSize';
import GroupedComboChart from './GroupedComboChart';

const initialData = [
  { Year: '2014', AMERICAS: 134, APAC: 64, EMEA: 53, Capex: 50 },
  { Year: '2015', AMERICAS: 137, APAC: 65, EMEA: 54, Capex: 51 },
  { Year: '2016', AMERICAS: 140, APAC: 66, EMEA: 55, Capex: 16 },
  { Year: '2017', AMERICAS: 136, APAC: 64, EMEA: 53, Capex: 52 },
  { Year: '2018', AMERICAS: 129, APAC: 61, EMEA: 50, Capex: 51 },
  { Year: '2019', AMERICAS: 133, APAC: 63, EMEA: 52, Capex: 10 },
  { Year: '2020', AMERICAS: 137, APAC: 65, EMEA: 53, Capex: 2 },
];

const leaseExpiringData = [
  { year: 2018, rsf: 0.57, exp: 27 },
  { year: 2019, rsf: 1.11, exp: 63 },
  { year: 2020, rsf: 2.77, exp: 122 },
  { year: 2021, rsf: 4.58, exp: 118 },
  { year: 2022, rsf: 1.87, exp: 72 },
  { year: 2023, rsf: 0.2, exp: 15 },
  { year: 2024, rsf: 0.88, exp: 11 },
  { year: 2025, rsf: 1.29, exp: 31 },
];

export default function DataVis() {
  const targetRef = useRef(null);
  const size = useComponentSize(targetRef);
  const { width, height } = size;
  const [data] = useState(initialData);
  return (
    <>
      <h2>Data Visualization</h2>
      <div className="container neushadow">
        <p>
          One of the holy grails of modern web visualization is combining the strength of D3 (Data Driven Documents)
          with the power of React. Using the correct combinations can lead to beautiful adaptive and interactive
          visualizations of data.
        </p>
        <p>
          Here is a grouped combo chart with dual axes. You can hover around on the data elements to get a tooltip with
          the values.
        </p>
        <div ref={targetRef} className="neushadow">
          {width && height && <GroupedComboChart data={data} dimensions={{ width: width - 4, height: '240' }} />}
        </div>
        <p>
          This chart is a natively-styled SVG (Scalable Vector Graphic). One of the best qualities of an SVG file is
          it's ability to be scaled to any size without any pixelization occuring. They can also be saved and imported
          into other websites, documents, and presentations.
        </p>
      </div>
    </>
  );
}
