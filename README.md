# 🎬 Video Mirror Assistant

A web-based tool that flips tutorial videos (YouTube, Instagram, or local files) to mirror orientation—ideal for dance, fitness, or DIY learners.

---

## 🎯 Problem It Solves

Tutorials often show actions from the opposite side, confusing learners. This tool lets users mirror the video so movements align perfectly with their own.

## 🧰 Features

- Upload & play local video files
- Mirror video horizontally in real-time
- Support for embedded YouTube and Instagram videos
- Optional backend to save flipped videos (OpenCV + Flask)
- (Advanced) Pose detection using MediaPipe for gesture controls

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript (HTML‑5 `<video>`)
- Optional Backend: Python, OpenCV, Flask
- Optional Gesture Control: MediaPipe


## 📂 Project Structure

video-mirror-assistant/
├── index.html
├── static/
│ ├── style.css
│ └── script.js
├── app.py # Optional Flask backend
├── flip_video.py # Optional OpenCV video-processing
├── uploads/ # Backend uploads (if used)
└── README.md

Test It Locally:
Frontend
Open index.html in your browser

Backend:
pip install flask opencv-python

Run server:
python app.py







