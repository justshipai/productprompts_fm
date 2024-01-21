{ pkgs }: {
  deps = [
    pkgs.npm install express body-parser openai
    pkgs.npm install express body-parser openai
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}