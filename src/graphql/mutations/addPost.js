import { gql } from '@apollo/client';

const ADD_POST = gql`
mutation CreatePost($data: PostInput!) {
  createPost(data: $data)
}`;

export default ADD_POST;
