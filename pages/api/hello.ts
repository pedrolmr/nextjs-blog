import { NextApiRequest, NextApiResponse } from 'next';

// export default function handler(req, res) {
//     res.status(200).json({ text: 'Hello' })
// }

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: 'Hello' })
}