
export default function handler(req, res) {
  const file = `${__dirname}/Resume.pdf`;
  res.download(file);
}
