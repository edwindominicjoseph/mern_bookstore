output "instance_public_ip" {
  description = "Public IP of the MERN backend instance"
  value       = aws_instance.mern_backend.public_ip
}
