import tensorflow as tf

# 创建MobileNet V2模型
model = tf.keras.applications.MobileNetV2(input_shape=(224, 224, 3), include_top=True, weights=None)

# 加载Checkpoint文件并将权重应用到Keras模型中
checkpoint_path = './model/mobilenet_v2_1.4_224.ckpt'
checkpoint = tf.train.Checkpoint(model=model)
checkpoint.restore(checkpoint_path)

# 将Keras模型保存为HDF5格式
keras_model_path = './mobilenet_v2_1.4_224.h5'
model.save(keras_model_path)

# 加载Keras模型
keras_model = tf.keras.models.load_model(keras_model_path)
