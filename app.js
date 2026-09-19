const { serve } = require('NeteaseCloudMusicApi')
const PORT = process.env.PORT || 3000

serve(PORT, '0.0.0.0').then(() => {
  console.log(`Server running on http://0.0.0.0:${PORT}`)
})
