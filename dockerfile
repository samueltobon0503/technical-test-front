FROM node:21-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npx ng build --configuration production

FROM nginx:alpine
# IMPORTANTE: Revisa en tu carpeta 'dist/' el nombre de la carpeta de salida.
# Si tu proyecto se llama 'technical-test-front', la ruta suele ser:
COPY --from=build /app/dist/technical-test-front/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
