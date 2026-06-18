let
  nixpkgs = fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/archive/nixos-25.11.tar.gz";
    sha256 = "sha256:1lmn8dicfwmsfdaiw18xjjys78bal6yjy3a41j02my7kw0wlb76a";
  };

  pkgs = import nixpkgs {};
in

pkgs.mkShellNoCC {
  packages = with pkgs; [
    nodejs
    pnpm
  ];

GREETING = "Entered Nix shell!";

shellHook = ''
  echo $GREETING
'';
}


