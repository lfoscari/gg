with import <nixpkgs> {};

pkgs.mkShell {
    buildInputs = with pkgs; [
        nodePackages.npm
        nodejs
        git
    ];
    shellHook = ''
        echo "Run 'npm install' and 'npm run serve' to serve the website"
      '';
}
