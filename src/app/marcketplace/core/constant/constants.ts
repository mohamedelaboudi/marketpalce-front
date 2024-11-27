import * as _ from 'lodash';

export const DEFAULT_SEARCH = {};

export const DEFAULT_PAGINATION = {
    resultCount: 0,
    limit: 10,
    offset: 0,
    pagesCount: 0,
    totalCount: 0
};

export const getDefaultPagination = () => {
  return _.cloneDeep(DEFAULT_PAGINATION);
};

export const getDefaultSearch = () => {
  return _.cloneDeep(DEFAULT_SEARCH);
};


