import { gql } from '@apollo/client';

const GET_POSTS = gql`
query Posts {
  posts {
    id
    title
    description
    author
  }
}
`;

export default GET_POSTS;
