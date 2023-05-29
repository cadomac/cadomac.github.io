import Head from 'next/head'
import Image from 'next/image'
import HomeSection from '../components/HomeSection';
import Preview from '../components/Preview';

import { useRef } from 'react';

export default function Home() {

  const previewParentRef = useRef(null);
  const previewRefs = useRef<any[]>([]);

  return (
    // <div className="main-content grid md:grid-cols-3 sm:grid-cols-1 md:grid-rows-1 sm:grid-rows-3 gap-y-10">
    <div ref={previewParentRef} className="main-content grid">
      <Preview ref={(el) => previewRefs.current[0] = el} previewRefs={previewRefs.current} sectionName="About" link="/about" idx={0} max={3} parent={previewParentRef}>
        <div className="about-flavor">
          <p className="text-2xl">The man, the myth</p>
        </div>
      </Preview>
      <Preview ref={(el) => previewRefs.current[1] = el} previewRefs={previewRefs.current} sectionName="Work" link="/work" idx={1} max={3} parent={previewParentRef}></Preview>
      <Preview ref={(el) => previewRefs.current[2] = el} previewRefs={previewRefs.current} sectionName="Blog" link="/blog" idx={2} max={3} parent={previewParentRef}></Preview>
    </div>
  )
}
