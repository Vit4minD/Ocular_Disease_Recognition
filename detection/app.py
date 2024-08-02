from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from PIL import Image
import numpy as np
import tensorflow as tf
import io

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app

model = tf.keras.models.load_model('model.h5')

def preprocess_image(image: Image.Image):
    # Resize image to 224x224
    image = image.resize((224, 224))
    # Convert to numpy array
    image_array = np.array(image)
    # Normalize pixel values to [0, 1] if needed
    image_array = image_array / 255.0
    # Expand dimensions to match model input shape (1, 224, 224, 3)
    image_array = np.expand_dims(image_array, axis=0)
    return image_array

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Open and preprocess the image
        image = Image.open(file.stream).convert('RGB')  # Ensure image is in RGB mode
        input_data = preprocess_image(image)
        
        # Make prediction
        prediction = model.predict(input_data)
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
