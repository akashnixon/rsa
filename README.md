# Project Setup Guide

## Prerequisites
- Java 17 or higher
- Node.js (version 14+)
- npm

## Backend Setup (Spring Boot)

### Running the Application
1. Navigate to the backend deployment directory:
   ```bash
   cd /rsa/spring/target/
   ```

2. Run the Spring Boot application:
   ```bash
   java -jar rsa-0.0.1-SNAPSHOT.jar
   ```

## Frontend Setup (React/npm)

### Deployment Location
Place the frontend project in a separate directory:
```
/rsa/rsa-frontend/
```

### Installation and Running
1. Navigate to the frontend project directory:
   ```bash
   /rsa/rsa-frontend/
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Recommended Startup Sequence
1. Start the Spring Boot backend
2. Start the React frontend

## Troubleshooting
- Verify Java version: `java -version`
- Verify Node.js version: `node -v`
- Check network configurations
- Ensure no port conflicts

## Logging
- Backend logs will be in the console or configured log file
- Frontend logs visible in the terminal running `npm start`