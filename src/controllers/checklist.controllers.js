import checkList from "../models/checklist.model.js";
import { NotFoundError, BadRequestError } from '../errors/index.js';
import { validationResult } from 'express-validator';


export const test = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        return next(new BadRequestError(errors.array()[0].msg));
    }

    res.status(200).json({
        message: 'Hello World!'
    });
}

export const addCheck = async (req, res, next) => {
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            next(new BadRequestError(errors.array()[0].msg));
        }

        const newCheck = await checkList.create(req.body);
        return res.status(201).json(newCheck);

    } catch (error) {
        next(error);
    }
}

export const getCheckList = async (req, res, next) => {
    try {
        const Checks = await checkList.find({});
        if (Checks) {
            return res.status(200).json({ 
                size: Checks.length,
                Checks
            });
        }
    } catch (error) {
        next(error);
    }
}

export const updateCheck = async (req, res, next) => {
    const CheckId = req.query.id;
    const updates = req.body;

    try {
        const updatedCheck = await checkList.findByIdAndUpdate(CheckId, updates, { new: true });
        if (!updatedCheck) {
            return next(new NotFoundError(`Check not found`));
        } 
        return res.status(200).json(updatedCheck);
    } catch (error) {
        next(error);
    }
}


export const deleteCheck = async (req, res, next) => {
    try {
        const deletedCheck = await checkList.findByIdAndDelete(req.query.id);
        return res.status(200).json({ message: 'Check deleted'});
    } catch (error) {
        next(error);
    }
}