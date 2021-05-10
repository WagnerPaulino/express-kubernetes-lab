## How to execute

* Starting commands
```bash
$ eval $(minikube docker-env)
$ docker build -t express-kubernetes-lab .
$ docker run -p 3000:3000 --network host --name express-kubernetes-lab express-kubernetes-lab
$ kubectl apply -f deployment.yml && kubectl apply -f service.yml
$ minikube service express-kubernetes-lab-service
```

* In other terminal
```bash
$ minikube tunnel
```

* Removing commands

```bash
$ kubectl delete deploy express-kubernetes-lab-deployment && kubectl delete service express-kubernetes-lab-service
```