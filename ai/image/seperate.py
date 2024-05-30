import cv2
import pytesseract

# 读取图片
img = cv2.imread('image2.jpg')

# 转换为灰度图像
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# 对图像进行二值化处理
thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]

# 进行腐蚀和膨胀操作，以去除噪点
kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
thresh = cv2.erode(thresh, kernel, iterations=1)
thresh = cv2.dilate(thresh, kernel, iterations=1)

# 查找轮廓
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# 遍历每个轮廓
for i, contour in enumerate(contours):
    # 计算轮廓的边界框
    (x, y, w, h) = cv2.boundingRect(contour)

    # 从图像中提取字符
    roi = img[y:y+h, x:x+w]

    # 使用Tesseract OCR库识别字符
    text = pytesseract.image_to_string(roi, lang='eng', config='--psm 10')

    # 如果字符不为空，保存成一个单独的图片
    if text:
        cv2.imwrite('char_{}.png'.format(i), roi)