import * as React from 'react';
import styles from './Preview.module.css';

interface IPreviewProps {
  code: string;
  bundleErrorMessage: string | null;
}

const html = `
<html>
  <head>
  <style>
    html { background-color: #fff;}
  </style>
  </head>

  <body>
    <div id="root"></div>

    <script>

    const handleError = (err) => {
      const root = document.querySelector('#root');
      root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
      console.error(err);
    };

    window.addEventListener('error', (event) => {
      event.preventDefault();
      handleError(event.error);
    }); 

      window.addEventListener('message', (event) => {
        try {
          eval(event.data);
        } catch(err) {
          handleError(err);
        }
      }, false);
    </script>
  </body>
</html>
`;

const Preview: React.FC<IPreviewProps> = ({ code, bundleErrorMessage }) => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = html;

      setTimeout(() => {
        if (iframeRef.current?.contentWindow) {
          iframeRef.current.contentWindow.postMessage(code, '*');
        }
      }, 50);
    }
  }, [code]);

  return (
    <div className={styles.previewWrapper}>
      <iframe
        ref={iframeRef}
        title="preview"
        srcDoc={html}
        sandbox="allow-scripts"
      />
      {bundleErrorMessage && (
        <div className={styles.previewError}>{bundleErrorMessage}</div>
      )}
    </div>
  );
};

export default Preview;
