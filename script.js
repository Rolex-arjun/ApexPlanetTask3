function checkAnswer(ans) {
  const correct = "22";
  const result = document.getElementById("result");

  if (ans === correct) {
    result.style.color = "green";
    result.innerText = "✅ Correct! '2' is a string, so 2 + '2' = '22'";
  } else {
    result.style.color = "red";
    result.innerText = "❌ Incorrect! Try again.";
  }
}

async function getJoke() {
  const jokeElem = document.getElementById("joke");
  jokeElem.innerText = "⏳ Fetching a joke...";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeElem.innerText = `😂 ${data.setup} — ${data.punchline}`;
  } catch (error) {
    jokeElem.innerText = "❌ Failed to fetch joke. Please try again.";
  }
}

