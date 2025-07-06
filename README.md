# servidor_base
Código para ser usado como base e adaptar conforme necessidade
Para baixar basta clicar no botão azul '<> Code' e selecionar a opção
Se tiver o git, git clone 'url...'
Caso não tenha, baixar com .zip



# MySQL2
https://sidorares.github.io/node-mysql2/pt-BR/docs

# Express
https://expressjs.com/pt-br/5x/api.html

# Código Python para testar rota

import requests

#URL da página
url_base = 'http://localhost:3000&#39;

##Input para ser pesquisado
#produto_nome = input('Informe o nome da pessoa: ')
produto_nome = input('Informe o id da pessoa: ')
#produto_email = input('Informe o email da pessoa: ')

##Requisição com método GETresponse = requests.get(url_base + '/usuarios/'+produto_nome)

##Requisição com método POST

#response = requests.post(url_base + '/usuarios', json={'nome': produto_nome, 'email': produto_email})


print(response.text)