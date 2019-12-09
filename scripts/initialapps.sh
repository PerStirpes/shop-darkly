# first install xcode-select --install
#!/usr/bin/env bash

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

homebrew_packages=(
	"coreutils"
	"bash"
	"bash-completion"
	"git"
	"tree"
)

for homebrew_package in "${homebrew_packages[@]}"; do
	brew install "$homebrew_package"
done


echo "Installing Homebrew cask apps"

brew tap caskroom/cask/

homebrew_cask_packages=(
  	"hyper"
	"now"
	"visual-studio-code"
)

for homebrew_cask_package in "${homebrew_cask_packages[@]}"; do
	brew cask install "$homebrew_cask_package"
done