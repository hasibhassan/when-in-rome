// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import toNumber from '../../utils/toNumber'

type Data = {
  number: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = toNumber(req.body.roman)

  res.status(200).json({ number: result })
}
