#! /bin/sh
argocd app create guestbook --dest-server https://kubernetes.default.svc --dest-namespace default --file prometheus.yml
