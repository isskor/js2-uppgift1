import React, { useState } from 'react';
import Link from 'next/link';
import Box from '../Box/Box';
import { FlexBox } from '../FlexBox/FlexBox';
import * as styles from './Pagination.styles';

export type TBasePagination = {
  totalPages?: number;
  currentPage?: number;
  pagesToShow?: number;
};

function constructPagination({
  totalPages,
  currentPage,
  pagesToShow,
}: TBasePagination) {
  const pageAmount = Math.ceil(totalPages || 0);
  if (pageAmount === 0) {
    return [];
  }
  const pages = [];
  let counter = 0;
  if (currentPage + pagesToShow / 2 > totalPages) {
    //   dont go above maxPages
    counter = totalPages + 1 - (pagesToShow + currentPage);
  } else if (currentPage - pagesToShow / 2 < 0) {
    //   dont go below 1
    counter = totalPages + 1 - (totalPages + currentPage);
  } else {
    //   center current page
    counter = 0 - Math.floor(pagesToShow / 2);
  }

  for (let i = 0; i < pagesToShow; i++) {
    pages.push(currentPage + counter);
    counter++;
  }

  return pages;
}

export type TPagination = TBasePagination & {
  pathName?: string;
  onClick?: () => void;
  querySlug?: string;
  slug?: string | number;
};

const Pagination: React.FC<TPagination> = ({
  currentPage,
  pagesToShow = 5,
  totalPages,
  pathName,
  slug = '',
  querySlug = '',
}) => {
  const pages = constructPagination({ totalPages, pagesToShow, currentPage });

  return (
    <Box padding={'20px'}>
      <FlexBox justify={'center'}>
        {currentPage > 1 && (
          <Link
            href={{
              pathname: pathName,
              query: {
                [querySlug]: slug,
                page: currentPage - 1,
              },
            }}
          >
            <styles.PaginationButton>page prev</styles.PaginationButton>
          </Link>
        )}
        {pages.length > 0 &&
          pages.map((page, i) => {
            return (
              <Link
                href={{
                  pathname: pathName,
                  query: {
                    [querySlug]: slug,
                    page: page,
                  },
                }}
                key={i}
              >
                <styles.PaginationButton active={currentPage === page}>
                  {page}
                </styles.PaginationButton>
              </Link>
            );
          })}
        {currentPage < totalPages && (
          <Link
            href={{
              pathname: pathName,
              query: {
                [querySlug]: slug,
                page: currentPage + 1,
              },
            }}
          >
            <styles.PaginationButton>page next</styles.PaginationButton>
          </Link>
        )}
      </FlexBox>
    </Box>
  );
};

export default Pagination;
