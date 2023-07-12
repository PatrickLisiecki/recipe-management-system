const { Recipe } = require("./models")
const express = require("express");
require("dotenv").config();
const port = 7777;

const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.use((req, res, next) => {
    res.on("finish", () => {
        // the 'finish' event will be emitted when the response is handed over to the OS
        console.log(
            `Request: ${req.method} ${req.originalUrl} ${res.statusCode}`
        );
    });
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the Recipe Management System");
});

// Get all recipes
app.get("/recipes", async (req, res) => {
    try {
        const allRecipes = await Recipe.findAll();

        res.status(200).json(allRecipes);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: err.message });
    }
});

// Get a specific recipe
app.get("/recipes/:recipeId", async (req, res) => {
    const targetId = parseInt(req.params.recipeId, 10);

    try {
        const recipe = await Recipe.findOne({
            where: { id: targetId },
        });

        if (recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(404).send({ message: `Recipe #${targetId} not found.` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: err.message });
    }
});

// Create a new recipe
app.post("/recipes", async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);

        res.status(201).json(newRecipe);
    } catch (err) {
        if (err.name === "SequelizeValidationError") {
            return res
                .status(422)
                .json({ errors: err.errors.map((e) => e.message) });
        }
        console.error(err);
        res.status(500).send({ message: err.message });
    }
});

// Update a specific recipe
app.patch("/recipes/:recipeId", async (req, res) => {
    const targetId = parseInt(req.params.recipeId, 10);

    try {
        const [numberOfAffectedRows, affectedRows] = await Recipe.update(
            req.body,
            {
                where: { id: targetId },
                returning: true,
            }
        );

        if (numberOfAffectedRows > 0) {
            res.status(200).json(affectedRows[0]);
        } else {
            res.status(404).send({ message: `Recipe #${targetId} not found.` });
        }
    } catch (err) {
        if (err.name === "SequelizeValidationError") {
            return res
                .status(422)
                .json({ errors: err.errors.map((e) => e.message) });
        }
        console.error(err);
        res.status(500).send({ message: err.message });
    }
});

// Delete a specific recipe
app.delete("/recipes/:recipeId", async (req, res) => {
    const targetId = parseInt(req.params.targetId, 10);

    try {
        const deleteOp = await Recipe.destroy({
            where: { id: targetId },
        });

        if (deleteOp > 0) {
            res.status(200).send({
                message: `Recipe #${targetId} deleted successfully.`,
            });
        } else {
            res.status(404).send({ message: `Recipe #${targetId} not found.` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: err.message });
    }
});
