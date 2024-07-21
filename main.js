const { app, BrowserWindow,ipcMain } = require('electron');
const path = require('path')
const puppeteer = require('puppeteer')

function createWindow () {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, './src/preload.js'),
      contextIsolation: true,
    }
  })

  // 并且为你的应用加载index.html
  // console.log('__dirname',`file://${__dirname}/build/index.html`)
  // win.loadURL(`file://${__dirname}/build/index.html`);
  win.loadURL(`https://www.baidu.com`);
}

ipcMain.on('open-page', async (event, url) => {
    console.log('URL to open:'); // 输出接收到的 URL
   // 启动 Puppeteer
  const browser = await puppeteer.launch({ headless: false }); // 对于 Electron 应用，可能需要设置 headless:true
  const page = await browser.newPage();
  await page.goto('https://example.com');
  // 这里可以添加更多使用 Puppeteer 进行自动化操作的代码
//   await browser.close();
  });
app.whenReady().then(createWindow)