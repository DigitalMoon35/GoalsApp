const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5035;
const pool = require("./db.js");

//middleware
app.use(cors());
app.use(express.json());

// get all goals
app.get("/goals", async (req, res) => {
    try {
        const goals = await pool.query("SELECT * FROM goals")
        res.json(goals.rows);
    } catch (error) {
        console.error(error.message);
    }
} )

// get single goal
app.get("/goals/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const goal = await pool.query(
            "SELECT * FROM goals WHERE id = $1", [id]
        )
        res.json(goal.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//create goal
app.post("/goals", async (req, res) => {
    try {
        const {description} = req.body;
    
        const goal = await pool.query(
            "INSERT INTO goals (description) VALUES ($1)", [description]
        )

        res.json("You've created a goal!");
        
    } catch (error) {
        console.error(error.message);
    }
});


// delete goal
app.delete("/goals/:id", async (req, res) => {
    try {
        const {id} = await req.params;
        const goal = await pool.query(
            "DELETE FROM goals WHERE id = ($1)", [id]
        )
        res.json("You deleted that shit!");
    } catch (error) {
      console.error(error.message);  
    }
})

// update goal
app.put("/goals/:id", async (req, res) => {
    try {
        const { description } = req.body;
        const { id } =  req.params;
        console.log(req.body)
        const goal = await pool.query(
            "UPDATE goals SET description = $1 WHERE id = $2", [JSON.stringify(description), id]
        );
        res.json("YOU UPDATED IT!!!");
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(PORT, () => console.log("WE IN HERE ON 5035 GOD!!"));