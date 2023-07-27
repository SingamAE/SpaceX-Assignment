import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import './pagination.css'


type propp = {
    data: object[];
    start: any;
    end: any;
};

const Pagenation: React.FC<propp> = ({data,start,end}) => {
    
    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current) => {
        start(current * 10 - 9);
        end(current * 10)
    };
  return <div className='pagination'>
    <Pagination
      showSizeChanger={false}
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={1}
      onChange={onShowSizeChange}
      total={data.length}
    />
    
  </div>
};

export default Pagenation;