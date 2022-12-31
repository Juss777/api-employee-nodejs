import { Router } from "express";
import { 
    getEmployees, 
    postEmployees, 
    putEmployees, 
    deleteEmployees 
} from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployees);
router.post('/employees', postEmployees);
router.patch('/employees/:id', putEmployees);
router.delete('/employees/:id', deleteEmployees);

export default router;