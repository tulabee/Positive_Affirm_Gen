function displayAffirmation(response) {
  new Typewriter("#aff", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "03be6a41bd339e2todfcdef02916a71b";
  let context =
    "You are writing a short positive affirmation. Your mission is to generate a one line positive affirmation and separate each line with a <br />. Make sure to follow the user instructions. Sign the affirmation with 'SheCodes AI' inside a <strong> element at the end of the affirmation and NOT at the beginning.";
  let prompt = `User instructions: Generate a positive affirmation ${instructionInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let affElement = document.querySelector("#aff");
  affElement.classList.remove("aff-hidden");
  affElement.innerHTML = `<div class="generating">⏳ Generating Positive Affirmation ${instructionInput.value}</div>`;

  axios.get(apiURL).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector("#affirmation-gen-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);
