import * as prismic from '@prismicio/client'

export const repositoryName = 'ignews-appsoft'
const endpoint = prismic.getEndpoint(repositoryName)

export function getPrismicClient() {
  const client = prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })
  return client
}
