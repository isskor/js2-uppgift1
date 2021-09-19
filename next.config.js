/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    API_KEY: 'ec88e2e0aead7f05f85d68d6d49c7f1b',
    ENDPOINT: 'https://api.themoviedb.org/3',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/now_playing',
        permanent: true,
      },
    ];
  },
};
