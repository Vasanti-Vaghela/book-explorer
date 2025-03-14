# Book Explorer

## Overview

Book Explorer is a React-based application that allows users to search for books, view book details, and manage their favorite books. The app fetches book data from an external API and provides an interactive interface for browsing and managing books.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Vasanti-Vaghela/book-explorer.git
   cd book-explorer
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

### Running Tests

To run the test suite, use the following command:

```sh
npm run test
```

## Application Features

- **Book Search:** Users can search for books by title, author, or genre.
- **Book Details:** Clicking on a book card navigates to a detailed page with additional book information.
- **Favorites Management:** Users can add or remove books from their favorites list.
- **State Management:** The application uses Redux Toolkit to manage search results and favorite books.
- **Routing:** The app uses React Router for seamless navigation between different views.

## Approach & Trade-offs

### Routing

- Implemented using `react-router-dom`.
- Clicking on a book card leads to the `BookDetailsPage`, where detailed information about the selected book is displayed.
- Navigation includes a search page (`/`), a favorites page (`/favorites`), and book details pages (`/book/:id`).

### Form Handling

- Controlled components handle form inputs.
- Validation ensures users provide at least one search criterion before submitting.

### State Management

- **Redux Toolkit** is used to store search results and favorite books.
- **Thunks** manage async API calls to fetch book data.

### Trade-offs

- Redux was chosen over local state for better scalability and persistence across components.
- Using an external API means occasional latency in fetching book data.
- Styling is kept simple using CSS modules for maintainability.

## Performance Considerations

- **Lazy Loading:** Book details and additional resources load only when needed, reducing initial load times.
- **Memoization:** Redux selectors and React's `useMemo` prevent redundant calculations and re-renders.
- **Optimized Rendering:** Components update only when relevant state changes to avoid unnecessary re-renders.
