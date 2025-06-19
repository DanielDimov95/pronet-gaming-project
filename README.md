# Ice Fire Explorer

A Game of Thrones themed web application built with Angular frontend and Node.js backend, featuring house exploration, user authentication, and favorites management.

## 🏗️ Architecture

### Frontend (IceFireExplorerUI)
- **Framework**: Angular 19 with standalone components
- **State Management**: NgRx with Effects
- **Styling**: Tailwind CSS
- **Testing**: Jasmine + Karma
- **E2E Testing**: Cypress

### Backend (IceFireExplorerBE)
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: SQLite with TypeORM
- **Authentication**: JWT tokens
- **API Documentation**: Swagger/OpenAPI

## 🚀 Features

- **User Authentication**: Register, login, and logout functionality
- **House Exploration**: Browse and search Game of Thrones houses
- **Favorites Management**: Add/remove houses to favorites
- **Responsive Design**: Mobile-friendly interface
- **Real-time Search**: Filter houses by name
- **Pagination**: Navigate through house listings

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/DanielDimov95/pronet-gaming-project.git
cd pronet-gaming-project
```

### 2. Backend Setup

```bash
cd IceFireExplorerBE

# Install dependencies
npm install

# Start development server
npm run dev
```

The backend will be available at `http://localhost:3000`

### 3. Frontend Setup

```bash
cd IceFireExplorerUI/ice-fire-explorer

# Install dependencies
npm install

# Start development server
npm start
```

The frontend will be available at `http://localhost:4200`

## 🧪 Testing

### Frontend Tests

```bash
cd IceFireExplorerUI/ice-fire-explorer

# Run unit tests
npm test

# Run unit tests in watch mode
npm run test:watch

# Run E2E tests
npm run cypress:open
npm run cypress:run
```

## 📁 Project Structure

```
pronet-gaming-project/
├── IceFireExplorerBE/          # Backend application
│   ├── src/
│   │   ├── config/            # Configuration files
│   │   ├── controllers/       # Route controllers
│   │   ├── entities/          # TypeORM entities
│   │   ├── middleware/        # Express middleware
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic
│   │   ├── types/             # TypeScript types
│   │   └── validations/       # Input validation
│   └── database.sqlite        # SQLite database
└── IceFireExplorerUI/         # Frontend application
    └── ice-fire-explorer/
        ├── src/
        │   ├── app/
        │   │   ├── components/ # Reusable components
        │   │   ├── pages/      # Page components
        │   │   ├── services/   # Angular services
        │   │   └── state/      # NgRx state management
        │   └── assets/         # Static assets
        └── cypress/            # E2E tests
```

## 📚 API Documentation

Once the backend is running, visit `http://localhost:3000/api-docs` for interactive API documentation.

### Key Endpoints

- `POST /auth/register` - User registration
- `POST /auth/login` - User authentication
- `GET /houses` - Get houses list
- `GET /houses/:id` - Get house details

## 🎨 State Management

The application uses NgRx for state management with three main features:

- **Auth**: User authentication state
- **Houses**: Houses data and loading states
- **Favorites**: User's favorite houses
