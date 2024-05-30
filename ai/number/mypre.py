import torch
from torch import nn
from torch.utils.data import DataLoader
from torchvision import datasets
from torchvision.transforms import ToTensor
import numpy as np
import cv2
import os

# from mynet import NeuralNetwork

class NeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Conv2d(1, 6, kernel_size=5, padding=2),nn.BatchNorm2d(6), nn.Sigmoid(),
            nn.MaxPool2d(kernel_size=2, stride=2),
            nn.Conv2d(6, 16, kernel_size=5),nn.BatchNorm2d(16), nn.Sigmoid(),
            nn.MaxPool2d(kernel_size=2, stride=2),
            nn.Flatten(),
            nn.Linear(16 * 5 * 5, 120),nn.BatchNorm1d(120), nn.ReLU(),
            nn.Linear(120, 84),nn.BatchNorm1d(84), nn.ReLU(),
            nn.Linear(84, 10)
        )

    def forward(self, x):
        # x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits


# Get cpu, gpu or mps device for training.
device = (
    "cuda"
    if torch.cuda.is_available()
    else "mps"
    if torch.backends.mps.is_available()
    else "cpu"
)
print(f"Using {device} device")


model = NeuralNetwork().to(device)
model.load_state_dict(torch.load("./model/number-batchnorm-005.pth"))

model.eval()

# 读取本地多张图片并进行手写数字识别
folder_path = 'test_images'
imgs = []
for filename in os.listdir(folder_path):

    if filename.endswith('.png'):
        img_path = os.path.join(folder_path, filename)
        img = cv2.imread(img_path)
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        blur = cv2.GaussianBlur(gray, (3,3), 0)
        thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

        # Morph open to remove noise and invert image
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
        opening = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel, iterations=1)
        
        img = cv2.resize(opening, (28, 28), interpolation=cv2.INTER_AREA)
        imgto1 = img / 255.0
        img4 = np.expand_dims(imgto1, axis=0)
        print(f'Filename:{filename}')
        imgs.append(torch.tensor(img4,dtype=torch.float32).to(device))
preList = torch.stack(imgs,dim=0)
prediction = model(preList)
print(f' Prediction: {torch.argmax(prediction, dim=1)}')