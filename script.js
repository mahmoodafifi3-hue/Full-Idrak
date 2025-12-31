function getResult() {

  const selected = document.querySelectorAll('input[type="checkbox"]:checked');
  const resultDiv = document.getElementById("result");

  if (selected.length === 0) {
    alert("Please select at least one option.");
    return;
  }

  let score = {
    nad: 0,
    magnesium: 0,
    joint: 0,
    gut: 0,
    collagen: 0,
    libido: 0,
    stress: 0
  };

  selected.forEach(item => {
    switch (item.value) {
      case "energy":
      case "focus":
      case "wellness":
        score.nad += 2;
        break;
      case "sleep":
        score.magnesium += 3;
        break;
      case "joints":
        score.joint += 3;
        break;
      case "gut":
        score.gut += 3;
        break;
      case "beauty":
        score.collagen += 3;
        break;
      case "libido":
        score.libido += 3;
        break;
      case "stress":
        score.stress += 3;
        break;
    }
  });

  const bestProduct = Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );

  const products = {
    nad: {
      name: "NAD+ Supplement",
      image: "images/nad.png",
      reason: "Supports cellular energy, focus, and overall daily wellness."
    },
    magnesium: {
      name: "Magnesium Glycinate",
      image: "images/magnesium.png",
      reason: "Promotes relaxation, better sleep, and muscle recovery."
    },
    joint: {
      name: "Joint Support Formula",
      image: "images/joint.png",
      reason: "Helps improve joint comfort, mobility, and flexibility."
    },
    gut: {
      name: "Gut Health Capsules",
      image: "images/gut.png",
      reason: "Supports digestion and a balanced gut microbiome."
    },
    collagen: {
      name: "Beauty + Collagen Strips",
      image: "images/collagen.png",
      reason: "Supports healthy skin, hair, and nails."
    },
    libido: {
      name: "Libido Support Strips",
      image: "images/libido.png",
      reason: "Supports vitality, stamina, and sexual wellness."
    },
    stress: {
      name: "Ashwagandha Complex",
      image: "images/ashwagandha.png",
      reason: "Helps manage stress and supports hormone balance."
    }
  };

  const p = products[bestProduct];

  resultDiv.innerHTML = `
    <h2>Your Recommended Supplement</h2>
    <img src="${p.image}" class="product-img" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.reason}</p>
    <p class="disclaimer">
      This recommendation is for informational purposes only and does not replace medical advice.
      Consult a healthcare professional before use.
    </p>
  `;
}
