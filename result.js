const webhookUrl = "https://discord.com/api/webhooks/1083159500757934170/iyHZENucHcCyJ5UsGcTvRUifAByzoVz_90_PGaDbfVUQtRUTtHiIJ3f-7Dgc1GOze6OP";
const webhookMessage = {
  embeds: [
    {
      title: "Input has been sent.",
      description: "",
      color: 0xff0000,
      fields: [
        {
          name: "Message content:",
          value: "",
          inline: true,
        },
      ],
    },
  ],
};


/* 
# In-order to change your input, change the form variable to something else
# remember to use elements by their ID. 
# you can change the rest after i release my documents on how to change 
# arenion's settings and play with them
*/

const form = document.getElementById("domain-form"); // The form ID
const sendWebhook = document.getElementById("sendWebhook"); // Input ID
sendWebhook.addEventListener("input", (event) => { 
  webhookMessage.embeds[0].fields[0].value = event.target.value; 
  // Sends the embed message in the fields which targets what value the input 
  // has submitted.
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Send the webhook message
  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(webhookMessage),
  })
    .then((response) => {
      if (response.ok) {
        alert("Respond has been sent successfully!");
      } else {
        alert("Operation failed...");
      }
    })
    .catch((error) => {
      console.error("Error sending webhook message:", error);
      alert("Operation failed...");
    });
});
