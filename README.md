# gulpfile-yoshimoto

## 環境
- Gulpが使える環境が前提（4系）

## 使い方
- HTML構築するフォルダの1階層目にこのフォルダを入れる
- ターミナルで npm i をコマンドを叩く
- node_modulesが作成される
- gulp とコマンドを叩けばタスクランナー起動
- あとは、そのまま使える

# 導入時のコマンド（追記）
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo ' export PATH=~/.npm-global/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile
npm i -g gulp
gulp

# VScode起動時のコマンド（追記）
npx gulp
