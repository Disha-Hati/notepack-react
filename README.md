## NotePack ✏️
This project is a simple note-taking web application built to mimic the functionality of Google Keep. It allows users to create, save, like, and delete notes. The application is developed using React.js with the create-react-app tool, styled using CSS, and utilizes local storage for data persistence.

### Tech Stack

- **React**: The frontend is built using React.js, providing a dynamic and efficient user interface.
- **CSS**: Custom styling is implemented using CSS to ensure a visually appealing design.
- **Local Storage**: Data is stored locally in the browser's storage, allowing users to access their notes even after refreshing the page.

### UI Features

- **Note Cards**: The main page displays a series of note cards, each representing a note created by the user.
- **Delete and Like**: Users can delete notes they no longer need and like notes they find important or noteworthy.
- **Character Count**: Each note card displays the character count to provide users with quick feedback on the length of their notes.
- **Liked and Saved Sections**: The application categorizes notes into different sections, making it easy for users to find liked and saved notes.
- **Search Bar**: A search bar is provided to enable users to quickly find specific notes by searching through their content.
- **Dark/Light Mode**: Implemented using the Context API, users can toggle between dark and light themes for enhanced readability.


### Improvements to Make

- **Tailwind CSS**: Enhance the styling of the application by integrating Tailwind CSS, which offers a utility-first approach to CSS.
- **Redux**: Implement Redux for state management to simplify the handling of application-wide states and actions, improving scalability and maintainability.

### Component Structure
-App
    -Header (The Logo,Title and Mode Button)
    -The Search Bar
    -The NotesList
        -Liked Notes
        -SavedNotes

### Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the application: `npm start`

### Following files were removed after npx create-react-app
1.App.css
2.App.test.js
3.logo.svg
4.reportWebVitals.js
5.setupTest.js






