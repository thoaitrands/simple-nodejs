### So Sánh ClusterIP và NodePort


### So Sánh ClusterIP và NodePort

| Tính Năng                      | ClusterIP                                                                 | NodePort                                                                 |
|--------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Truy cập từ ngoài              | Không thể truy cập từ ngoài cluster                                       | Có thể truy cập từ ngoài cluster                                        |
| Kết nối                        | Chỉ có thể truy cập từ trong cluster                                      | Truy cập thông qua IP của bất kỳ node nào trong cluster và cổng NodePort|
| Cổng sử dụng                   | Tạo một IP nội bộ trong cluster (không có cổng bên ngoài)                 | Mở một cổng trên các node và ánh xạ đến ClusterIP                       |
| Ứng dụng                       | Dịch vụ nội bộ giữa các pod trong cluster                                 | Dịch vụ có thể truy cập từ bên ngoài cluster (thường dùng trong phát triển, thử nghiệm hoặc expose dịch vụ cho người dùng bên ngoài) |

### Khi nào sử dụng ClusterIP và NodePort ?
- ClusterIP: 
    + Sử dụng khi dịch vụ chỉ cần truy cập từ bên trong cluster.
    + Thích hợp cho các dịch vụ nội bộ giữa các pod.
- NodePort:
    + Sử dụng khi cần truy cập dịch vụ từ bên ngoài cluster.
    + Thích hợp cho phát triển, thử nghiệm hoặc expose dịch vụ cho người dùng bên ngoài.
