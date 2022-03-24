// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import toRoman from '../../utils/toRoman'

type Data = {
  roman: string | undefined
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = toRoman(req.body.number)

  res.status(200).json({ roman: result })
}
