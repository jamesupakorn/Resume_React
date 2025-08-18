const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

(async () => {
  // สร้าง absolute path ไปยังไฟล์ HTML
  const filePath = path.resolve(__dirname, 'public', 'Resume Supakorn(EN).html');
  const fileUrl = 'file://' + filePath;

  // ฟังก์ชันหา Chrome/Chromium อัตโนมัติ
  function findChrome() {
    const candidates = [
      // macOS
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
      // Linux
      '/usr/bin/google-chrome',
      '/usr/bin/chromium-browser',
      '/usr/bin/chromium',
      // Windows
      'C:/Program Files/Google/Chrome/Application/chrome.exe',
      'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      'C:/Program Files/Chromium/Application/chromium.exe',
      'C:/Program Files (x86)/Chromium/Application/chromium.exe',
    ];
    const fs = require('fs');
    for (const p of candidates) {
      console.log('Checking Chrome path:', p, 'Exists:', fs.existsSync(p));
      if (fs.existsSync(p)) return p;
    }
    throw new Error('Chrome/Chromium not found. Please install Google Chrome or Chromium.');
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: findChrome(),
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // โหลดไฟล์ HTML โดยตรง (UI ตรงเป๊ะ 100%)
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // ตั้งค่าขนาด A4 และ scale 0.7 (70%)
  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true,
    scale: 0.7,
    margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
  });

  await browser.close();
  console.log('Export PDF success: resume.pdf');
})();
