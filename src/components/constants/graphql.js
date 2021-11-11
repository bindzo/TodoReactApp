import { gql } from '@apollo/client';

const GET_TODOS = gql`
query Posts {
  posts {
    id
    title
    description
    author
  }
}
`;

const ADD_TODO = gql`
mutation CreatePost($data: PostInput!) {
  createPost(data: $data)
}
`;

export default { GET_TODOS, ADD_TODO };
