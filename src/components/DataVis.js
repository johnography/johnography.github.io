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
    <div ref={targetRef}>
      {width && height && <GroupedComboChart data={data} dimensions={{ width: '480', height: '240' }} />}
    </div>
  );
}
