# Task Aggregator App

## Overview
The Task Aggregator App is a web application designed to help users manage their tasks efficiently by aggregating pull requests from GitHub and work items from Azure DevOps, along with other internal task assignments. This application provides a unified interface for users to view and manage their tasks across different platforms.

## Features
- **GitHub Integration**: Fetch and display all pull requests assigned to the user across multiple repositories.
- **Azure DevOps Integration**: Access work items assigned in the current sprint.
- **Internal Task Management**: View and manage other task assignments within the company.
- **User Authentication**: Secure access to the application with user authentication.
- **Error Handling**: Consistent error handling throughout the application.

## Technologies Used
- **Backend**: Node.js, Express, TypeScript
- **Frontend**: React, TypeScript
- **APIs**: GitHub API, Azure DevOps API

## Project Structure
```
task-aggregator-app
├── src
│   ├── index.ts
│   ├── app.ts
│   ├── config
│   │   └── index.ts
│   ├── services
│   │   ├── github.service.ts
│   │   ├── azure-devops.service.ts
│   │   └── task.service.ts
│   ├── controllers
│   │   ├── pull-requests.controller.ts
│   │   ├── work-items.controller.ts
│   │   └── tasks.controller.ts
│   ├── routes
│   │   ├── index.ts
│   │   ├── pull-requests.routes.ts
│   │   ├── work-items.routes.ts
│   │   └── tasks.routes.ts
│   ├── middleware
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   ├── models
│   │   ├── pull-request.model.ts
│   │   ├── work-item.model.ts
│   │   └── task.model.ts
│   └── types
│       └── index.ts
├── client
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── components
│   │   │   ├── PullRequestList.tsx
│   │   │   ├── WorkItemList.tsx
│   │   │   └── TaskList.tsx
│   │   ├── services
│   │   │   └── api.service.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd task-aggregator-app
   ```
3. Install dependencies for both server and client:
   ```
   npm install
   cd client
   npm install
   ```
4. Configure environment variables for GitHub and Azure DevOps API keys in the `src/config/index.ts` file.
5. Start the server:
   ```
   npm start
   ```
6. Start the client:
   ```
   cd client
   npm start
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.