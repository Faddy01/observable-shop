# 🚀 ObservableShop - Microservices Observability Platform

> **A production-grade microservices project with telemetry, monitoring, and distributed tracing**
> 
> This is a **learning portfolio project** demonstrating professional DevOps, microservices architecture, and observability best practices.

---

## 📊 Project Overview

**ObservableShop** is a realistic e-commerce microservices system designed to teach:
- ✅ Microservices architecture patterns
- ✅ Container orchestration (Docker & Kubernetes)
- ✅ Observability at scale (metrics, logs, traces)
- ✅ CI/CD automation
- ✅ Infrastructure as Code (Helm, Terraform)

**Target**: Build a **resume-worthy portfolio project** that demonstrates enterprise-level DevOps practices.

---

## 🏗️ Architecture

┌─────────────────────────────────────────────────────────────┐
│ Client Layer │
└──────────────────────────┬──────────────────────────────────┘
│
┌──────────────────────────▼──────────────────────────────────┐
│ Ingress + API Gateway (Nginx) │
└──────────────────────────┬──────────────────────────────────┘
│
┌──────────────────┼──────────────────┐
│ │ │
┌────▼────┐ ┌─────▼─────┐ ┌──────▼───────┐
│ Product │ │ Order │ │ Payment │
│ Service │ │ Service │ │ Service │
└────┬────┘ └─────┬─────┘ └──────┬───────┘
│ │ │
└─────────────────┼──────────────────┘
│
┌────────────────────┼────────────────────┐
│ │ │
┌────▼──────┐ ┌───────▼──────┐ ┌────────▼────┐
│ PostgreSQL│ │ RabbitMQ │ │ Redis │
│ Database │ │ Queue │ │ Cache │
└───────────┘ └──────────────┘ └─────────────┘

┌──────────────────────────────────────────────────────────────┐
│ Observability Stack │
├──────────────────────────────────────────────────────────────┤
│ Prometheus │ Grafana │ Elasticsearch │ Kibana │ Jaeger │
└──────────────────────────────────────────────────────────────┘


---

## 📚 Learning Path (6 Weeks)

### **Phase 1: Foundation (Week 1)**
**Goal**: Understand microservices basics

- [ ] Day 1: Project setup & structure review
- [ ] Day 2: Docker fundamentals refresh
- [ ] Day 3: Create first microservice (Product Service)
- [ ] Day 4: Build Docker image & run locally
- [ ] Day 5: Set up PostgreSQL & basic CRUD
- [ ] Day 6: Add logging & error handling
- [ ] Day 7: Push to GitHub & document progress

**Deliverable**: Working Product Service in Docker

---

### **Phase 2: Microservices Communication (Week 2)**
**Goal**: Build multiple services that talk to each other

- [ ] Day 1: Create Order Service
- [ ] Day 2: Create Payment Service
- [ ] Day 3: Implement REST API calls between services
- [ ] Day 4: Add error handling & retries
- [ ] Day 5: Implement message queue (RabbitMQ)
- [ ] Day 6: Create docker-compose.yml for local dev
- [ ] Day 7: Test full flow: Product → Order → Payment

**Deliverable**: 3 services + docker-compose running locally

---

### **Phase 3: Kubernetes Deployment (Week 3)**
**Goal**: Deploy to Kubernetes (Minikube locally)

- [ ] Day 1: Review Kubernetes basics
- [ ] Day 2: Create Namespace & ConfigMaps
- [ ] Day 3: Write Deployment manifests for each service
- [ ] Day 4: Create Service & Ingress
- [ ] Day 5: Deploy to Minikube
- [ ] Day 6: Test service communication in K8s
- [ ] Day 7: Document K8s troubleshooting

**Deliverable**: All services running in Minikube

---

### **Phase 4: Observability - Metrics (Week 4)**
**Goal**: Add Prometheus metrics & Grafana dashboards

- [ ] Day 1: Understand Prometheus scraping
- [ ] Day 2: Add Prometheus client library to services
- [ ] Day 3: Create custom metrics (requests, latency, errors)
- [ ] Day 4: Set up Prometheus in K8s
- [ ] Day 5: Create Grafana datasource
- [ ] Day 6: Build dashboards (services overview, performance)
- [ ] Day 7: Set up alerting rules

**Deliverable**: Real-time dashboards showing service health

---

### **Phase 5: Observability - Logs & Traces (Week 5)**
**Goal**: Centralized logging (ELK) + distributed tracing (Jaeger)

- [ ] Day 1: Set up Elasticsearch
- [ ] Day 2: Configure Logstash pipeline
- [ ] Day 3: Add structured logging to services
- [ ] Day 4: Create Kibana dashboards
- [ ] Day 5: Integrate Jaeger for tracing
- [ ] Day 6: Trace requests across services
- [ ] Day 7: Document observability patterns

