import { animate, hover } from "motion";

export const animateResumeIcon = (
  lines: NodeListOf<Element>,
  reversed: boolean = false,
) => {
  const linesArr = [...lines];
  const targetOpacity = reversed ? 0 : 1;

  reversed && linesArr.reverse();

  linesArr.forEach((line, index) => {
    const linePath = line.getAttribute("d") || "";

    const m = linePath.slice(0, linePath.indexOf("L"));
    const l = linePath.slice(linePath.indexOf("L"));
    let lineX = "814.921";
    if (reversed) {
      lineX = m.slice(1, 8);
    }

    console.log("lineX", lineX);
    const lineSequence = [
      line,
      {
        d: `${m}L${lineX},${l?.slice(l.indexOf(",") + 1)}`,
        stroke: "#000",
      },
      {
        duration: 0.8,
        ease: "circOut",
        delay: (reversed ? 0.05 : 0.15) * (index + 1),
      },
    ];
    const opacitySequence = [
      line,
      {
        opacity: targetOpacity,
      },
      {
        duration: reversed ? 0.8 : 1,
        ease: "circOut",
        delay: 0.05 * (index + 1),
        at: 0,
      },
    ];
    animate([lineSequence, opacitySequence]);
  });
};
