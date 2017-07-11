import { expect } from 'chai';

import { getCompanies } from '../companies.js';
import { GET_COMPANIES, COMPANIES_URL } from '../../constants';

describe('getCompanies action creator', function(){

  it('should create an action to get a list of companies', function() {
    const expectedAction = {
      type: GET_COMPANIES,
      payload: {
        request: {
          url: COMPANIES_URL
        }
      }
    };
    expect(getCompanies()).eql(expectedAction);
  });
});
