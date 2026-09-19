const { NeteaseCloudMusicApi } = require('NeteaseCloudMusicApi');
const PORT = process.env.PORT || 3000;

NeteaseCloudMusicApi.serve(PORT, '0.0.0.0').then(() => {
  console.log(`Server running on port ${PORT}`);
});
