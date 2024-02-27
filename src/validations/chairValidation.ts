import { Request, Response } from 'express';

export const validateChairData = (req: Request, res: Response): boolean => {
    const { name } = req.body;

    if (!name ) {
        res.status(400).json({ error: 'name is required' });
        return false;
    }

    return true;
};