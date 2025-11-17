document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    } else {
      alert("Failed to send message. Try again.");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred.");
  }
});

