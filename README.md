# Mariposa Shopping Mall Project

## Introduction

Mariposa is a modern and user-friendly online shopping mall that offers a seamless shopping experience. The project leverages cutting-edge technologies like React, TypeScript, and TailwindCSS to provide a responsive and aesthetically pleasing interface. The backend is powered by Node.js ensuring robust and scalable performance.

## Features

- **User Authentication**: Secure login and registration system with JWT-based authentication.
- **Shopping Cart**: Add, remove, and update products in the cart.
- **Order Management**: Place and track orders with real-time status updates.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.

## Technologies Used

### Frontend

- React
- TypeScript
- TailwindCSS
- Zustand (for state management)

### Backend

- Node.js

### Others

- ESLint & Prettier (for code quality)
- GitHub Actions (for CI/CD)

## Installation

### Prerequisites

- Node.js (>= 16.x)

### Steps

1. Clone the repository:
   ```bash
   git clone git@github.com:mminhou/Mariposa.git
   cd mariposa
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd mariposa
   yarn install
   cd ../backend
   yarn install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `backend` directory with the following:
     ```env
     ```

4. Start the development servers:
   ```bash
   # In one terminal, start the backend
   cd backend
   yarn dev

   # In another terminal, start the frontend
   cd frontend
   yarn start
   ```

5. Access the application at `http://localhost:3000`.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact us at exit19093@gmail.com.

