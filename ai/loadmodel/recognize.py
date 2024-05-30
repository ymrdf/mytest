import tensorflow as tf
import numpy as np
import cv2

# 加载模型
model = tf.keras.models.load_model('./mobilenet_v2_1.4_224.h5')

# 读取图片并进行预处理
img = cv2.imread('./image1.jpg')
img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
img_gray = cv2.resize(img_gray, (28, 28))
img_gray = img_gray.astype('float32') / 255.0
img_gray = np.expand_dims(img_gray, axis=-1)
img_gray = np.expand_dims(img_gray, axis=0)

# 对图片进行预测
predictions = model.predict(img_gray)
predicted_class = np.argmax(predictions)

# 打印预测结果
print("The predicted digit is:", predicted_class)