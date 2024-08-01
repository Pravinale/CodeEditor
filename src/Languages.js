const LANGUAGE_VERSIONS = {
    html: "5.0.0",
    javascript: "18.15.0",
    python: "3.10.0",
    java: "15.0.2",
    php: "8.2.3",
   
}

export default LANGUAGE_VERSIONS


export const CODE_SNIPPETS = {
  html: `\n<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>Hello World</title>\n</head>\n<body>\n\t<div>Hello World!</div>\n</body>\n</html>\n`,
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name);\n}\n\ngreet("This is javascript");\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name)\n\ngreet("This is python")\n`,
  java: `\npublic class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, This is java");\n\t}\n}\n`,
  php: `<?php\n\n$name = 'Hello, This is php';\necho $name;\n`,
};
