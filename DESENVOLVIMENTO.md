# Documento DESENVOLVIMENTO.md

## Planejamento do Projeto

O projeto foi planejado para desenvolver uma aplicação Todo List com arquitetura full stack dockerizada, contemplando frontend, backend e banco de dados em containers separados, comunicando-se via Docker Compose. O foco foi em criar uma solução simples, funcional e de fácil deploy, priorizando boas práticas de containerização e documentação.

## Quantidade de Sprints Utilizadas

Foram realizadas **2 sprints** durante o desenvolvimento do projeto.

## Duração das Sprints

Cada sprint teve duração de **1 semana**, totalizando 2 semanas para o projeto completo.

## Metodologia Ágil Utilizada

A metodologia adotada foi o **Kanban**, que permitiu um fluxo contínuo de tarefas, flexibilidade na priorização e acompanhamento visual do progresso.

## Ferramentas Utilizadas

- **Visual Studio Code:** Ambiente de desenvolvimento.
- **Docker & Docker Compose:** Para containerização e orquestração dos serviços.
- **Terminal (CLI):** Para execução dos comandos Docker e Git.

## Desafios Enfrentados e Soluções Adotadas

### 1. Comunicação entre containers

- **Desafio:** Garantir que o backend conseguisse se conectar corretamente ao banco de dados PostgreSQL em container separado.
- **Solução:** Configuração de uma rede Docker personalizada no `docker-compose.yml` e uso do hostname do serviço do banco (`db`) nas variáveis de ambiente do backend.

### 2. Configuração do frontend com Nginx

- **Desafio:** Servir os arquivos estáticos do frontend via container Nginx, garantindo que as requisições à API backend funcionassem sem problemas de CORS ou roteamento.
- **Solução:** Configuração correta do proxy reverso e do arquivo `nginx.conf` para rotear as requisições `/api` para o backend.

### 3. Dockerização e orquestração

- **Desafio:** Construir Dockerfiles adequados para backend e frontend, e orquestrar os três containers (frontend, backend e banco) de forma eficiente.
- **Solução:** Criação de Dockerfiles otimizados, definição do arquivo `docker-compose.yml` com volumes, redes personalizadas e dependências corretas entre serviços.

### 4. Documentação clara e uso de boas práticas

- **Desafio:** Manter o projeto bem documentado para facilitar entendimento e reprodução em qualquer ambiente com Docker.
- **Solução:** Criação de README detalhado, com instruções de uso, estrutura do projeto, comandos úteis, além do documento DESENVOLVIMENTO.md para descrever o processo ágil adotado.

---

Este documento reflete as principais decisões e o andamento do projeto Todo List dockerizado, destacando as práticas ágeis e soluções técnicas adotadas para garantir uma aplicação funcional e bem estruturada.
