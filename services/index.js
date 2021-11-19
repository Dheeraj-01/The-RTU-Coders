import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
      query MyQuery {
          postsConnection {
          edges {
              node {
              coder {
                  bio
                  name
                  photo {
                  url
                  }
              }
              createdAt
              featuredImage {
                  url
              }
              slug
              title
              displayContent
              tags {
                  name
                  slug
              }
              }
          }
          }
      }
  `

  const results = await request(graphqlAPI, query);
  // console.log(results);
  return results.postsConnection.edges;
}

export const getHomePosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC, last: 3) {
        edges {
          node {
            coder {
              bio
              name
              photo {
                url
              }
            }
            createdAt
            featuredImage {
              url
            }
            slug
            title
            displayContent
            tags {
              name
              slug
            }
          }
        }
      }
    }
  
  `

  const results = await request(graphqlAPI, query);
  // console.log(results);
  return results.postsConnection.edges;
}
export const getTags = async () => {
  const query = gql`
  query MyQuery {
    tags {
      slug
    }
  }
  `

  const results = await request(graphqlAPI, query);
  // console.log(results);
  return results.tags;
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_DESC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};


export const getRecentCategories = async () => {
  const query = gql`
  query MyQuery {
    tags(orderBy: createdAt_DESC, last: 6) {
      name
      slug
    }
  }
  
  `;
  const result = await request(graphqlAPI, query);

  return result.tags;
};

export const getBlogDetails = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: {slug: $slug}) {
        title
        slug
        displayContent
        createdAt
        coder {
          name
          photo {
            url
          }
          bio
        }
        comment {
          comment
          createdAt
          name
        }
        featuredImage {
          url
        }
        tags {
          name
          slug
        }
        content {
          html
        }
      }
    }
  
  `;
  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};


export const getPostsByCategory = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      tags(where: {slug: $slug}) {
        post(orderBy: createdAt_DESC) {
          coder {
                  bio
                  name
                  photo {
                  url
                  }
              }
              createdAt
              featuredImage {
                  url
              }
              slug
              title
              displayContent
              tags {
                  name
                  slug
              }
        }
      }
    }
    
  
  `;
  const result = await request(graphqlAPI, query, { slug });

  return result.tags;
};



export const getComments = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      comments(where: {post: {slug: $slug}}) {
        comment
        name
        createdAt
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};



export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  return result.json();
}

export const submitContactMessage = async (obj) => {
  const result = await fetch('/api/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  return result.json();
}


export const getMembers = async () => {
  const query = gql`
    query MyQuery {
      members {
        codechef
        codeforces
        designation
        facebook
        github
        instagram
        name
        image {
          url
        }
      }
    }
  `

  const results = await request(graphqlAPI, query);
  // console.log(results);
  return results.members;
}