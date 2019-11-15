
import gql from 'graphql-tag';

const JOBS_QUERY = gql`
  query Jobs {
    homepages {
      UniqueTiles
    }
  }
`;

export default JOBS_QUERY;