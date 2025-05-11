# Argo CD Setup Guide

## 1. Cài đặt Argo CD trên Kubernetes

```sh
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## 2. Truy cập giao diện Argo CD

Expose Argo CD UI (ví dụ dùng port-forward):

```sh
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

Truy cập: [http://localhost:8080](http://localhost:8080)

## 3. Lấy mật khẩu đăng nhập

```sh
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```

- Tài khoản mặc định: `admin`
- Mật khẩu: (kết quả lệnh trên) sivI9kTjj0wSuZcr

## 4. Tham khảo

- [Argo CD Getting Started](https://argo-cd.readthedocs.io/en/stable/getting_started/)
