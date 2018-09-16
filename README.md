# Exercício LinCare - Geolocation
Autor: Pedro Matias

## Introdução
A aplicação consiste em fornecer um determinado cep e, a partir dele, encontrar a localização exata do cep em um mapa. A solução foi desenvolvida utilizando o framework Angular 6. O funcionamento da aplicação consiste em realizar uma requisição *get* (via *http.get*, do Angular) na API do ViaCEP, fornecendo o cep desejado. A *response* é um JSON contendo o endereço, tal como logradouro, bairro, cidade, estado, etc. O JSON obtido através da API ViaCEP é formatado e convertido para uma *string* no exato formato necessário para realizar uma nova requisição *get*, desta vez na API do Google Maps Geocoder, para então obter-se as coordenadas geográficas de latitude e longitude a partir do endereço fornecido. Estas são as coordenadas necessárias para encontrar o local desejado no mapa, que no caso se trata do Google Maps.

#### Exemplo: 
**Cep: 01001-000**

1. Acessando o webservice ViaCEP: 
```viacep.com.br/ws/```**```01001000```**```/json/```

2. ViaCEP response:
```
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "unidade": "",
  "ibge": "3550308",
  "gia": "1004"
}
```
3. Formatando o JSON para realizar a requisação no webservice Google Maps Geocoder:
```
Praça+da+Sé,+Sé,+São+Paulo,+SP,+BR
```  
Requisição completa:  
```
https://maps.googleapis.com/maps/api/geocode/json?address=Praça+da+Sé,+Sé,+São+Paulo,+SP,+BR&key='MINHA_API_KEY'
```

4. Com a *response* do Google Maps, é possível obter a latitude e longitude do ponto desejado, utilizando o *two-way data binding* do Angular para mostrar a localização do ponto no mapa imediatamente:  
Latitude:  
```
-23.5503099
```
Longitude: 
```
-46.6342009
```

## Packages utilizados
1. Bootstrap v4.1 (*Flex/Grid System* e *built-in classes) 
2. Angular 2 Material Design (Design)
3. *angular2-text-mask* (Máscara para o input do CEP)
4. @agm/core (Angular Google Maps)

## Utilização
Para execução do projeto, é necessário ter instalado o ```angular-cli```, além do ```node.js``` e ```npm```. Primeiramente, é necessário baixar ou clonar a pasta *lincare-maps-project* em um diretório local. Navegue até o diretório e instale as dependencias do projeto a partir do comando:
``` 
npm install
```

Após instaladas as dependências, inicie a aplicação com:
```
ng serve
```
Teste a aplicação a partir do link:
```
http://localhost:4200
```
## Estrutura do projeto:
```
├── src
|    ├── app
|    |    ├── modules
|    |    |    ├── lincare-maps
|    |    |    |    ├── components *
|    |    |    |    |   ├── some-specific-component * (sidebar específica, por exemplo)
|    |    |    |    |   |   ├── some-specific-component.components
|    |    |    |    ├── pages
|    |    |    |    |   ├── lm-index
|    |    |    |    |   |   ├── lm-index.components
|    |    |    |    |   ├── lm-favorite-addresses * (pagina para cadastrar endereços favoritos, por exemplo)
|    |    |    |    |   |   ├── lm-favorite-addresses.components *
|    |    |    |    ├── services
|    |    |    |         ├── licare-maps.service
|    |    |    ├── other-module * (outros modulos da aplicação)
|    |    |    |    ├── ...
|    |    ├── shared
|    |    |    ├── components
|    |    |    |    ├── dialogs
|    |    |    |    |   ├── warning-dialog
|    |    |    |    |   |   ├── warning-dialog.components
|    |    |    |    ├── other-shared-components *
|    |    |    ├── services * (services compartilhados)
|    |    |    ├── ...
|    ├── assets
|    |   ├── images
|    |   |    ├── lincare_logo.svg
|    |   |    ├── ...
|    ├── enviroment
|    ├── ...
```
*Obs: Os campos com asterísco não estão presentes no projeto real e foram colocados apenas para exemplificar uma possível expansão do projeto*

## Referências

1. [Angular Material Design Documentation](https://material.angular.io/)
2. [Bootstrap v4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
3. [Angular 2+ Text Mask](https://github.com/text-mask/text-mask/tree/master/angular2)
4. [Angular 2+ Google Maps - AGM](https://angular-maps.com/)
5. [ViaCEP API](https://viacep.com.br/)
6. [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro)
