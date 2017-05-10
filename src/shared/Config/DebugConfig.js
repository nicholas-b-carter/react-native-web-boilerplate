export default {
  useFixtures: false,
  ezLogin: false,
  yellowBox: process.env.NODE_ENV === 'development', // just for native
  reduxLogging: process.env.NODE_ENV === 'development',
  includeExamples: process.env.NODE_ENV === 'development',
  useReactotron: process.env.NODE_ENV === 'development'
}
