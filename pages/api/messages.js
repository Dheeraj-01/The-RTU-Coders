import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphqlToken = process.env.GRAPHCMS_TOKEN;
/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

export default async function  messages(req, res) {
  const graphQlClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphqlToken}`
    }
  });

  const query = gql`
    mutation MyMutation($name: String!, $email: String!, $message: String!) {
      __typename
      createContactMessage(
        data: {name: $name, message: $message, email: $email}
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
