import type { CodegenConfig } from '@graphql-codegen/cli'
import { join } from 'path'

const config: CodegenConfig = {
  overwrite: true,
  schema: join(process.cwd(), 'apps/api/src/schema.gql'),
  watch: true,
  generates: {
    'apps/web/src/generated/types.tsx': {
      documents: join(process.cwd(), 'apps/web/src/**/*.gql.tsx'),
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        avoidOptionals: false,
        exposeQueryKeys: true,
        fetcher: {
          endpoint: 'http://localhost:3000/graphql',
        },
        pureMagicComment: true,
      },
    },
    'apps/api/prisma/seed/generated/': {
      documents: join(process.cwd(), 'apps/api/**/*.gql.tsx'),
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
