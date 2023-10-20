#! /bin/sh
argocd app create enmeshed-dev --dest-server https://kubernetes.default.svc --dest-namespace enmeshed --file enmeshed.dev.yml
