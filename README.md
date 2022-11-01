# ADD SSR
ng add @nguniversal/express-engine
npm run build:ssr
npm run dev:ssr

# ADD PWA
ng add @angular/pwa
ng build
http-server -p 8080 -c-1 dist/TAP/browser
