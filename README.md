# Albums

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## About
The project contains a table of albums fetched from an external API ([JSONPlaceholder](https://jsonplaceholder.typicode.com/)).

This app uses:
* NgRx for reactive state
* Material design components for better UX


file structure and app architecture:
```bash
├── app
│   ├── albums
│   │   ├── albums.component.html
│   │   ├── albums.component.scss
│   │   ├── albums.component.ts
│   │   ├── albums.module.ts
│   │   ├── albums.service.ts
│   │   ├── confirmation-dialog
│   │   │   ├── confirmation-dialog.component.html
│   │   │   └── confirmation-dialog.component.ts
│   │   ├── form-dialog
│   │   │   ├── form-dialog.component.html
│   │   │   ├── form-dialog.component.scss
│   │   │   └── form-dialog.component.ts
│   │   ├── interfaces
│   │   │   └── album.interface.ts
│   │   └── store
│   │       ├── actions
│   │       │   ├── albums.actions.ts
│   │       │   └── index.ts
│   │       ├── effects
│   │       │   └── albums.effects.ts
│   │       └── reducers
│   │           ├── albums.reducer.ts
│   │           └── index.ts
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── shared
│   │   ├── header
│   │   │   ├── header.component.html
│   │   │   └── header.component.ts
│   │   ├── material
│   │   │   └── material.module.ts
│   │   ├── sidebar
│   │   │   ├── sidebar.component.html
│   │   │   ├── sidebar.component.scss
│   │   │   └── sidebar.component.ts
│   │   └── validators
│   │       └── noWhiteSpace.validator.ts
│   └── store
│       ├── actions
│       │   ├── index.ts
│       │   └── sidebar.actions.ts
│       ├── index.ts
│       └── reducers
│           ├── index.ts
│           └── sidebar.reducer.ts
├── assets
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
└── test.ts
```

## Before start
#### 1. Please check if your environment configuration file has a valid API URL.
##### `default value: https://jsonplaceholder.typicode.com/`
#### 2. Install dependencies:
##### `yarn install`

## Working demo
[DEMO](https://piechaczek.dev/albums)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


