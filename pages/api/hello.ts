// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
    email: string;
    id: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const data: Data[] = [
        {
            email: 'karthick@email.com',
            id: 1,
            name: 'karthick',
        },
        {
            email: 'namratha@email.com',
            id: 2,
            name: 'namratha',
        },
        {
            email: 'shreya@email.com',
            id: 3,
            name: 'shreya',
        },
    ];

    const user = data.find((usr) => usr.id === Number(req.query.id));

    res.status(200).json({ user });
}
