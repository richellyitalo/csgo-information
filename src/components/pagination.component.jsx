import { Button, Pre } from '@blueprintjs/core';
import { useEffect, useState } from 'react';

const Pagination = (props) => {
  const {
    total,
    currentPage,
    perPage,
    limitButtonsPage,
    onHandleCurrentChange,
  } = props;
  const [totalPages, setTotalPages] = useState();
  const [buttonNumbers, setButtonNumbers] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(total / perPage));
  }, [total]);

  useEffect(() => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      if (Math.abs(i - currentPage) <= limitButtonsPage) {
        pageNumbers.push(i);
      }
    }

    setButtonNumbers(pageNumbers);
  }, [totalPages, currentPage]);

  if (props.total === 0 || totalPages <= 1) {
    return null;
  }

  return (
    <p>
      <Button
        icon="arrow-left"
        small
        disabled={currentPage === 1}
        onClick={() => onHandleCurrentChange(currentPage - 1)}
      />

      {buttonNumbers.map((page) => {
        const isCurrent = page === currentPage;

        return (
          <Button
            key={page}
            small
            color="red"
            disabled={isCurrent}
            onClick={() => onHandleCurrentChange(page)}
          >
            {page}
          </Button>
        );
      })}

      <Button
        icon="arrow-right"
        small
        disabled={currentPage === totalPages}
        onClick={() => onHandleCurrentChange(currentPage + 1)}
      />
      <strong className="text-xs text-stone-500 ml-2 mr-5">
        {total} results
      </strong>
    </p>
  );
};

export default Pagination;
