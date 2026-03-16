with import <nixpkgs> {};

pkgs.mkShell {
    buildInputs = with pkgs; [
        nodePackages.npm
        nodejs
        git
    ];
    shellHook = ''
        echo "Run 'npm install' and 'npm start' to serve the website"
      '';
}
