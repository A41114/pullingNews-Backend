const { performance } = require('perf_hooks');
global.performance = performance;

const { exec } = require('child_process');

exec('npx playwright install chromium', (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Lỗi khi cài trình duyệt: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Cảnh báo: ${stderr}`);
    return;
  }
  console.log(`✅ Thành công:\n${stdout}`);
});
