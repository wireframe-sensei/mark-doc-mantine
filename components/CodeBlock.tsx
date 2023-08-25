// import Prism from 'prismjs';
import { Prism } from '@mantine/prism';
import * as React from 'react';

export function CodeBlock({children, 'data-language': language}) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    // if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  return (
    <div className="code" aria-live="polite">
      <Prism
        ref={ref}
        language={language}
      >
        {children}
      </Prism>
    </div>
  );
}
