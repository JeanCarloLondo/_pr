document.addEventListener("DOMContentLoaded", () => {
  const flowers = document.querySelectorAll("svg");

  // Animación de crecimiento inicial para cada flor
  flowers.forEach((flower, index) => {
    // Retrasar el crecimiento para cada flor de manera secuencial
    setTimeout(() => {
      flower.style.transform = "scale(1)";
    }, index * 500); // Cada flor empieza a crecer con 500ms de diferencia
  });

  // Interactividad: agrandar los pétalos al pasar el mouse
  flowers.forEach((flower) => {
    flower.addEventListener("mouseenter", () => {
      flower.querySelectorAll("circle").forEach((petal) => {
        petal.style.transform = "scale(1.2)"; // Agranda ligeramente los pétalos
      });
    });

    // Vuelve al tamaño original al salir del área de la flor
    flower.addEventListener("mouseleave", () => {
      flower.querySelectorAll("circle").forEach((petal) => {
        petal.style.transform = "scale(1)"; // Vuelve al tamaño original
      });
    });

    // Al hacer clic en una flor, el centro cambia de color
    flower.addEventListener("click", () => {
      const center = flower.querySelector("#center1");
      center.style.fill = center.style.fill === "orange" ? "red" : "orange"; // Alterna entre naranja y rojo
    });
  });
});
