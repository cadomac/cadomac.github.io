import Link from "next/link";
import { forwardRef } from "react";

const Preview = forwardRef(function Preview(props: any, ref) {

  const { sectionName, link, parent, idx, max, previewRefs, children } = props;

  const lowerName = sectionName.toLowerCase();

  function calculateTemplate(): string {
    let beforeZeros = "0fr ".repeat(idx);
    let afterZeros = "0fr ".repeat(max - idx - 1);

    return `${beforeZeros}2.5fr ${afterZeros}`;
  }

  function handleHover() {
    parent.current.style.gridTemplateRows = calculateTemplate();
    previewRefs[idx].classList.add("preview-active");
  }

  function resetGrid() {
    parent.current.style.gridTemplateRows = "1fr ".repeat(max);
    previewRefs[idx].classList.remove("preview-active");
  }


  return (
    <>
      <div ref={ref} className={`Preview ${lowerName}-preview`}>
        <Link
          onTouchStart={() => handleHover()}
          onFocus={() => handleHover()}
          onPointerEnter={() => handleHover()}
          onBlur={() => resetGrid()}
          onPointerLeave={() => resetGrid()}
          href={`${link}`}
          className={`Preview-wrap ${lowerName}-preview-wrap flex flex-col justify-center gap-5`}
        >
          <div className="preview-content-wrapper translate-y-5">
            <h1 className="text-8xl">{sectionName}</h1>
            {children}
          </div>
        </Link>
      </div>
    </>
  )
});

export default Preview;