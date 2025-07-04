from flask import Flask, request, send_file, render_template
from flip_video import flip_video
import os

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return "Video Mirror Backend Running"

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['video']
    filepath = os.path.join(UPLOAD_FOLDER, "original.mp4")
    flipped_path = os.path.join(UPLOAD_FOLDER, "flipped.mp4")

    file.save(filepath)
    flip_video(filepath, flipped_path)

    return send_file(flipped_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
