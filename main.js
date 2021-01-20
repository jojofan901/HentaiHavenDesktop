const electron = require('electron');

const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function (){
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        titleBarStyle: 'hidden',
        icon: 'logo.png',
        show: false
    });

    mainWindow.loadURL('https://hentaihaven.com');


    setTimeout(() => {
        mainWindow.show();
    }, 1000);

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
];