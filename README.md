# Recipe App - Food Detection & Recipe Finder

Full-stack web application that detects food from image filenames and finds recipes using the MealDB API.

**How it works:** Upload an image with a descriptive filename (e.g., `apple.jpg`, `banana_photo.png`) → App extracts food name from filename → Fetches recipes from MealDB.

**Tech Stack:**

-   Backend: Clojure + Ring + Compojure
-   Frontend: ClojureScript + Reagent + shadow-cljs
-   API: TheMealDB

---

## Prerequisites

Install the following:

1. **Java JDK 11+**: [Download OpenJDK](https://adoptium.net/)
2. **Leiningen**: [Install guide](https://leiningen.org/#install)
3. **Node.js + npm**: [Download](https://nodejs.org/) (LTS version)

Verify installations:

```bash
java -version
lein version
node -v
npm -v
```

---

## Setup

### 1. Clone Repository

```bash
git clone https://github.com/mistank/Recipe-App.git
cd Recipe-App
```

### 2. Backend Setup

```bash
cd backend
lein deps
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

---

## Running the Application

### Start Backend (Port 3000)

```bash
cd backend
lein run
```

Backend starts at `http://localhost:3000`

### Start Frontend (Port 8020)

In a separate terminal:

```bash
cd frontend
npx shadow-cljs watch app
```

Frontend starts at `http://localhost:8020`

Open browser: `http://localhost:8020`

---

## Usage

1. Click the upload area
2. Select an image with descriptive filename:
    - ✅ `apple.jpg` → detects "apple"
    - ✅ `banana_photo.png` → detects "banana"
    - ✅ `my_pizza_123.jpg` → detects "pizza"
3. Click "Detect Food & Find Recipes"
4. Browse recipes from MealDB

---

## API Endpoints

**Backend (localhost:3000):**

| Method | Endpoint                         | Description                        |
| ------ | -------------------------------- | ---------------------------------- |
| GET    | `/hello`                         | Health check                       |
| POST   | `/api/detect-food`               | Upload image (multipart form-data) |
| GET    | `/api/recipes?ingredients=apple` | Get recipes by ingredient          |
| GET    | `/model-info`                    | Detection method info              |
| GET    | `/api-info`                      | API documentation                  |

---

## Development

### Backend Hot Reload

Leiningen doesn't auto-reload. Restart after changes:

```bash
# Ctrl+C to stop
lein run
```

### Frontend Hot Reload

shadow-cljs provides automatic hot reload. Just save files.

### Clean Build

```bash
# Frontend
cd frontend
npx shadow-cljs clean

# Backend
cd backend
lein clean
```

---

## Production Build

### Frontend

```bash
cd frontend
npx shadow-cljs release app
```

Output: `frontend/public/js/main.js`

### Backend

```bash
cd backend
lein uberjar
```

Output: `backend/target/uberjar/recipe-app-0.1.0-SNAPSHOT-standalone.jar`

Run production jar:

```bash
java -jar backend/target/uberjar/recipe-app-0.1.0-SNAPSHOT-standalone.jar
```

---

## Project Structure

```
Recipe-App/
├── backend/
│   ├── src/
│   │   └── recipe_app/
│   │       ├── core.clj           # Entry point
│   │       ├── routes.clj         # API routes
│   │       └── food_detection.clj # Filename parser
│   ├── project.clj                # Dependencies
│   └── uploads/                   # Uploaded images
│
└── frontend/
    ├── src/
    │   ├── recipe_app/
    │   │   ├── core.cljs          # Entry point
    │   │   └── components/        # React components
    │   ├── api.cljs               # Backend API calls
    │   └── state.cljs             # App state
    ├── shadow-cljs.edn            # Build config
    └── public/
        └── index.html
```

---

## Troubleshooting

**Port already in use:**

```bash
# Find process on port 3000
lsof -ti:3000 | xargs kill -9

# Find process on port 8020
lsof -ti:8020 | xargs kill -9
```

**Backend won't start:**

-   Check Java version: `java -version`
-   Clean build: `lein clean && lein deps`

**Frontend won't compile:**

-   Delete `node_modules`: `rm -rf node_modules && npm install`
-   Clean shadow-cljs: `npx shadow-cljs clean`

**CORS errors:**

-   Ensure backend is running on port 3000
-   Check browser console for exact error
