import React from 'react'

interface Props {
  data: {
    name: string;
    position: string;
    office: string;
    age: number;
    start_date: string;
    salary: string;
  };
}

const DataList:React.FC<Props> = ({data}) => {
  return (
    <tr >
      <td>{data.name}</td>
      <td>{data.position}</td>
      <td>{data.office}</td>
      <td>{data.age}</td>
      <td>{data.start_date}</td>
      <td>{data.salary}</td>
    </tr>
  );
}

export default DataList