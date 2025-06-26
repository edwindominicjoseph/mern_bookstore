provider "aws" {
  region = "us-east-1"  # AWS region
}

resource "aws_key_pair" "deployer" {
  key_name   = "terraform-key"
  public_key = file("C:/Users/edwin/.ssh/id_rsa.pub")  # Path to your public key
}

resource "aws_security_group" "backend_sg" {
  name        = "backend-security-group"
  description = "Allow inbound access on port 22 (SSH) and 3000 (Node.js)"
  
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "mern_backend" {
  ami           = "ami-020cba7c55df1f615" # Ubuntu 22.04 LTS in us-east-1
  instance_type = "t2.micro"
  key_name      = aws_key_pair.deployer.key_name
  security_groups = [aws_security_group.backend_sg.name]

  user_data = <<-EOF
              #!/bin/bash
              apt update -y
              apt install -y nodejs npm git
              git clone https://github.com/edwindominicjoseph/mern_bookstore.git
              cd mern_bookstore/Backend
              npm install
              nohup npm run start:dev > output.log 2>&1 &
              EOF

  tags = {
    Name = "MERN-Backend"
  }
}
