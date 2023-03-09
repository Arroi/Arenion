const webhookMessage = {
  embeds: [
    {
      title: "Oh! Someone sent something.",
      description: "",
      color: 0xff0000,
      fields: [
        {
          name: "I did! now let's see what did i type:",
          value: "",
          inline: true,
        },
      ],
    },
  ],
};

const form = document.getElementById("webhook-form"); // The form ID
const sendWebhook = document.getElementById("sendWebhook"); // Input ID
const webhookInput = document.getElementById("webhookInput"); // Webhook URL input ID

webhookInput.addEventListener("input", (event) => {
  webhookUrl = event.target.value; // Update the webhook URL
});

sendWebhook.addEventListener("input", (event) => { 
  webhookMessage.embeds[0].fields[0].value = event.target.value; 
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
