# Chapter 01: Alerts - JavaScript Practice Questions

## Project Overview

This directory contains **Chapter 01** of a JavaScript learning/tutorial project focused on mastering the `alert()` function. The chapter is part of a larger collection organized by topics (chapters) covering fundamental JavaScript concepts.

The purpose of this chapter is to practice displaying messages to users using JavaScript's built-in `alert()` dialog, including:
- Simple alert messages
- Alert messages with special characters (newline `\n`)
- Multiple sequential alerts
- Console-based JavaScript execution awareness

## Directory Structure

```
chapter-01-alerts/
├── README.md         # This file
├── question-01/
│   ├── index.html    # Basic HTML template with script inclusion
│   └── app.js        # Alert implementation for Question 1
├── question-02/
│   ├── index.html
│   └── app.js
├── question-03/
│   ├── index.html
│   └── app.js
├── question-04/
│   ├── index.html
│   └── app.js
└── question-05/
    ├── index.html
    └── app.js
```

## Questions Summary

| Question | Description |
|----------|-------------|
| **01** | Display a welcome message: `"Welcome to Our Website!"` |
| **02** | Display an error message: `"Error! Please enter a valid password."` |
| **03** | Display multi-line message using `\n`: `"Welcome to JS Land...\nHappy Coding!"` |
| **04** | Display two separate alerts in sequence |
| **05** | Display a message about running JS through browser console |

## Running the Examples

Each question is a standalone HTML/JavaScript example. To run any question:

1. **Open in Browser**: Navigate to the question folder and open `index.html` in a web browser
   ```
   question-01/index.html
   ```

2. **Using a Local Server** (recommended for development):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (npx)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
   Then navigate to `http://localhost:8000/question-01/` (replace with desired question number)

## Development Conventions

- **File Naming**: Each question uses consistent naming (`index.html`, `app.js`)
- **HTML Structure**: Minimal HTML boilerplate with script included at the end of `<body>`
- **JavaScript**: Pure vanilla JavaScript, no frameworks or build tools required
- **No Dependencies**: All examples run directly in the browser without npm packages

## Broader Project Context

This chapter is part of a comprehensive JavaScript course covering:

- **Chapter 01**: Alerts (this directory)
- **Chapter 02**: Variables for Strings
- **Chapter 03**: Variables for Numbers
- **Chapter 04**: Variable Names (Legal/Illegal)
- **Chapter 05**: Math Expressions
- **Chapter 06-09**: Advanced Math Expressions
- **Chapter 21-25**: String Methods
- **Chapter 26-35**: Math Methods
- **Chapter 35-38**: Functions
- **Chapter 43-48**: Events
- **Objects**: Object-oriented JavaScript

## Usage Guidelines

- Each question folder is self-contained and can be opened independently
- The `alert()` function blocks execution until the user clicks "OK"
- For Question 03, the `\n` creates a line break within the alert dialog
- Question 05 demonstrates awareness of the browser console (`F12` → Console tab)
