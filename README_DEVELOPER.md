# Running Locally
**If this is your first time running this project skip down to the `First Time Setup` steps**

From a terminal navigate to the project directory
```
cd c:\\WhereIClonedTheRepo\builder\
```
> If you've opened the project with VS Code you can use `ctrl` + ` to open the terminal to the project directory

Then run:
```
npm start
```
This will server all the files in the repo as static files. You can view the main application page at [http://localhost:3000/builder/index.html](http://localhost:3000/builder/index.html)

> Use `ctrl` + `c` to stop the application

## First Time Setup
1. Download and install [Node JS](https://nodejs.org/en/)
    > Downloaded and installed v14.15.1-x64 with default settings at time of writing this

2. Download and install [VS Code](https://code.visualstudio.com/) for better code editing

3. Download and install [GitHub Desktop](https://desktop.github.com/)

4. Clone the repository to your local computer.
    1. Open [ ](https://github.com/Bumby-Wool/builder)
    2. Click on the `Code` dropdown
    3. Click `Open with GitHub Desktop` or another clone option

    > It's a good idea to restart your computer at this point

5. From GitHub Desktop use the `Repository -> Open in VS Code` option to open the project.

6. In the VS Code window that just appeared use `ctrl` + ` (backtick character) to open the terminal to the project directory
    > You may need to switch your default terminal from `powershell` to `command prompt`

7. In the terminal run `npm install`

Once the npm install completes you are ready to start the project by running `npm start` then you can open [http://localhost:3000/builder/index.html](http://localhost:3000/builder/index.html) in a browser