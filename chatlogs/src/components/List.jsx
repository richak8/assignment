import React from 'react';
import { timestampToDate } from '../utils';
import Avatar from './Avatar';

const List = ({ data }) => (
  <ul>
    {data.map((rowData, index) => (
      <li className="list" key={`list-${index}`}> 
        {rowData.avatar && 
          <ul className="innerList">  
            <Avatar avatar={rowData.avatar} key={`${index} ${rowData.avatar}`}/>
            <div className="emailVal" key={`${index} ${rowData.email}`}>{rowData.email}</div>
          </ul>
        }
        <ul className="innerList"> 
          <ul className="listContent" key={`${index} ${rowData.timestamp}`}> 
            <li>Timestamp: </li>
            <li className="value text">{timestampToDate(rowData.timestamp)}</li>
          </ul>  
          <ul className="listContent" key={`${index} ${rowData.fullName}`}> 
            <li>FullName: </li>
            <li className="value text">{rowData.fullName}</li>
          </ul> 
          <ul className="listContent" key={`${index} ${rowData.message}`}> 
            <li>Message: </li>
            <li className="value">{rowData.message}</li>
          </ul>  
        </ul> 
      </li>
    ))}
  </ul>
)

export default List;
