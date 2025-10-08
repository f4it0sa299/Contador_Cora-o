const binUrl = "https://api.jsonbin.io/v3/b/68e5fbb9ae596e708f0a1617"; // coloque o link do seu bin JSONBin
const accessKey = "68e5fbb9ae596e708f0a1617"; // sua chave API do JSONBin

const heart = document.getElementById("heart");
const count = document.getElementById("count");

async function getHearts() {
  const res = await fetch(binUrl, {
    headers: { "X-Master-Key": accessKey }
  });
  const data = await res.json();
  count.textContent = data.record.hearts;
}

async function addHeart() {
  const newCount = parseInt(count.textContent) + 1;
  count.textContent = newCount;
  await fetch(binUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": accessKey
    },
    body: JSON.stringify({ hearts: newCount })
  });
}

heart.addEventListener("click", addHeart);
getHearts();
