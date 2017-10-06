export default ({ body, title, assetUrl }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
          <link rel="stylesheet" href="/public/assets/styles.css">
      </head>
      
      <body>
        <div id="root">${body}</div>
        <script type="application/javascript" src="/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
};