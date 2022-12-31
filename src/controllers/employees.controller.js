import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        var query = 'SELECT * FROM employee';
        if (req.params.id) {
            query = query + ' WHERE id = ' + req.params.id;
        }
        const [employees] = await pool.query(query);

        if (employees.length == 0) res.status(404).json({ 
            message: "No encontrado"
        });
        else res.json(req.params.id ? employees[0] : employees);
    } catch (error) {
        return res.status(500).json({ error });
    }
    
    
};

export const postEmployees = async (req, res) => {
    const {name, salary} = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);
        res.send({
            id: rows.insertId,
            name,
            salary
        });
    } catch (error) {
        return res.status(500).json({ error });
    }
    
};

export const putEmployees = async (req, res) => {
    const {id} = req.params;
    const {name, salary} = req.body;

    try {
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);

        if (result.affectedRows == 0) 
            res.status(404).json({ message: "Employee not found" });
        else {
            const [employee] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

            if (employee.length > 0) 
                return res.json(employee[0]);
            else 
                return res.status(404).json({ message: "Employee not found" });
        }
    } catch (error) {
        return res.status(500).json({ error });
    }

    
    
};

export const deleteEmployees = async (req, res) => {
    var query = "DELETE FROM employee WHERE id = " + req.params.id;
    
    try {
        const [result] = await pool.query(query);
        if (result.affectedRows <= 0) {
            return res.status(404).json({message: "Employee not found"})
        }

        return res.status(200).json({message: "Employee deleted"});
    } catch (error) {
        return res.status(500).json({ error });
    }
    
};