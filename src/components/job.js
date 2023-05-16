import React from "react";
import {FormattedDate} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary + " millones"}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>{Intl.NumberFormat("en-US",{  maximumFractionDigits: 2   } ).format(props.offer.numberOfVisits)}</td>
    </tr>
  );
};

export default Job;
