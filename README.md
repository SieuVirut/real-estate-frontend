
#
```
node: v10
next: 7

```




Install/ update node v10: 

```
sudo apt-get purge --auto-remove nodejs
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```



Run dev: 

```
npm install 
npm run dev 
```



or

```
node server.js 
```





Run in server: 

using  pm2

```
npm install -g pm2
npm run build
pm2 start server.js 
```

update code: 

```
git pull
npm run build
pm2 restart all

```

