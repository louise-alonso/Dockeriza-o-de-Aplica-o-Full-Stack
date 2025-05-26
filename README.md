# 🗒️ Projeto Todo List com Docker

Este é um projeto de Todo List que utiliza uma arquitetura de microserviços com Docker, contendo frontend, backend e banco de dados PostgreSQL.

---

## 🚀 Tecnologias Utilizadas

- 🖥️ **Frontend:** HTML, CSS, JavaScript
- ⚙️ **Backend:** Node.js + Express
- 🗄️ **Banco de Dados:** PostgreSQL 15
- 🐳 **Containerização:** Docker e Docker Compose

---

## 🗂️ Estrutura do Projeto

```

projeto-todolist/
├── backend/                # Backend Node.js + Express
│   ├── Dockerfile          # Dockerfile do backend
│   ├── package.json        # Dependências do backend
│   └── server.js           # Código do servidor
├── frontend/               # Frontend HTML, CSS, JS
│   ├── Dockerfile          # Dockerfile do frontend
│   ├── nginx.conf          # Configuração do Nginx
│   ├── index.html          # Página principal
│   ├── styles.css          # Estilo
│   └── script.js           # Lógica do frontend
├── docker-compose.yml      # Orquestração dos containers
└── README.md               # Documentação
```
---

## 🏗️ Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Guia de Execução do Projeto Todo List

## 📥 Clone o repositório

```bash
git clone https://github.com/seu-usuario/projeto-todolist.git
````

## 📂 Acesse a pasta do projeto

```bash
cd .\Dockeriza-o-de-Aplica-o-Full-Stack\
```

## 🐳 Verifique se o Docker está funcionando

* Verifique se o **Docker Desktop** está instalado na sua máquina.
* Abra o **Docker Desktop**.
* Aguarde até que o ícone do Docker na bandeja do sistema mostre que está **rodando** (ícone estático, não animado).

## 🔧 Construa e suba os containers

```bash
docker-compose up --build
```

> ⚠️ **Atenção:**
> Se a porta `8080` estiver em uso na sua máquina, você pode alterá-la no arquivo `docker-compose.yml`.
> Edite a seção do serviço `frontend` de:

```yaml
ports:
  - "8080:80"
```

> Para, por exemplo:

```yaml
ports:
  - "8081:80"
```

> Assim, o frontend ficará disponível em `http://localhost:8081`.

## 🔗 Acesse os serviços

* 🌐 **Frontend:** [http://localhost:8080](http://localhost:8080) *(ou a porta configurada)*
* 🔗 **API Backend:** [http://localhost:3000/api/tasks](http://localhost:3000/api/tasks)
* 🗄️ **Banco de Dados PostgreSQL:**

## ⛔ Para parar os containers

```bash
docker-compose down
```

## 🏗️ Funcionamento Esperado

* **Frontend:** Interface web funcional em [http://localhost:8080](http://localhost:8080) com adição, remoção e marcação de tarefas.
* **Backend:** API REST respondendo em [http://localhost:3000/api/tasks](http://localhost:3000/api/tasks) com dados em formato JSON.
* **Banco:** PostgreSQL armazenando tarefas persistentemente.

---

## 🐳 Verificando se está rodando no Docker

Execute:

```bash
docker ps
```

Você deve ver três containers ativos: **frontend (Nginx)**, **backend (Node.js)** e o **banco (PostgreSQL)**.

| CONTAINER ID | IMAGE                        | COMMAND                    | CREATED         | STATUS            | PORTS                     | NAMES                             |
| ------------- | ---------------------------- | -------------------------- | --------------- | ----------------- | ------------------------- | ---------------------------------- |
| 6b5a8b485d44  | projeto_docker_20251-frontend | "/docker-entrypoint.…"     | 16 minutes ago  | Up 16 minutes (**unhealthy**) | 0.0.0.0:8080->80/tcp      | projeto_docker_20251-frontend-1   |
| ead8c410b674  | projeto_docker_20251-backend  | "docker-entrypoint.s…"     | 16 minutes ago  | Up 16 minutes (**unhealthy**) | 0.0.0.0:3000->3000/tcp    | projeto_docker_20251-backend-1    |
| 63c5b0fd8d9d  | postgres:15                  | "docker-entrypoint.s…"     | 16 minutes ago  | Up 16 minutes (**healthy**)   | 0.0.0.0:5432->5432/tcp    | projeto_docker_20251-db-1         |


