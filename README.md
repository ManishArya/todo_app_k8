# TODO APP
  
<!-- ABOUT THE PROJECT -->
## About The Project
It is a basic todo application. 

### Technology Used

* Node JS
* Mongo DB


<!-- URLS -->
## URLS

### Code repository URL
[https://github.com/manishsohna/nagp_todo_app_k8](https://github.com/manishsohna/nagp_todo_app_k8)

### Docker HUB URL
[https://hub.docker.com/repository/docker/dockersohna/todo-app/general](https://hub.docker.com/repository/docker/dockersohna/todo-app/general)

### API Service URL
[Service URL](http://20.253.46.187)

## Deployment

### Folder Structure

  - `K8s/` - All kubernetes files under this folder
  - `app.js` - source code
  - `Dockerfile` - Docker file

### Kubernetes Cluster Information
Created Kubernetes cluster using Azure Kubernetes Service (AKS) with free trial version.

<!-- insert data -->
### Create record in database

```Method: Http Post```
 
 payload example:
 ``` JSON
  {
    "title": "title text here",
    "description":  "description text here"
  }
```

### Rolling Update

using the below kubectl command for the rolling update

``` sh
kubectl set image deployment/todo-app-deployment todo-app=dockersohna/todo-app:v1.1
```

### load test script

using the below script to increse the load in a particular pod

``` javascript
function load() {
let res = 0;
for (let i =0 i <1000000; i++) {
res += Math.sqrt(i)*Math.sqrt(i)
}
}

for (let i =0; i <1000; i++) {
load()
}
```
