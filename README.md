# Demo Page

http://fojacerorockcomar820.ipage.com/Nuvolar

# Nuvolar web app 

## Documentation on how the application works

The Nuvolar app is a web app where you can search a Github's user typing a username and you will see some information about it.

The home page is a search bar where you can type in a Github user. You will see the matches as you type and then you can 
click on one of them to see more information. You will navigate to a new page that displays user's details like user's avatar, name, repositories, followers, etc.
At this point you can navigate back to the search page when you want.

eg. If you type in "inavarro", you will see my profile.

## Internal behavior

When you are typing on the search bar the app consumes the Github API to get the list of users. The same happens to get the repositories, followers and followings information. 

## App Criteria

	.There must be a search bar to let the user search by username (login name)
	After the search is completed, the application displays the list of users along with their avatar and their username on the same page. To simplify the exercise, in case there are too many results you can limit them at a certain maximum.
	When a list item is clicked, the application navigates to a new page that displays a simple list with all the user details.
	The new page will also display the list of the user's repositories and followers.
	The application has to be responsive and optimized for mobile
	Documentation on how the application works and how to set up and build the project must be provided
	Make sure that the application is production ready.

## Build & development
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Files

You can find a repo of this project here: https://github.com/inavarrojoaquin/nuvolarweb

## Prerequisites

You need to have the following skills and resources available:

	.A terminal and basic knowledge of the command line
    .Node 8.9 or higher, together with NPM 5.5.1 or higher.
	.Fundamental JS, CSS and HTML knowledge

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy Single Page Application help

	.https://blog.angularindepth.com/deploy-an-angular-application-to-iis-60a0897742e7