**Deliverable**: Complete observability stack (metrics + logs + traces)

---

### **Phase 6: CI/CD & Production (Week 6)**
**Goal**: Automate deployment with GitHub Actions

- [ ] Day 1: Understand CI/CD pipeline concepts
- [ ] Day 2: Create build workflow (Docker images)
- [ ] Day 3: Create test workflow (unit + integration)
- [ ] Day 4: Create deployment workflow (to K8s)
- [ ] Day 5: Add security scanning
- [ ] Day 6: Set up rollback strategy
- [ ] Day 7: Deploy to cloud (AWS EKS / GKE)

**Deliverable**: Fully automated CI/CD pipeline

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Microservices** | Node.js + Express | API backends |
| **Database** | PostgreSQL | Persistent data |
| **Message Queue** | RabbitMQ | Async communication |
| **Cache** | Redis | Session/data cache |
| **Containers** | Docker | Packaging |
| **Orchestration** | Kubernetes | Deployment |
| **Metrics** | Prometheus | Time-series metrics |
| **Visualization** | Grafana | Dashboards |
| **Logging** | Elasticsearch | Log storage |
| **Log UI** | Kibana | Log exploration |
| **Tracing** | Jaeger | Distributed tracing |
| **CI/CD** | GitHub Actions | Automation |
| **IaC** | Helm | K8s package management |

---

## 📁 Project Structure

observable-shop/
├── microservices/ # Service code
│ ├── api-gateway/
│ ├── product-service/
│ ├── order-service/
│ └── payment-service/
├── observability/ # Monitoring stack
│ ├── prometheus/
│ ├── grafana/
│ ├── elasticsearch/
│ ├── kibana/
│ └── jaeger/
├── kubernetes/ # K8s manifests
├── helm/ # Helm charts
├── .github/workflows/ # CI/CD pipelines
├── database/ # Schema & migrations
├── tests/ # Test suites
├── docs/ # Documentation
├── scripts/ # Utility scripts
└── docker-compose.yml # Local dev setup


---

## 🚀 Getting Started

### **Quick Start (Local)**

```bash
# 1. Clone the repo
git clone https://github.com/Faddy01/observable-shop.git
cd observable-shop

# 2. Start services locally
docker-compose up -d

# 3. Check services are running
docker-compose ps

# 4. Test API
curl http://localhost:3000/api/health

# 5. View logs
docker-compose logs -f api-gateway
```

### **Kubernetes Deployment**

```bash
# 1. Start Minikube
minikube start

# 2. Apply Kubernetes manifests
kubectl apply -f kubernetes/namespaces/
kubectl apply -f kubernetes/deployments/
kubectl apply -f kubernetes/services/

# 3. Check status
kubectl get pods -n observableshop

# 4. Access via port-forward
kubectl port-forward svc/api-gateway 3000:3000 -n observableshop
```

### **View Observability Stack**

```bash
# Grafana (dashboards)
kubectl port-forward svc/grafana 3000:3000 -n observableshop
# http://localhost:3000

# Kibana (logs)
kubectl port-forward svc/kibana 5601:5601 -n observableshop
# http://localhost:5601

# Jaeger (traces)
kubectl port-forward svc/jaeger 16686:16686 -n observableshop
# http://localhost:16686
```

---

## 🎯 Success Criteria

By the end of this project, you will have:

✅ **Microservices Skills**
- Built 4 production-quality microservices
- Implemented service-to-service communication
- Handled distributed transactions (Saga pattern)
- Implemented circuit breaker pattern

✅ **Containerization**
- Created optimized Dockerfiles
- Implemented health checks
- Used docker-compose for local dev
- Pushed images to registry

✅ **Kubernetes**
- Created K8s manifests (YAML)
- Deployed to Minikube & cloud
- Configured ingress & networking
- Implemented RBAC & security policies

✅ **Observability**
- Collected metrics with Prometheus
- Created dashboards in Grafana
- Set up centralized logging (ELK)
- Implemented distributed tracing (Jaeger)

✅ **CI/CD**
- Built GitHub Actions workflows
- Automated testing & building
- Automated deployment to K8s
- Implemented rollback strategy

---

## 📝 Commit Strategy

Make meaningful commits showing your learning journey:

```bash
git commit -m "Product Service: Add PostgreSQL integration with CRUD endpoints"
git commit -m "Add Prometheus metrics collection to all services"
git commit -m "Kubernetes: Deploy observability stack with Prometheus + Grafana"
```

---

## 📚 Learning Resources

- [Microservices Patterns](https://microservices.io/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Prometheus Docs](https://prometheus.io/docs/)
- [Grafana Dashboard Guide](https://grafana.com/grafana/dashboards/)
- [Jaeger Getting Started](https://www.jaegertracing.io/docs/latest/)

---

## 📄 License

MIT License

---

**Happy Learning! 🚀**

Last Updated: September 14, 2026
