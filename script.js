const mapAgrument = ["B-INCOMESSF", "BM70SSF", "BEQSSF", "B-FUTURESSF"];
const args = process.argv;
const map = args.find((data) => {
  return mapAgrument.includes(data.toUpperCase());
});

const puppeteer = require("puppeteer");
const cookies = [
  {
    domain: "codequiz.azurewebsites.net",
    expirationDate: 1597288045,
    name: "hasCookie",
    value: "true",
  },
];
const url = "https://codequiz.azurewebsites.net/";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setCookie(...cookies);
  await page.goto(url);

  const data = await page.evaluate(() =>
    Array.from(document.querySelectorAll("table > tbody > tr"), (row) =>
      Array.from(row.querySelectorAll("th, td"), (cell) => cell.innerText)
    )
  );

  await page.screenshot({ path: "example.png" });

  await browser.close();
  const index = mapAgrument.indexOf(map.toUpperCase()) + 1;
  console.log(data[index][1]);
})();
