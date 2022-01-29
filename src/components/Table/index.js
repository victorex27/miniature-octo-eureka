import React from 'react';
import ArrowDown from '../../img/ArrowDown.svg';
import './Table.scss';

const Table = (props) => {
  const { users, title } = props;
  return (
    <table className='Table'>
      <caption>{title}</caption>
      <thead>
        <tr>
          <th>
            <span>Name/Email</span>
          </th>
          <th>
            <span>Type</span>
          </th>
          <th>
            <span>Status</span>
          </th>
          <th>
            <span>Date</span>
          </th>
          <th>
            <span></span>
          </th>
        </tr>
      </thead>

      <tbody>
        {users.map(({ img, name, email, type, status, date }, index) => {
          const statusClass =
            status === 'Pending'
              ? 'user__status user__status-pending'
              : 'user__status user__status-active';

          console.log({ statusClass });
          const dateClass = index === 0 ? 'user__date-alt' : 'user__date';

          return (
            <tr key={index}>
              <td>
                <span className='user'>
                  <span className='user__image'>
                    <img src={img} alt='profile pics' />
                  </span>
                  <span className='user__detail'>
                    <span> {name}</span>
                    <span> {email}</span>
                  </span>
                </span>
              </td>
              <td>
                <span className='user__type'>{type}</span>
              </td>
              <td>
                <span className={statusClass}>{status}</span>
              </td>
              <td>
                <span className={dateClass}>{date}</span>
              </td>
              <td>
                <span>
                  <button onClick='#' className='arrow-down'>
                    <span className='svg'>
                      <img src={ArrowDown} alt='button-img' />
                    </span>
                  </button>
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
