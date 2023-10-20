#### Commands

# install ArgoCD in k8s
`kubectl create namespace argocd`

`kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml`

# access ArgoCD UI
`kubectl get svc -n argocd`

`kubectl port-forward svc/argocd-server 8080:443 -n argocd`

Open https://localhost:8080

# login with user `admin` and password below:
Bash: `kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 --decode && echo`

PS: `[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($(kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}")))` 

# Deploy enmeshed

`./deploy_enmeshed.*.sh`

#### Links

* Config repo: [https://gitlab.com/nanuchi/argocd-app-config](https://gitlab.com/nanuchi/argocd-app-config)

* Docker repo: [https://hub.docker.com/repository/docker/nanajanashia/argocd-app](https://hub.docker.com/repository/docker/nanajanashia/argocd-app)

* Install ArgoCD: [https://argo-cd.readthedocs.io/en/stable/getting_started/#1-install-argo-cd](https://argo-cd.readthedocs.io/en/stable/getting_started/#1-install-argo-cd)

* Login to ArgoCD: [https://argo-cd.readthedocs.io/en/stable/getting_started/#4-login-using-the-cli](https://argo-cd.readthedocs.io/en/stable/getting_started/#4-login-using-the-cli)

* ArgoCD Configuration: [https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/)
