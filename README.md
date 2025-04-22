# RecipeFinder

<p align="center">
  <img src="public/logo.png" alt="RecipeFinder Logo" width="150">
</p>

## A modern web application to discover delicious recipes! 🍳

RecipeFinder is a sleek and intuitive web application designed to help you find the perfect recipe for any occasion. Whether you have specific ingredients on hand, follow a particular diet, or are craving a certain cuisine, RecipeFinder has you covered. Built with a focus on user experience and performance, it delivers a seamless recipe discovery process across all your devices.

🚀 **Features**

* **Ingredient-Based Search:** Simply enter the ingredients you have, and RecipeFinder will find recipes that utilize them. Say goodbye to food waste!
* **Cuisine & Dietary Filters:** Refine your search by selecting from a wide range of cuisines (e.g., Italian, Mexican, Indian) and dietary preferences (e.g., Vegetarian, Vegan, Gluten-Free).
* **Responsive Design:** Enjoy a consistent and user-friendly experience on desktops, tablets, and mobile phones. The layout adapts beautifully to any screen size.
* **Fast Performance:** Leveraging the power of Vite, RecipeFinder offers lightning-fast loading times and a smooth, responsive user interface.

🛠️ **Tech Stack**

* **Frontend:**
    * [React](https://react.dev/) - A JavaScript library for building user interfaces.
    * [TypeScript](https://www.typescriptlang.org/) - A statically typed superset of JavaScript that adds optional static typing to the language.
    * [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
* **Build Tool:**
    * [Vite](https://vitejs.dev/) - A next-generation frontend tooling that provides an extremely fast development experience and optimized builds.
* **Linting:**
    * [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript/TypeScript.
* **Styling:**
    * [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript plugins, often used behind the scenes with Tailwind CSS.
* **Configuration:**
    * TypeScript and Vite configurations are included for a streamlined development setup.

📦 **Getting Started**

Follow these steps to get RecipeFinder up and running on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Dhruv-Davda/RecipeFinder.git](https://github.com/Dhruv-Davda/RecipeFinder.git)
    cd RecipeFinder
    ```

2.  **Install dependencies:**
    Navigate to the project directory in your terminal and run:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory of the project. Add any necessary environment variables, such as API keys for recipe data sources. Refer to the project's documentation or comments within the code for required variables.

    ```
    # Example .env (replace with your actual values)
    # API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Start the development server:**
    Run the following command in your terminal:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    The application will typically be available at `http://localhost:5173`. Your terminal will usually indicate the exact address.

📜 **License**

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it according to the terms of this license.
