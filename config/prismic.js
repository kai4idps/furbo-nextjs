import Prismic from '@prismicio/client';

const apiEndpoint = 'https://furbo-prismic.cdn.prismic.io/api/v2';
const accessToken =
  'MC5ZUnlvUFJJQUFDZ0E4RVlF.JO-_ve-_ve-_vSrvv73vv73vv70eQO-_ve-_vRwG77-9QDHvv73vv71fAisCR3bvv702SO-_vQ7vv73vv70';

// const apiEndpoint = 'https://furbo-prismic-dev.prismic.io/api/v2';
// const accessToken =
//   'MC5ZWDdnZGhFQUFDZ0FjTmZz.77-9cx3vv71677-9EGEp77-977-977-977-977-977-9dQnvv70p77-9emfvv70H77-9Se-_ve-_vULvv71cfA';

export const client = Prismic.client(apiEndpoint, {
  accessToken,
});
