import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphqlToken = process.env.GRAPHCMS_TOKEN;
/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

export default async function  comments(req, res) {
  const graphQlClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphqlToken}`
    }
  });

  const query = gql`
    mutation MyMutation($name: String!, $email: String!, $comment: String!, $slug: String!) {
      __typename
      createComment(
        data: {name: $name, comment: $comment, email: $email, post: {connect: {slug: $slug}}}
      ) {
        id
      }
    }
  `

  try {
    const result = await graphQlClient.request(query, req.body);
  return res.status(200).send(result);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}
