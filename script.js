(() => {
  const canvas = document.getElementById("gameCanvas");

  if (!(canvas instanceof HTMLCanvasElement)) {
    console.error("Living Aegis Origin canvas element was not found.");
    return;
  }

  const context = canvas.getContext("2d");

  if (!context) {
    console.error("Canvas 2D context could not be created.");
    return;
  }

  function drawBackground(ctx, width, height) {
    ctx.fillStyle = "#060810";
    ctx.fillRect(0, 0, width, height);

    const wash = ctx.createLinearGradient(0, 0, width, height);
    wash.addColorStop(0, "rgba(82, 132, 158, 0.18)");
    wash.addColorStop(0.52, "rgba(18, 22, 31, 0.18)");
    wash.addColorStop(1, "rgba(194, 167, 92, 0.12)");

    ctx.fillStyle = wash;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(190, 218, 230, 0.18)";
    ctx.lineWidth = 2;
    ctx.strokeRect(24, 24, width - 48, height - 48);
  }

  function drawInitialText(ctx, width, height) {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "#eef5ff";
    ctx.font = "700 34px system-ui, sans-serif";
    ctx.fillText("Living Aegis Origin", width / 2, height / 2 - 12);

    ctx.fillStyle = "#c7d0dd";
    ctx.font = "400 18px system-ui, sans-serif";
    ctx.fillText("Canvas 2D ready.", width / 2, height / 2 + 34);
  }

  function initializeCanvas() {
    const { width, height } = canvas;

    context.clearRect(0, 0, width, height);
    drawBackground(context, width, height);
    drawInitialText(context, width, height);

    console.log("Living Aegis Origin initialized.");
    console.log("Canvas 2D context ready.");
  }

  initializeCanvas();
})();
