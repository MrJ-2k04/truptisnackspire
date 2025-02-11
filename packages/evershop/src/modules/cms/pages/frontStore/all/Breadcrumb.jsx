import React from 'react';
import PropTypes from 'prop-types';

function Breadcrumb({ pageInfo: { breadcrumbs } }) {
  try {
    if (breadcrumbs.length === 2 && new URL(breadcrumbs[1].url).pathname === "/") {
      return null;
    }
  } catch (error) {}

  return breadcrumbs.length ? (
    <div className="breadcrumb page-width my-8">
      {breadcrumbs.map((breadcrumb, index) =>
        index === breadcrumbs.length - 1 ? (
          <span key={index}>{breadcrumb.title}</span>
        ) : (
          <span key={index}>
            <a href={breadcrumb.url} className="text-interactive">
              {breadcrumb.title}
            </a>
            <span>{' / '}</span>
          </span>
        )
      )}
    </div>
  ) : null;
}

Breadcrumb.propTypes = {
  pageInfo: PropTypes.shape({
    breadcrumbs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
      })
    )
  }).isRequired
};

export const query = `
  query query {
    pageInfo {
      breadcrumbs {
        title
        url
      }
    }
  }
`;

export const layout = {
  areaId: 'content',
  sortOrder: 0
};

export default Breadcrumb;
