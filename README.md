{
  "status": "ready",
  "required_files": {
    "index.html": true,
    "style.css": true,
    "script.js": true,
    "package.json": true,
    "Procfile": true,
    "README.md": true
  },
  "package_json": {
    "scripts": {
      "start": "serve -s . -l ${PORT:-3000}"
    },
    "dependencies": {
      "serve": "^14.2.4"
    }
  },
  "procfile": "web: npm start"
}