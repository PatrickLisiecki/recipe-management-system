"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Recipe extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Recipe.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validation: {
                    checkLength(value) {
                        if (this.title.length < 3) {
                            throw new Error(
                                "Title must be at least 3 characters."
                            );
                        }
                    },
                },
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [0, 500],
                },
            },
            ingredients: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [0, 1000],
                },
            },
            instructions: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [0, 5000],
                },
            },
            // created_at: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            //     defaultValue: DataTypes.NOW,
            // },
            // updated_at: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            //     defaultValue: DataTypes.NOW,
            // },
        },
        {
            sequelize,
            modelName: "Recipe",
            tableName: "recipes",
            underscored: true,
        }
    );
    return Recipe;
};
