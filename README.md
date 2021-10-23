# gulpfile-yoshimoto

## 環境
- Gulpが使える環境が前提（4系）

## 使い方
- HTML構築するフォルダの1階層目にこのフォルダを入れる
- ターミナルで npm i をコマンドを叩く
- node_modulesが作成される
- gulp とコマンドを叩けばタスクランナー起動
- あとは、そのまま使える

mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo ' export PATH=~/.npm-global/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile
