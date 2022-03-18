import React from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item className='pagination' active={x + 1 === page} activeLabel={false}>{x + 1}</Pagination.Item>
          </Link>
        ))}
      </Pagination>
    )
  )
}

export default Paginate