import fs from 'fs'
import path from 'path'

export default (req, res) => {
  const dirRelativeToPublicFolder = 'img'

  const dir = path.resolve('./public/');

  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', name))

  res.statusCode = 200
  res.json(images);
}
