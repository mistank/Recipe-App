# Recipe-App

This is a modern web application built with **ClojureScript** and **shadow-cljs**.

It's programmed in ClojureScript which base goal is to generate a list of recipes based on an input that user enters via the form

For example:
-User entered "eggs and cheese" and the app suggested him to make an omelette

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
  - [Development Mode](#in-development-mode)
  - [Production Mode](#in-production-mode)
- [Additional Notes](#additional-notes)
- [Cleaning the Project](#cleaning-the-project)

---

## Prerequisites

Ensure the following are installed on your system:

1. **Node.js**: [Download and install](https://nodejs.org/) the latest LTS version.

2. **npm**: Comes bundled with Node.js. Verify installation with:
   ```bash
   npm -v
   ```
3. **Java**: Install a Java Development Kit (JDK). We recommend OpenJDK 11 or later.

4. **Clojure CLI tools**: [Follow the official guide](https://clojure.org/guides/getting_started) to install.

---

## Setup Instructions

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone <https://github.com/mistank/Recipe-App.git>
cd <Recipe-App>
```

### Step 2: Install Dependencies

Install JavaScript dependencies using npm:

```bash
npm install
```

### Step 3: Start shadow-cljs

Run the shadow-cljs build server:

```bash
npx shadow-cljs watch <app>
```

- Replace `<build-id>` with the identifier specified in your `shadow-cljs.edn` file. For example:
  ```bash
  npx shadow-cljs watch app
  ```

---

## Running the Application

### In Development Mode

1. Start the development server:

   - If configured, the app should be available at [http://localhost:8000](http://localhost:8000).
   - Otherwise, open the generated `index.html` file located in the `public` folder.

2. Enjoy live reloading: Any changes made to your source files will update the app in real time.

### In Production Mode

Generate an optimized production build:

```bash
npx shadow-cljs release <build-id>
```

The output files will be placed in the directory configured as `:output-dir` in your `shadow-cljs.edn` file (default: `resources/public/js`).

---

## Additional Notes

### shadow-cljs Dashboard

You can use the shadow-cljs interactive dashboard to manage builds:

```bash
npx shadow-cljs server
```

Access it at [http://localhost:9630](http://localhost:9630).

### Environment Variables

If your application requires environment variables, add them to a `.env` file in the project root.

### Troubleshooting

- Ensure all dependencies are installed and properly configured.
- For detailed logs, use the `--verbose` flag with shadow-cljs commands:
  ```bash
  npx shadow-cljs --verbose watch <build-id>
  ```

---

## Cleaning the Project

To remove all generated files:

```bash
npx shadow-cljs clean
```
