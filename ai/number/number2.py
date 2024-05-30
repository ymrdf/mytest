import pytesseract
from PIL import Image

# 读取图片
img = Image.open('./test_images/i9.jpg')

# 转换为灰度图像
img = img.convert('L')

# 识别数字
result = pytesseract.image_to_string(img, config='--psm 10 --oem 3 -c tessedit_char_whitelist=0123456789')

# 输出结果
print(result)