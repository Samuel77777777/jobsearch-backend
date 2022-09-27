import express from 'express';
import {
    someRecords,
    getGraduates,
    getGraduateById,
    createGraduate,
    updateGraduate,
    deleteGraduate
} from "../controllers/GraduateController.js";

const router = express.Router();

router.get('/', someRecords);
router.get('/graduates', getGraduates);
router.get('/graduates/:id', getGraduateById);
router.post('/graduates', createGraduate);
router.patch('/graduates/:id',updateGraduate);
router.delete('/graduates/:id',deleteGraduate);


export default router;