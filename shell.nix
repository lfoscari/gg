with import <nixpkgs> {};

pkgs.mkShell {
    buildInputs = with pkgs; [
        nodePackages.npm
        nodejs
        git
    ];
}
