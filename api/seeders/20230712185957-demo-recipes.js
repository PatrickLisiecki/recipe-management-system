"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("recipes", [
            {
                title: "Delicious Pancakes",
                description: "A mouthwatering pancake recipe",
                ingredients:
                    "1 cup flour, 2 eggs, 1 cup milk, 2 tbsp sugar, 1 tsp baking powder",
                instructions:
                    "1. In a bowl, mix the flour, sugar, and baking powder. 2. In a separate bowl, beat the eggs and milk. 3. Combine the dry and wet ingredients. 4. Heat a non-stick pan and pour the batter. 5. Cook until golden brown on both sides. 6. Serve hot with maple syrup.",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: "Spaghetti Bolognese",
                description: "Classic Italian pasta dish",
                ingredients:
                    "200g spaghetti, 300g ground beef, 1 onion, 2 cloves garlic, 400g canned tomatoes, 2 tbsp tomato paste",
                instructions:
                    "1. Cook the spaghetti according to package instructions. 2. In a pan, sauté the onion and garlic. 3. Add the ground beef and cook until browned. 4. Stir in the canned tomatoes and tomato paste. 5. Simmer for 20 minutes. 6. Serve the sauce over the cooked spaghetti.",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: "Chocolate Chip Cookies",
                description: "Classic homemade cookies with chocolate chips",
                ingredients:
                    "1 cup butter, 1 cup sugar, 1 cup brown sugar, 2 eggs, 1 tsp vanilla extract, 2 cups all-purpose flour, 1 tsp baking soda, 1/2 tsp salt, 2 cups chocolate chips",
                instructions:
                    "1. Preheat the oven to 375°F (190°C). 2. In a bowl, cream together the butter, sugar, and brown sugar. 3. Beat in the eggs and vanilla extract. 4. In a separate bowl, combine the flour, baking soda, and salt. 5. Gradually add the dry ingredients to the wet ingredients, mixing well. 6. Stir in the chocolate chips. 7. Drop rounded tablespoons of dough onto a baking sheet. 8. Bake for 9-11 minutes or until golden brown. 9. Allow to cool on the baking sheet for a few minutes before transferring to a wire rack.",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: "Chicken Stir-Fry",
                description:
                    "Quick and flavorful chicken stir-fry with vegetables",
                ingredients:
                    "2 chicken breasts, 2 tbsp soy sauce, 1 tbsp oyster sauce, 1 tbsp cornstarch, 1 tsp sesame oil, 2 tbsp vegetable oil, 1 bell pepper, 1 carrot, 1/2 onion, 2 cloves garlic, 1 cup broccoli florets",
                instructions:
                    "1. Slice the chicken breasts into thin strips. 2. In a bowl, combine the soy sauce, oyster sauce, cornstarch, and sesame oil. 3. Add the chicken to the sauce mixture and let it marinate for 15 minutes. 4. Heat the vegetable oil in a wok or large skillet over high heat. 5. Add the chicken and stir-fry until cooked through. 6. Remove the chicken from the wok. 7. In the same wok, stir-fry the bell pepper, carrot, onion, garlic, and broccoli until crisp-tender. 8. Return the chicken to the wok and stir-fry for another minute. 9. Serve hot over steamed rice.",
                created_at: new Date(),
                updated_at: new Date(),
            },
            // Add more mock data objects as needed
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        // Remove the inserted mock data from the table
        await queryInterface.bulkDelete("recipes", null, {});
    },
};
