import {
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType
} from 'graphql/type';
import co from 'co';
import request from 'co-request';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'An Article',
  fields: () => ({
    pageid: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'pageid of the article'
    },
    title: {
      type: GraphQLString,
      description: 'title of the article'
    },
    info: {
      type: GraphQLString,
      description: 'description of the article',
      resolve: ({ extract }) => extract
    }
  })
});

const schemas = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Wikipedia',
    description: 'Wikipedia API',
    fields: () => ({
      article: {
        type: articleType,
        args: {
          title: {
            name: 'title',
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (obj, { title }, source, fieldASTs) => co(function *() {
          let url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|images&format=json&titles=${title}&explaintext=&exintro=`
          let response = yield request(url);
          let { pages } = JSON.parse(response.body).query;

          return pages[Object.keys(pages)[0]];
        })
      }
    })
  })
});


export default schemas;
