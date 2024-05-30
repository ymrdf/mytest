import torch
from torch import nn
from torch.utils.data import DataLoader
from torchvision import datasets
from torchvision.transforms import ToTensor
import numpy as np
import cv2
import os

folder_path = 'test_images'
filename= 'm0.png'

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
      invert = 255 - opening
      
      img = cv2.resize(opening, (28, 28), interpolation=cv2.INTER_AREA)
      imgto1 = img / 255.0
      img4 = np.expand_dims(imgto1, axis=0)
      # cv2.imshow('thresh', thresh)
      # cv2.imshow('opening', opening)
      # cv2.imshow('invert', invert)
      cv2.imwrite(folder_path + '/save/'+filename,img)
      cv2.waitKey()


# net = nn.Sequential(
#             nn.Conv2d(in_channels=1, out_channels=30, kernel_size=(5, 5)),
#             nn.MaxPool2d(kernel_size=(2, 2), stride=(2, 2)),
#             nn.Conv2d(in_channels=30, out_channels=15, kernel_size=(3, 3)),
#             nn.MaxPool2d(kernel_size=(2, 2), stride=(2, 2)),
#             nn.Dropout(0.2),
#             nn.Flatten(),
#             nn.Linear(375, 128),
#             nn.ReLU(),
#             nn.Linear(128, 50),
#             nn.ReLU(),
#             nn.Linear(50,10),
#             nn.Softmax()
#         )

# X = torch.rand(size=(1, 1, 28, 28), dtype=torch.float32)
# for layer in net:
#     X = layer(X)
#     print(layer.__class__.__name__,'output shape: \t',X.shape)